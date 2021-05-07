export function config(env, default_value) {
    var _a, _b, _c, _d, _e, _f;
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris';
    const isLocalDev = window.location.host.includes('localhost');
    if (isLocalDev) {
        return (_b = (_a = window._env) === null || _a === void 0 ? void 0 : _a[env]) !== null && _b !== void 0 ? _b : default_value;
    }
    if (typeof ((_c = window._env) === null || _c === void 0 ? void 0 : _c[connector]) !== 'object') {
        throw new Error('connector conntext is missing! please check that you generated right env.js file');
    }
    return (_f = (_e = (_d = window._env_cloud) === null || _d === void 0 ? void 0 : _d[connector]) === null || _e === void 0 ? void 0 : _e[env]) !== null && _f !== void 0 ? _f : default_value;
}
//# sourceMappingURL=Config.js.map