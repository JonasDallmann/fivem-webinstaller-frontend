import React, { useState } from 'react';
import type { InstallFormData } from '../types';

interface InstallFormProps {
    onSubmit: (data: InstallFormData) => void;
    isLoading: boolean;
}

export function InstallForm({ onSubmit, isLoading }: InstallFormProps) {
    const [formData, setFormData] = useState<InstallFormData>({
        host: '',
        port: 22,
        username: 'root',
        password: '',
        install_mysql: true,
        force_overwrite: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : 
                    name === 'port' ? parseInt(value) || 22 : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-3 mb-6">
                <a 
                    href="https://github.com/jonasdallmann" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-slate-800/50 border border-slate-700 hover:border-slate-500 rounded text-xs font-medium text-slate-300 hover:text-white transition-all group"
                >
                    <svg className="w-5 h-5 opacity-70 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Open Source Project</span>
                </a>
                
                <div className="flex items-center justify-center gap-2 p-3 bg-emerald-900/20 border border-emerald-800/50 rounded text-xs font-medium text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>No Credentials Stored</span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <label className="block text-xs font-medium text-slate-400 mb-1">Host / IP</label>
                        <input
                            type="text"
                            name="host"
                            required
                            placeholder="192.168.1.1"
                            className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                            value={formData.host}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">Port</label>
                        <input
                            type="number"
                            name="port"
                            required
                            className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            value={formData.port}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">SSH Username</label>
                    <input
                        type="text"
                        name="username"
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">SSH Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="••••••••"
                        className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Transmitted securely via SSL. Processed in RAM only.
                    </p>
                </div>

                <div className="pt-2 space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            name="install_mysql"
                            checked={formData.install_mysql}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-offset-slate-900 focus:ring-blue-500"
                        />
                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Install MariaDB (Database)</span>
                    </label>
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded font-medium text-sm transition-all duration-200 transform active:scale-[0.98]
                    ${isLoading 
                        ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
                    }`}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Connecting...
                    </span>
                ) : 'Verify & Start Installation'}
            </button>

            <div className="border-t border-slate-800 pt-6 mt-6">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    System Requirements
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>
                            OS: <strong className="text-slate-300">Debian 11/12</strong> or <strong className="text-slate-300">Ubuntu 20.04+</strong>
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-yellow-500 mt-0.5">⚠</span>
                        <span>
                            Access: <strong className="text-slate-300">Root / Sudo</strong> privileges required
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">ℹ</span>
                        <span>
                            Server: Fresh installation recommended
                        </span>
                    </li>
                </ul>
            </div>

        </form>
    );
}