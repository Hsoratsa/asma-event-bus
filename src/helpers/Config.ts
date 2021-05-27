export function config<T>(env_var: string, default_value: T): T {
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris'

    const isLocalDev = window.location.host.includes('localhost')

    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase()

        if (window._srvUrls?.[env_name]) {
            return (window._srvUrls[env_name] as unknown) as T
        }
    }

    if (isLocalDev) {
        return ((window.__ENV?.[`REACT_APP_${env_var}`] as unknown) as T) ?? default_value
    }

    if (!window._env_cloud?.[connector]) {
        console.debug('_env_cloud: ', window._env_cloud, 'connector:', connector)
        throw new Error(
            'connector conntext ("adopus", "adcuris") is missing! please check that you generated right env.js file',
        )
    }

    return ((window._env_cloud[connector]?.[env_var] as unknown) as T) ?? default_value
}
