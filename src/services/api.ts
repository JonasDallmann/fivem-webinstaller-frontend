import type { InstallFormData, InstallStartResponse, JobStatusResponse } from '../types';

const API_BASE = '/api';

export const InstallService = {
    async startInstall(data: InstallFormData): Promise<InstallStartResponse> {
        try {
            const response = await fetch(`${API_BASE}/install`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await response.json();

            if (response.status === 429) {
                throw new Error(json.error || "Zu viele Anfragen. Bitte warte eine Minute.");
            }

            if (!response.ok) {
                throw new Error(json.error || 'Installation konnte nicht gestartet werden.');
            }

            return json as InstallStartResponse;
        } catch (error: any) {
            console.error("API Start Error:", error);
            throw error;
        }
    },

    async getStatus(host: string): Promise<JobStatusResponse> {
        try {
            const response = await fetch(`${API_BASE}/status?host=${encodeURIComponent(host)}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const json = await response.json();

            if (!response.ok) {
                throw new Error(json.error || `Status-Abfrage fehlgeschlagen: ${response.statusText}`);
            }

            return json as JobStatusResponse;
        } catch (error: any) {
            console.error("API Status Error:", error);
            throw error;
        }
    }
};