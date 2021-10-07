export function config(env_var, default_value) {
    var _a, _b, _c, _d, _e, _f;
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris';
    const isLocalDev = window.location.host.includes('localhost');
    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase();
        if ((_a = window._srvUrls) === null || _a === void 0 ? void 0 : _a[env_name]) {
            return window._srvUrls[env_name];
        }
    }
    if (isLocalDev) {
        return (_c = (_b = window.__ENV) === null || _b === void 0 ? void 0 : _b[`REACT_APP_${env_var}`]) !== null && _c !== void 0 ? _c : default_value;
    }
    if (!((_d = window._env_cloud) === null || _d === void 0 ? void 0 : _d[connector])) {
        console.debug('_env_cloud: ', window._env_cloud, 'connector:', connector);
        throw new Error('connector conntext ("adopus", "adcuris") is missing! please check that you generated right env.js file');
    }
    return (_f = (_e = window._env_cloud[connector]) === null || _e === void 0 ? void 0 : _e[env_var]) !== null && _f !== void 0 ? _f : default_value;
}
export function configWeb(env_var, default_value) {
    var _a, _b, _c;
    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase();
        if ((_a = window._srvUrls) === null || _a === void 0 ? void 0 : _a[env_name]) {
            return window._srvUrls[env_name];
        }
    }
    return (_c = (_b = window.__ENV) === null || _b === void 0 ? void 0 : _b[env_var]) !== null && _c !== void 0 ? _c : default_value;
}
export function httpToWs(url) {
    return url.replace('http', 'ws').replace('https', 'wss');
}
//# sourceMappingURL=Config.js.map