export {}
declare global {
    interface Window {
        _env?: Record<string, string | undefined>
        _env_cloud?: Record<'adopus' | 'adcuris', Record<string, string | undefined>>

        isLogged: boolean
        logoutUser: () => void
        wsConnection: any
    }
}
