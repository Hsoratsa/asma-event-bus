export function config(env_var, default_value) {
    var _a, _b, _c;
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris';
    const srv_url = getSrvUrl(env_var);
    if (srv_url) {
        return srv_url;
    }
    if (!((_a = window._env_cloud) === null || _a === void 0 ? void 0 : _a[connector])) {
        console.debug('_env_cloud: ', window._env_cloud, 'connector:', connector);
        throw new Error('connector conntext ("adopus", "adcuris") is missing! please check that you generated right env.js file');
    }
    return ((_c = (_b = window._env_cloud[connector]) === null || _b === void 0 ? void 0 : _b[env_var]) !== null && _c !== void 0 ? _c : default_value);
}
export function configWeb(env_var, default_value) {
    var _a, _b;
    const srv_url = getSrvUrl(env_var);
    if (srv_url) {
        return srv_url;
    }
    return ((_b = (_a = window.__ENV) === null || _a === void 0 ? void 0 : _a[env_var]) !== null && _b !== void 0 ? _b : default_value);
}
function getSrvUrl(env_var) {
    var _a;
    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase();
        const srv_url = (_a = window._srvUrls) === null || _a === void 0 ? void 0 : _a[env_name];
        if (srv_url) {
            return srv_url;
        }
    }
    return;
}
export function httpToWs(url) {
    return url.replace('http', 'ws').replace('https', 'wss');
}
//# sourceMappingURL=Config.js.map