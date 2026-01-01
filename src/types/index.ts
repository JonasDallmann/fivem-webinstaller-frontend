export interface InstallFormData {
    host: string;
    port: number;
    username: string;
    password: string;
    install_mysql: boolean;
    force_overwrite?: boolean;
}

export interface InstallResponse {
    success: boolean;
    raw_log: string;
    pin?: string;
    tx_url?: string;
    pma_url?: string; 
    error?: string;
    error_code?: string;
    mysql_host?: string;
    mysql_db?: string;
    mysql_user?: string;
    mysql_pass?: string;
    root_user?: string;
    root_pass?: string;
}