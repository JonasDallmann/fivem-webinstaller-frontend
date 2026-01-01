import React from 'react';

interface Props {
    onBack: () => void;
}

export const Privacy: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
                <button 
                    onClick={onBack}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-slate-300 space-y-6 leading-relaxed">
                
                <section>
                    <h2 className="text-xl font-bold text-white mb-2">1. Data Storage</h2>
                    <p>
                        We respect your privacy. We <strong>do not store</strong> any personal data or sensitive information on our servers. 
                        The software operates locally or directly communicates with your specified server. 
                        No SSH credentials (usernames, passwords) are ever saved, logged, or transmitted to us.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">2. Logging & Diagnostics</h2>
                    <p>
                        To improve the software, fix bugs, and track the installation success rate, we use 
                        <strong> Discord Webhooks</strong> for logging purposes.
                    </p>
                    <p className="mt-2">
                        The following data may be transmitted:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Installation status (Success / Failure)</li>
                        <li>Error messages and error codes</li>
                        <li>The IP address of the target server (in some cases, for debugging purposes)</li>
                        <li>Timestamp of the installation attempt</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">3. No Sensitive Data</h2>
                    <p>
                        We explicitly state that SSH passwords, private keys, or other credentials are NEVER transmitted
                        via these logs. The logging mechanism is strictly limited to technical diagnostic data required to 
                        maintain and improve the stability of the FiveM Auto-Installer.
                    </p>
                </section>

                <div className="pt-8 border-t border-slate-800 text-sm text-slate-500">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};
