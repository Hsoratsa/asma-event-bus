export function config(env: string, default_value: string): string {
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris'

    const isLocalDev = window.location.host.includes('localhost')

    if (isLocalDev) {
        return window._env?.[env] ?? default_value
    }
    if (typeof window._env?.[connector] !== 'object') {
        throw new Error('connector conntext is missing! please check that you generated right env.js file')
    }

    return window._env_cloud?.[connector]?.[env] ?? default_value
}
