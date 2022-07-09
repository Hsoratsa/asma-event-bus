import type {History} from 'history'
export {}

declare global {
    interface Window {
        __ENV?: Record<string, string>,
        __MICROAPP_REGISTRY?: 
            {
                name: string,
                entry: string,
                container: string,
                loader:(loading: boolean) => void,
                activeRule: string,
            }[],
        _ASMA__AppShell__History__?: History
        _env_cloud?: Record<'adopus' | 'adcuris', Record<string, string>>
        _srvUrls?: Record<string, string>

        isLogged: boolean
        logoutUser: () => void
        wsConnection: any
    }
}
