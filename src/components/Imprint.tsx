import React from 'react';

interface Props {
    onBack: () => void;
}

export const Imprint: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
                <button 
                    onClick={onBack}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-white">Legal Notice (Impressum)</h1>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-slate-300 space-y-8 leading-relaxed">
                
                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                        Jonas Dallmann<br />
                        c/o COCENTER<br />
                        Koppoldstr. 1<br />
                        86551 Aichach
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Kontakt</h2>
                    <p>
                        E-Mail: <a href="mailto:jdh@jonas.nrw" className="text-blue-400 hover:text-blue-300 underline">jdh@jonas.nrw</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-white mb-4">Redaktionell verantwortlich</h2>
                    <p>
                        Jonas Dallmann<br />
                        c/o COCENTER<br />
                        Koppoldstr. 1<br />
                        86551 Aichach
                    </p>
                </section>

                <div className="pt-8 border-t border-slate-800 text-sm text-slate-500">
                    <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 underline">Erstellt mit e-recht24.de</a></p>
                </div>
            </div>
        </div>
    );
};
