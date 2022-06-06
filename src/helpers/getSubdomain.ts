export function getSubdomain() {
    const hostname_arr = window.location.hostname.split('.')

    let subdomain = ''

    if (
        hostname_arr.length === 3 &&
        hostname_arr[0] &&
        !['dev', 'test', 'stage', 'intern', 'www'].find((sub) => sub === hostname_arr[0])
    ) {
        subdomain = hostname_arr[0]

        const subdomain_arr = subdomain.split('-')

        if (subdomain_arr.length === 2 && subdomain_arr[0]) {
            subdomain = subdomain_arr[0]
        }
    }
    return subdomain
}