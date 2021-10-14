
type ObjectType<T> = T extends string ?string :T extends boolean ? boolean :never

export function config<T>(env_var: string, default_value: T): ObjectType<T> {
    const connector = window.location.host.includes('adopus') ? 'adopus' : 'adcuris'

    const srv_url = getSrvUrl(env_var)

    if(srv_url){
        return srv_url as ObjectType<T>
    }

    if (!window._env_cloud?.[connector]) {
        console.debug('_env_cloud: ', window._env_cloud, 'connector:', connector)
        throw new Error(
            'connector conntext ("adopus", "adcuris") is missing! please check that you generated right env.js file',
        )
    }

    return (window._env_cloud[connector]?.[env_var] ?? default_value) as ObjectType<T>
}

export function configWeb<T>(env_var: string, default_value: T):ObjectType<T> {
    const srv_url =getSrvUrl(env_var)

    if(srv_url){
        return srv_url as ObjectType<T>
    }

    return  (window.__ENV?.[env_var] ?? default_value) as ObjectType<T>
}

function getSrvUrl(env_var:string){
    if (env_var.startsWith('SRV')) {
        const env_name = env_var.replace('SRV_', '').toLowerCase()

        const srv_url = window._srvUrls?.[env_name]
        if (srv_url) {
            return  srv_url
        }
    }
    return 
}
export function httpToWs(url: string) {
    return url.replace('http', 'ws').replace('https', 'wss')
}
