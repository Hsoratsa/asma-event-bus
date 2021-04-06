export {}
declare global {
    interface Window {
        _env: {
            [key: string]: string | undefined
        }
        isLogged: boolean
        logoutUser: () => void
        wsConnection: any
    }
}
