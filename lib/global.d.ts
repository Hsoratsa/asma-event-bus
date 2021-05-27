export {};
declare global {
    interface Window {
        __ENV?: Record<string, string>;
        _env_cloud?: Record<'adopus' | 'adcuris', Record<string, string>>;
        _srvUrls?: Record<string, string>;
        isLogged: boolean;
        logoutUser: () => void;
        wsConnection: any;
    }
}
//# sourceMappingURL=global.d.ts.map