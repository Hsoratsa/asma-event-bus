export {}
declare global {
    interface Window {
        isLogged: boolean
        logoutUser: () => void
        wsConnection: any
    }
}
