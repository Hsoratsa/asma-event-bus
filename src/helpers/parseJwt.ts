export function parseJwt(token: string|null) {
    const base64Url = token?.split('.')[1]
    
    if (base64Url === undefined) {
        return {}
    }
    
    return JSON.parse(decodeURIComponent(escape(window.atob(base64Url))))
}