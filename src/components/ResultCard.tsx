import React from 'react';
import type { InstallResponse } from '../types';

interface Props {
    result: InstallResponse;
    onReset: () => void;
    onForce: () => void; 
}

const PortErrorModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-orange-500/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-orange-500/10 p-6 border-b border-orange-500/20 flex gap-4 items-center">
                <div className="text-3xl">⚠️</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Port in use</h3>
                    <p className="text-orange-300 text-sm">Port 40120 is already in use</p>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm">
                    A process is already running on port 40120. Please terminate this process manually.
                </p>
                <div className="bg-black/50 rounded p-3 border border-slate-700">
                    <code className="text-yellow-400 font-mono text-xs block">pkill -f fx-server</code>
                </div>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm">
                    Understood
                </button>
            </div>
        </div>
    </div>
);

const WebserverConflictModal: React.FC<{ onClose: () => void; onForce: () => void }> = ({ onClose, onForce }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-purple-500/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="bg-purple-500/10 p-6 border-b border-purple-500/20 flex gap-4 items-center">
                <div className="text-3xl">🌐</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Webserver Conflict</h3>
                    <p className="text-purple-300 text-sm">Installation stopped</p>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm">
                    <strong>Apache2</strong> is already installed on this server.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                    To avoid destroying existing websites, the installation of phpMyAdmin was paused.
                    If you choose "Install anyway", we will ignore Apache2 (phpMyAdmin installation might fail or overwrite configs).
                </p>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm">
                    Cancel
                </button>
                <button 
                    onClick={onForce} 
                    className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm"
                >
                    Install anyway
                </button>
            </div>
        </div>
    </div>
);

const AlreadyInstalledModal: React.FC<{ onClose: () => void; onForce: () => void }> = ({ onClose, onForce }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-blue-500/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-blue-500/10 p-6 border-b border-blue-500/20 flex gap-4 items-center">
                <div className="text-3xl">📁</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Server already exists</h3>
                    <p className="text-blue-300 text-sm">Safety stop</p>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm">
                    An existing installation was found. Do you want to delete and overwrite it?
                </p>
                <div className="bg-red-500/10 border border-red-500/20 rounded p-3">
                    <p className="text-red-400 text-xs font-bold">⚠️ WARNING: Data loss!</p>
                    <p className="text-red-300/70 text-xs">
                        The entire folder <code>/home/FiveM/server</code> will be irrevocably deleted.
                    </p>
                </div>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm">
                    Cancel
                </button>
                <button 
                    onClick={onForce} 
                    className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-lg shadow-red-500/20"
                >
                    🗑️ Delete & Reinstall
                </button>
            </div>
        </div>
    </div>
);

const AuthErrorModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-red-500/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="bg-red-500/10 p-6 border-b border-red-500/20 flex gap-4 items-center">
                <div className="text-3xl">🔑</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Login failed</h3>
                    <p className="text-red-300 text-sm">Access denied</p>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm">
                    We could not connect to the server. This is mostly due to incorrect credentials.
                </p>
                <ul className="space-y-2 text-sm text-slate-400 bg-black/30 p-4 rounded border border-slate-800">
                    <li className="flex items-center gap-2">❌ Is the password correct? (Case sensitivity)</li>
                    <li className="flex items-center gap-2">❌ Is the user really named <code>root</code> (or something else)?</li>
                    <li className="flex items-center gap-2">❌ Does the server allow password login?</li>
                </ul>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-lg shadow-red-500/20">
                    Correct data
                </button>
            </div>
        </div>
    </div>
);

const ConnectionErrorModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-slate-600 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            <div className="bg-slate-800 p-6 border-b border-slate-700 flex gap-4 items-center">
                <div className="text-3xl">🔌</div>
                <div>
                    <h3 className="text-xl font-bold text-white">Server unreachable</h3>
                    <p className="text-slate-400 text-sm">Timeout / Connection Refused</p>
                </div>
            </div>
            <div className="p-6 space-y-4">
                <p className="text-slate-300 text-sm">
                    The server is not responding on port 22.
                </p>
                <div className="text-sm text-slate-400">
                    Possible reasons:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Incorrect IP address entered.</li>
                        <li>Server is offline.</li>
                        <li>SSH is running on a port other than 22 (Standard).</li>
                    </ul>
                </div>
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium text-sm">
                    OK
                </button>
            </div>
        </div>
    </div>
);

const FullSystemConflictModal: React.FC<{ onClose: () => void; onForce: () => void }> = ({ onClose, onForce }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
        <div className="relative bg-slate-900 border border-red-500/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95">
            
            <div className="bg-red-500/10 p-6 border-b border-red-500/20 flex gap-4 items-center">
                <div className="text-3xl">⛔</div>
                <div>
                    <h3 className="text-xl font-bold text-white">System conflict</h3>
                    <p className="text-red-300 text-sm">Multiple problems detected</p>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <p className="text-slate-300 text-sm font-medium">
                    We found two problems preventing installation:
                </p>

                <div className="flex gap-3 items-start">
                    <div className="bg-slate-800 p-2 rounded text-lg">📁</div>
                    <div>
                        <h4 className="text-white text-sm font-bold">Server already exists</h4>
                        <p className="text-slate-400 text-xs mt-1">
                            The folder <code>/home/FiveM/server</code> is not empty.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 items-start">
                    <div className="bg-slate-800 p-2 rounded text-lg">🌐</div>
                    <div>
                        <h4 className="text-white text-sm font-bold">Webserver Conflict</h4>
                        <p className="text-slate-400 text-xs mt-1">
                            Apache2 is installed. phpMyAdmin setup might fail.
                        </p>
                    </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded p-4 mt-2">
                    <p className="text-red-400 text-xs font-bold uppercase mb-1">Consequence of "Force":</p>
                    <ul className="list-disc pl-4 text-xs text-red-300/80 space-y-1">
                        <li>The old server folder will be <strong>completely deleted</strong>.</li>
                        <li>We try to install phpMyAdmin over the existing Apache (Risk).</li>
                        <li>Data loss and service interruptions may occur.</li>
                    </ul>
                </div>
            </div>

            <div className="p-4 bg-slate-950/50 border-t border-slate-800 flex justify-end gap-3">
                <button onClick={onClose} className="px-4 py-2 rounded-lg text-slate-400 hover:text-white text-sm">
                    Cancel
                </button>
                <button 
                    onClick={onForce} 
                    className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-lg shadow-red-500/20 animate-pulse-slow"
                >
                    💣 Wipe everything & Install
                </button>
            </div>
        </div>
    </div>
);


export const ResultCard: React.FC<Props> = ({ result, onReset, onForce }) => {
    
    if (result.error_code === 'AUTH_ERROR') return <AuthErrorModal onClose={onReset} />;
    if (result.error_code === 'CONN_ERROR') return <ConnectionErrorModal onClose={onReset} />;
    
    if (result.error_code === 'PORT_ERROR') return <PortErrorModal onClose={onReset} />;
    if (result.error_code === 'ALREADY_INSTALLED') return <AlreadyInstalledModal onClose={onReset} onForce={onForce} />;
    if (result.error_code === 'WEBSERVER_CONFLICT') return <WebserverConflictModal onClose={onReset} onForce={onForce} />;
    if (result.error_code === 'FULL_SYSTEM_CONFLICT') return <FullSystemConflictModal onClose={onReset} onForce={onForce} />;

    if (result.success) {
        return (
            <div className="bg-green-950/20 border border-green-500/30 rounded-xl p-0 overflow-hidden animate-fade-in shadow-2xl shadow-green-900/10">
                
                <div className="bg-green-500/10 p-6 border-b border-green-500/20 text-center">
                    <div className="inline-flex p-3 rounded-full bg-green-500/20 text-3xl mb-3 shadow-inner">✅</div>
                    <h2 className="text-2xl font-bold text-white">Server successfully installed!</h2>
                    <p className="text-green-300 text-sm mt-1">Your system is ready for use.</p>
                </div>

                <div className="p-6 space-y-8">
                    
                    <div className="space-y-3">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span> txAdmin Access
                        </h3>
                        
                        <div className="bg-slate-900/50 rounded-lg border border-slate-800 p-4 flex flex-col gap-6">
                            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                                <div className="text-center shrink-0">
                                    <p className="text-xs text-slate-500 mb-1">Admin PIN</p>
                                    <div className="bg-black border border-slate-700 rounded px-6 py-2">
                                        <span className="text-3xl font-mono font-bold text-white tracking-[0.2em] select-all">{result.pin}</span>
                                    </div>
                                </div>

                                {result.tx_url && (
                                    <a 
                                        href={result.tx_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg text-center transition-all hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                                    >
                                        🚀 Open txAdmin
                                        <div className="text-[10px] font-normal opacity-70 mt-0.5">{result.tx_url}</div>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {result.mysql_user && (
                        <div className="space-y-3 animate-in slide-in-from-bottom-4 duration-700">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span> Database Credentials
                            </h3>
                            
                            <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden mb-4">
                                <div className="p-3 bg-slate-950/30 border-b border-slate-800">
                                    <span className="text-[10px] text-orange-400 font-bold uppercase">Standard (For txAdmin)</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                                    <div className="p-4">
                                        <p className="text-xs text-slate-500 mb-1">User</p>
                                        <p className="font-mono text-slate-200 font-bold select-all">{result.mysql_user}</p>
                                        <p className="text-[10px] text-slate-600 mt-1">DB: {result.mysql_db}</p>
                                    </div>
                                    <div className="p-4">
                                        <p className="text-xs text-slate-500 mb-1">Password</p>
                                        <p className="font-mono text-slate-300 select-all blur-[3px] hover:blur-none transition-all cursor-pointer">
                                            {result.mysql_pass}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {result.root_user && (
                                <div className="bg-red-950/10 rounded-lg border border-red-900/30 overflow-hidden">
                                    <div className="p-3 bg-red-950/20 border-b border-red-900/20 flex justify-between items-center">
                                        <span className="text-[10px] text-red-400 font-bold uppercase">Superuser (Full Rights / Remote)</span>
                                        <span className="text-[10px] text-red-500/50">⚠️ Use with caution</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-red-900/20">
                                        <div className="p-4">
                                            <p className="text-xs text-slate-500 mb-1">Root User</p>
                                            <p className="font-mono text-red-200 font-bold select-all">{result.root_user}</p>
                                        </div>
                                        <div className="p-4">
                                            <p className="text-xs text-slate-500 mb-1">Root Password</p>
                                            <p className="font-mono text-red-200/80 select-all blur-[3px] hover:blur-none transition-all cursor-pointer">
                                                {result.root_pass}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {result.pma_url && (
                                <div className="bg-slate-950/50 p-3 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-3 rounded-b-lg">
                                    <a 
                                        href={result.pma_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-full md:w-auto px-4 py-2 rounded bg-orange-600/10 hover:bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs font-bold transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                                    >
                                        📂 Open phpMyAdmin
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                <div className="bg-slate-950/50 p-4 border-t border-slate-800 text-center">
                    <button onClick={onReset} className="text-slate-400 hover:text-white text-sm transition-colors">
                        Close Installation
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-6 animate-shake border-l-4 border-l-red-500">
            <div className="flex items-start gap-4">
                <div className="text-3xl">❌</div>
                <div className="flex-1 text-left">
                    <h3 className="font-bold text-white text-lg">Error</h3>
                    <p className="text-red-200 mt-1">{result.error || "An unknown error occurred."}</p>
                    
                    {result.raw_log && (
                         <details className="mt-4 cursor-pointer group">
                            <summary className="text-xs text-red-400 font-mono hover:text-red-300 transition-colors list-none flex items-center gap-2">
                                <span className="group-open:rotate-90 transition-transform">▶</span> Log Details
                            </summary>
                            <pre className="mt-2 text-[10px] text-slate-400 bg-black/50 p-2 rounded overflow-x-auto whitespace-pre-wrap font-mono border border-white/10 max-h-60 custom-scrollbar">
                                {result.raw_log}
                            </pre>
                         </details>
                    )}
                </div>
            </div>
            
            <div className="mt-6 text-right">
                 <button onClick={onReset} className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                    Back
                </button>
            </div>
        </div>
    );
};