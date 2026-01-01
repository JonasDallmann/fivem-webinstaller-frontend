import React from 'react';

interface Props {
    onBack: () => void;
}

export const AGBPage: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
                <button 
                    onClick={onBack}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-white">Terms and Conditions</h1>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-slate-300 space-y-6 leading-relaxed">
                
                <section>
                    <h2 className="text-xl font-bold text-white mb-2">1. Scope</h2>
                    <p>
                        These Terms and Conditions apply to the use of the software 
                        <strong> "FiveM Auto-Installer"</strong> (hereinafter referred to as "Software").
                        The Software is provided in an <strong>early development / alpha stage (v1)</strong>.
                        Use of the Software is entirely at your own risk.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">2. No Warranty</h2>
                    <p>
                        The Software is provided <strong>"as is"</strong> and <strong>"as available"</strong>,
                        without any express or implied warranties of any kind. This includes, but is not limited to,
                        warranties of merchantability, fitness for a particular purpose, reliability, accuracy,
                        availability, or non-infringement.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">3. Limitation of Liability</h2>
                    <p>
                        The developer shall <strong>not be liable</strong> for any direct, indirect, incidental,
                        special, consequential, or exemplary damages arising out of or in connection with the use
                        or inability to use the Software.
                    </p>
                    <p>
                        This includes, without limitation:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Data loss or corruption</li>
                        <li>System damage or misconfiguration</li>
                        <li>Server outages or crashes</li>
                        <li>Security issues or vulnerabilities</li>
                        <li>Loss of profits, revenue, or business</li>
                        <li>Game, FiveM, or operating system malfunctions</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">4. User Responsibility</h2>
                    <p>
                        The user is solely responsible for ensuring that their system meets all technical
                        requirements and that appropriate <strong>backups</strong> are created before using
                        the Software. The developer assumes no responsibility for failures caused by improper
                        use, configuration errors, or incompatible systems.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">5. Third-Party Software</h2>
                    <p>
                        The Software may download, install, or interact with third-party software and services
                        (including but not limited to FiveM Artifacts, databases, or server components).
                        The developer is not responsible for the content, functionality, or licensing of any
                        third-party components. The respective licenses and terms of those providers apply.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">6. Indemnification</h2>
                    <p>
                        By using the Software, you agree to indemnify and hold harmless the developer from
                        any claims, damages, losses, liabilities, or expenses arising from your use of the Software
                        or violation of these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-2">7. Final Provisions</h2>
                    <p>
                        If any provision of these Terms is found to be invalid or unenforceable, the remaining
                        provisions shall remain in full force and effect.
                    </p>
                </section>

                <div className="pt-8 border-t border-slate-800 text-sm text-slate-500">
                    <p>Status: {new Date().toLocaleDateString()}</p>
                    <p>Contact: via <a href='https://discord.gg/x1337x' className="underline" target="_blank" rel="noopener noreferrer">Discord</a></p>
                </div>
            </div>
        </div>
    );
};
