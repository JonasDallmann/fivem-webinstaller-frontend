import React, { useState } from 'react';

const Installer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null); 
  const [data, setData] = useState(null);
  const [showLog, setShowLog] = useState(false);

  const startInstall = async () => {
    setIsLoading(true);
    setResult(null);
    setData(null);
    setShowLog(false);

    try {
      const response = await fetch('/api/install', { method: 'POST' });
      const textResponse = await response.text();

      const jsonMatch = textResponse.match(/JSON_START\s*([\s\S]*?)\s*JSON_END/);

      if (jsonMatch && jsonMatch[1]) {
        const jsonData = JSON.parse(jsonMatch[1]);
        setData(jsonData);
        setResult(jsonData.status === 'success' ? 'success' : 'error');
      } else {
        throw new Error('Invalid response from installer script');
      }
    } catch (error) {
      setResult('error');
      setData({
        error_title: "Connection Error",
        error_message: "Could not reach API.",
        raw_log: error.toString()
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-gray-900 text-white rounded-xl shadow-2xl border border-gray-700 overflow-hidden font-sans">
      
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <h2 className="text-xl font-bold flex items-center gap-2">
          🚀 FiveM Server Installer
        </h2>
      </div>

      <div className="p-6">
        
        {!isLoading && result !== 'success' && (
          <div className="text-center py-8">
            <p className="text-gray-400 mb-6">
              Click below to download FiveM (if necessary) and start txAdmin.
            </p>
            <button
              onClick={startInstall}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg active:scale-95"
            >
              Start Installation
            </button>
          </div>
        )}
        

        {isLoading && (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-blue-400 font-medium animate-pulse">
              Server is being prepared...
            </p>
            <p className="text-xs text-gray-500 mt-2">Download & Start (may take up to 30s)</p>
          </div>
        )}

        {result === 'success' && data && (
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6 text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg shadow-green-500/20">
              ✅
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Server is running!</h3>
            <p className="text-gray-300 mb-4">Connect your txAdmin with this PIN:</p>
            
            <div className="bg-black/50 rounded-md py-4 px-6 inline-block border border-green-500/30 mb-4">
              <span className="text-4xl font-mono font-bold tracking-[0.2em] text-white">
                {data.pin}
              </span>
            </div>
            
            <p className="text-xs text-gray-500 font-mono">PID: {data.pid}</p>
          </div>
        )}

        {result === 'error' && data && (
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 animate-shake">
            <div className="flex items-start gap-4">
              <div className="text-3xl">❌</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-400 mb-1">
                  {data.error_title || 'Error'}
                </h3>
                <p className="text-red-200 mb-4">
                  {data.error_message}
                </p>

                <button
                  onClick={() => setShowLog(!showLog)}
                  className="text-sm text-gray-400 hover:text-white underline decoration-dotted underline-offset-4"
                >
                  {showLog ? 'Hide details ▲' : 'Show technical details ▼'}
                </button>

                {showLog && (
                  <div className="mt-4 bg-black rounded p-3 border border-gray-700 overflow-x-auto">
                    <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
                      {data.raw_log || 'No logs available.'}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={startInstall}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
              >
                Try again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installer;