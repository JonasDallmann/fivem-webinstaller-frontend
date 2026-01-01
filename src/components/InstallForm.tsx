import React, { useState } from 'react';
import type { InstallFormData } from '../types';

interface Props {
    onSubmit: (data: InstallFormData) => void;
    isLoading: boolean;
}

export const InstallForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
    const [formData, setFormData] = useState<InstallFormData>({
        host: '',
        port: 22,
        username: '',
        password: '',
        install_mysql: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (name === 'port' ? parseInt(value) : value)
        }));
    };

    return (
        <div className="bg-slate-900/50 rounded-lg p-1">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-xs text-slate-400 block mb-1">Server IP-Address</label>
                        <input name="host" value={formData.host} placeholder="e.g 192.168.1.1" onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                    </div>
                    <div>
                        <label className="text-xs text-slate-400 block mb-1">SSH Port</label>
                        <input name="port" type="number" value={formData.port} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                    </div>
                </div>

                <div>
                    <label className="text-xs text-slate-400 block mb-1">System User</label>
                    <input name="username" placeholder="e.g root" value={formData.username} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                </div>
                <div>
                    <label className="text-xs text-slate-400 block mb-1">Password</label>
                    <input name="password" type="password" value={formData.password} onChange={handleChange} className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-sm text-white focus:border-blue-500 outline-none" />
                </div>

                <div className="pt-2 border-t border-slate-800">
                    <label className="flex items-center gap-2 cursor-pointer mb-2">
                        <input type="checkbox" name="install_mysql" checked={formData.install_mysql} onChange={handleChange} className="rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-0" />
                        <span className="text-sm text-slate-300">Install MySQL Database?</span>
                    </label>
                </div>

                <button
                    onClick={() => onSubmit(formData)}
                    disabled={isLoading}
                    className={`w-full py-3 mt-2 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                        isLoading 
                        ? 'bg-slate-800 text-slate-400 cursor-wait' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 active:scale-[0.98]'
                    }`}
                >
                    {isLoading ? 'Installing...' : '🚀 Start Installation'}
                </button>
                <p className="text-xs text-slate-400 mt-2 text-center">By clicking "Start Installation", you agree to our Terms and Conditions.</p>
            </div>
        </div>
    );
};