import type { InstallFormData, InstallResponse } from '../types';

export const InstallService = {
    installServer: async (formData: InstallFormData): Promise<InstallResponse> => {
        try {
            const response = await fetch('/api/install', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const text = await response.text();
            
            const match = text.match(/JSON_START\s*([\s\S]*?)\s*JSON_END/);

            if (match && match[1]) {
                const cleanContent = match[1].trim();
                try {
                    const jsonString = cleanContent.startsWith('"') ? cleanContent : `"${cleanContent}"`;
                    const unescapedString = JSON.parse(jsonString);
                    return JSON.parse(unescapedString) as InstallResponse;
                } catch (e) {
                    try { return JSON.parse(cleanContent) as InstallResponse; } catch (e2) {}
                    
                    return {
                        success: false,
                        error: "Script-Antwort konnte nicht geparst werden.",
                        raw_log: `Content: ${cleanContent}\nError: ${e}`
                    };
                }
            } 
            try {
                const directJson = JSON.parse(text);
                
                if (directJson && (typeof directJson.success === 'boolean' || directJson.error)) {
                    return directJson as InstallResponse;
                }
            } catch (e) {
            }

            return {
                success: false,
                error: "Ungültige Antwortstruktur vom Backend (Keine Marker & kein JSON).",
                raw_log: text
            };

        } catch (error: any) {
            return {
                success: false,
                error: "Netzwerkfehler: Konnte API nicht erreichen",
                raw_log: error.toString()
            };
        }
    }
};
