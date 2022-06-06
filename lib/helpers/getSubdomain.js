export function getSubdomain() {
    const pathname_arr = window.location.pathname.split('.');
    let subdomain = '';
    if (pathname_arr.length === 3 &&
        pathname_arr[0] &&
        !['dev', 'test', 'stage', 'intern', 'www'].find((sub) => sub === pathname_arr[0])) {
        subdomain = pathname_arr[0];
        const subdomain_arr = subdomain.split('-');
        if (subdomain.length === 2 && subdomain_arr[0]) {
            subdomain = subdomain_arr[0];
        }
    }
    return subdomain;
}
//# sourceMappingURL=getSubdomain.js.map