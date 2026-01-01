import React from 'react';

interface Props {
    logs: string;
}

export const LogViewer: React.FC<Props> = ({ logs }) => {
    if (!logs) return null;
    
    return (
        <div className="relative group">
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-slate-700 text-xs text-white px-2 py-1 rounded">Logs</span>
            </div>
            <pre className="bg-black text-green-500 p-4 rounded-lg overflow-x-auto text-xs font-mono max-h-[300px] shadow-inner border border-slate-800 whitespace-pre-wrap">
                {logs}
            </pre>
        </div>
    );
};