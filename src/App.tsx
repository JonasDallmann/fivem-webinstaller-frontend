import { useState, useRef, useEffect } from 'react';
import { InstallForm } from './components/InstallForm';
import { ResultCard } from './components/ResultCard';
import { WelcomeModal } from './components/WelcomeModal';
import { AGBPage } from './components/Terms';
import { Credits } from './components/Credits';
import { Privacy } from './components/Privacy';
import { Imprint } from './components/Imprint';
import { InstallService } from './services/api';
import type { InstallFormData, InstallResponse } from './types';

type ViewState = 'INSTALLER' | 'AGB' | 'CREDITS' | 'PRIVACY' | 'IMPRINT';

function App() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<InstallResponse | null>(null);
    const [lastFormData, setLastFormData] = useState<InstallFormData | null>(null);

    const [showWelcome, setShowWelcome] = useState(true);
    const [currentView, setCurrentView] = useState<ViewState>('INSTALLER');

    const pollingRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (pollingRef.current) clearInterval(pollingRef.current);
        };
    }, []);

    const startPolling = (host: string) => {
        if (pollingRef.current) clearInterval(pollingRef.current);

        pollingRef.current = window.setInterval(async () => {
            try {
                const statusData = await InstallService.getStatus(host);
                
                if (statusData.status === 'COMPLETED' || statusData.status === 'ERROR') {
                    if (pollingRef.current) clearInterval(pollingRef.current);
                    setLoading(false);
                    
                    if (statusData.result) {
                        setResult(statusData.result);
                    } else {
                        setResult({
                            success: false,
                            raw_log: statusData.logs, 
                            error: 'Unknown Error (Status: ' + statusData.status + ')',
                            error_code: 'UNKNOWN'
                        });
                    }
                }
            } catch (err) {
                console.error("Polling Error:", err);
            }
        }, 1000); 
    };

    const handleInstall = async (formData: InstallFormData) => {
        setLoading(true);
        setResult(null);
        setLastFormData(formData);
        
        try {
            await InstallService.startInstall(formData);
            startPolling(formData.host);
        } catch (error: any) {
            setLoading(false);
            setResult({
                success: false,
                raw_log: '',
                error: error.message || 'Failed to start installation',
                error_code: 'START_ERROR'
            });
        }
    };

    const handleForceRetry = () => {
        if (!lastFormData) return;
        const forceData: InstallFormData = { ...lastFormData, force_overwrite: true };
        handleInstall(forceData);
    };

    const openAGB = () => {
        setShowWelcome(false);
        setCurrentView('AGB');
    };

    return (
        <div className="h-screen bg-slate-950 text-slate-200 flex flex-col overflow-hidden font-sans">
            
            {showWelcome && (
                <WelcomeModal 
                    onClose={() => setShowWelcome(false)} 
                    onOpenAGB={openAGB} 
                />
            )}

            <header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between shadow-md z-10 shrink-0">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('INSTALLER')}>
                    <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">Fx</div>
                    <div>
                        <h1 className="font-bold text-lg text-white leading-tight">FiveM Auto-Installer</h1>
                        <p className="text-xs text-slate-400">Alpha v1 • by 1337jxnas</p>
                    </div>
                </div>
                <div className="flex gap-4 text-sm">
                    <button onClick={() => setCurrentView('AGB')} className="text-slate-400 hover:text-white transition-colors">Terms of Service</button>
                    <button onClick={() => setCurrentView('PRIVACY')} className="text-slate-400 hover:text-white transition-colors">Privacy</button>
                    <button onClick={() => setCurrentView('IMPRINT')} className="text-slate-400 hover:text-white transition-colors">Imprint</button>
                    <button onClick={() => setCurrentView('CREDITS')} className="text-slate-400 hover:text-white transition-colors">Credits</button>
                    <button onClick={() => window.open('https://discord.gg/x1337x', '_blank')} className="text-slate-400 hover:text-white transition-colors font-medium">Discord</button>
                    <button onClick={() => window.open('https://github.com/JonasDallmann/fivem-webinstaller-frontend/issues', '_blank')} className="text-slate-400 hover:text-white transition-colors">GitHub Issues</button>
                </div>
            </header>

            <main className="flex-1 min-h-0 relative">
                
                {currentView === 'AGB' && (
                    <div className="absolute inset-0 overflow-y-auto bg-slate-950 z-20">
                        <AGBPage onBack={() => setCurrentView('INSTALLER')} />
                    </div>
                )}

                {currentView === 'CREDITS' && (
                    <div className="absolute inset-0 overflow-y-auto bg-slate-950 z-20">
                        <Credits onBack={() => setCurrentView('INSTALLER')} />
                    </div>
                )}

                {currentView === 'PRIVACY' && (
                    <div className="absolute inset-0 overflow-y-auto bg-slate-950 z-20">
                        <Privacy onBack={() => setCurrentView('INSTALLER')} />
                    </div>
                )}

                {currentView === 'IMPRINT' && (
                    <div className="absolute inset-0 overflow-y-auto bg-slate-950 z-20">
                        <Imprint onBack={() => setCurrentView('INSTALLER')} />
                    </div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-12 h-full ${currentView !== 'INSTALLER' ? 'hidden' : ''}`}>
                    
                    <div className="lg:col-span-4 xl:col-span-3 bg-slate-900/50 border-r border-slate-800 flex flex-col h-full overflow-y-auto custom-scrollbar">
                        <div className="p-6 space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold text-white">Configuration</h2>
                                <p className="text-sm text-slate-400">Define Server Parameters</p>
                            </div>
                            <InstallForm onSubmit={handleInstall} isLoading={loading} />
                        </div>
                    </div>

                    <div className="lg:col-span-8 xl:col-span-9 bg-black relative flex flex-col h-full min-h-0">
                        {result ? (
                            <div className="h-full overflow-y-auto p-6">
                                <ResultCard 
                                    result={result} 
                                    onReset={() => setResult(null)} 
                                    onForce={handleForceRetry}
                                />
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col relative overflow-hidden">
                                {loading ? (
                                    <div className="m-auto text-center space-y-8 p-10 max-w-md animate-in fade-in zoom-in duration-500">
                                        
                                        <div className="relative mx-auto w-24 h-24">
                                            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse"></div>
                                            <div className="relative w-full h-full border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-bold text-xl animate-pulse">
                                                Fx
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-semibold text-white">Installing Server...</h3>
                                            <p className="text-slate-400 leading-relaxed">
                                                Please wait while we configure your FiveM server.
                                            </p>
                                        </div>

                                        <div className="inline-block bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-2 text-xs text-orange-400/90 font-medium">
                                            ⚠️ Do not close this window. <br/> This can take up to 90 seconds.
                                        </div>
                                    </div>
                                ) : (
                                    <div className="m-auto text-center opacity-20 select-none pointer-events-none">
                                        <div className="text-9xl font-black text-slate-800 mb-6">Fx</div>
                                        <p className="text-slate-500 text-lg">Ready to deploy</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <footer className="bg-slate-900 border-t border-slate-800 p-3 text-center shrink-0">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest">
                    This project is not affiliated with, authorized, or endorsed by FiveM or txAdmin.
                </p>
            </footer>
        </div>
    );
}

export default App;
