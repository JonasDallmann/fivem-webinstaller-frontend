import React, { useEffect, useState } from 'react';

interface Props {
    onClose: () => void;
    onOpenAGB: () => void;
}

export const WelcomeModal: React.FC<Props> = ({ onClose, onOpenAGB }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"></div>

            <div className="relative bg-slate-900 border border-blue-500/30 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-300 ring-1 ring-white/10">
                
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 pb-6 border-b border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl leading-none select-none font-black text-white pointer-events-none">
                        v1
                    </div>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        ALPHA STATUS
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome to the FiveM Auto-Installer</h2>
                    <p className="text-slate-400 text-sm">Version 1.0.0 • Development Build</p>
                </div>

                <div className="p-8 space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                        This tool is currently in the <strong>Alpha phase</strong> and is being continuously developed.
                        Errors may occur. Please use the tool with caution on production systems.
                    </p>

                    <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800 flex items-start gap-4">
                        <div className="text-2xl">🐛</div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Found a bug?</h4>
                            <p className="text-slate-400 text-xs mt-1 mb-2">
                                Help us improve the tool by reporting bugs on GitHub.
                            </p>
                            <a 
                                href="https://github.com/JonasDallmann/fivem-webinstaller-frontend/issues" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 text-xs font-bold flex items-center gap-1 hover:underline"
                            >
                                Go to GitHub Issues ↗
                            </a>
                        </div>
                    </div>

                    <div className="text-xs text-slate-500 text-center">
                        By using this, you accept our{' '}
                        <button onClick={onOpenAGB} className="text-slate-400 hover:text-white underline transition-colors">
                            Terms and Conditions (T&C)
                        </button>.
                    </div>
                </div>

                <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                    >
                        Understood & Start
                    </button>
                </div>
            </div>
        </div>
    );
};