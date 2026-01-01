import React from 'react';

interface Props {
    onBack: () => void;
}

export const Credits: React.FC<Props> = ({ onBack }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
                <button 
                    onClick={onBack}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                    ← Back
                </button>
                <h1 className="text-3xl font-bold text-white">Credits</h1>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-slate-300 space-y-6 leading-relaxed">
                
                <section className="text-center space-y-4">
                    <h2 className="text-xl font-bold text-white">Special Thanks</h2>
                    <p>
                        This project wouldn't have been possible without the support of these amazing people.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col items-center hover:border-blue-500/50 transition-colors">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white mb-4">
                            <img src="https://avatars.githubusercontent.com/u/28491190?v=4" alt="Julian Gransee" className="w-15 h-15 rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold text-white"><a href="https://github.com/Twe3x" target="_blank" rel="noopener noreferrer" className="underline">Twe3x</a></h3>
                        <p className="text-sm text-slate-400 mt-2 text-center">
                            Thank you for creating the FiveM installer shell script. 
                        </p>
                    </div>

                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6 flex flex-col items-center hover:border-purple-500/50 transition-colors">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white mb-4">
                            <img src="https://avatars.githubusercontent.com/u/61429516?v=4" alt="Julian Gransee" className="w-15 h-15 rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold text-white"><a href="https://github.com/JulianGransee" target="_blank" rel="noopener noreferrer" className="underline">Julian Gransee</a></h3>
                        <p className="text-sm text-slate-400 mt-2 text-center">
                            Thank you for publishing the phpMyAdmin installer script.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
