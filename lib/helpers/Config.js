export function config(env_var, default_value) {
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris';
    const isLocalDev = window.location.host.includes('localhost');
    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase();
        if (window._srvUrls?.[env_name]) {
            return window._srvUrls[env_name];
        }
    }
    if (isLocalDev) {
        return window._env?.[`REACT_APP_${env_var}`] ?? default_value;
    }
    if (!window._env_cloud?.[connector]) {
        console.debug('_env_cloud: ', window._env_cloud, 'connector:', connector);
        throw new Error('connector conntext ("adopus", "adcuris") is missing! please check that you generated right env.js file');
    }
    return window._env_cloud[connector]?.[env_var] ?? default_value;
}
//# sourceMappingURL=Config.js.map