export function parseJwt(token) {
    const base64Url = token === null || token === void 0 ? void 0 : token.split('.')[1];
    if (base64Url === undefined) {
        return {};
    }
    return JSON.parse(decodeURIComponent(escape(window.atob(base64Url))));
}
//# sourceMappingURL=parseJwt.js.map