import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'
import { EnvironmentEnums, parseJwt } from '..'
export interface IGenerateSRVAuthBindings {
    isJwtValid: () => boolean
    signin(url: string, headers?: Record<string, string>): Promise<{ token: string }>
    srvAuthGet<R>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<R, any>>
    signoutAuth(): Promise<void>
    setReqConfig<T = unknown>(data?: T, responseType?: ResponseType): Promise<AxiosRequestConfig>
    getJwtTokenAsync(): Promise<string>
    getNewJwtToken(): Promise<string>
    getUserId(): string
    getParsedJwt<R = { user_id: string; exp: number }>(): R | undefined
    getJwtToken(): string
    accessTokenHasExpired(): boolean
}
export function generateSrvAuthBindings(
    SRV_AUTH: string,
    DEVELOPMENT: boolean,
    ENVIRONMENT_TO_OPERATE: EnvironmentEnums,
    logout?: () => void,
): IGenerateSRVAuthBindings {
    let jwtToken = ''
    let parsed_jwt: any | undefined = undefined

    let fetchJwtPromise: Promise<{ data: { message: string; token?: string; errors: { message: string }[] } }> | null =
        null

    const isJwtInvalid = () => (jwtToken && accessTokenHasExpired()) || !jwtToken

    const isJwtValid = () => !isJwtInvalid

    async function srvAuthGet<R>(url: string, headers?: Record<string, string>) {
        if (DEVELOPMENT && ENVIRONMENT_TO_OPERATE) {
            url = `${url}&env=${ENVIRONMENT_TO_OPERATE}`

            url = url.includes('&') && !url.includes('?') ? url.replace('&', '?') : url
        }

        return axios.get<unknown, AxiosResponse<R>>(`${SRV_AUTH}${url}`, {
            headers: {
                ...headers,
                'asma-origin': window.location.origin,
            },
            withCredentials: true,
        })
    }

    function accessTokenHasExpired(): boolean {
        const tokenObj = getParsedJwt()

        const accessTokenExpDate = tokenObj?.exp || 0

        const nowTime = Math.floor(new Date().getTime() / 1000)

        //set exp time -20sec for token to be refreshed early
        return accessTokenExpDate - 10 <= nowTime
    }

    async function signin(url: string, headers?: Record<string, string>) {
        const { data } = await srvAuthGet<{ token: string }>(url, headers)

        setJwtToken(data.token)

        return data
    }

    async function signoutAuth() {
        setJwtToken('')
        await srvAuthGet('/signout')
    }
    function getUserId(): string {
        return getParsedJwt()?.['user_id'] || '-1'
    }

    function setJwtToken(token: string) {
        jwtToken = token
    }
    function getJwtToken() {
        return jwtToken
    }

    async function getJwtTokenAsync() {
        if (isJwtInvalid()) {
            const new_jwt = await getNewJwtToken()

            return new_jwt
        } else {
            return jwtToken
        }
    }

    async function setReqConfig<T = unknown>(data?: T, responseType?: ResponseType): Promise<AxiosRequestConfig> {
        const token = await getJwtTokenAsync()

        const res: AxiosRequestConfig = {
            data: data,
            responseType: responseType,
            headers: {},
        }

        if (token) {
            if (!res.headers) {
                res.headers = {}
            }

            res.headers['Authorization'] = `Bearer ${token}`
        }

        return res
    }

    async function getNewJwtToken() {
        try {
            if (!fetchJwtPromise) {
                fetchJwtPromise = srvAuthGet('/token')
            }

            const { data } = await fetchJwtPromise

            if (!data || data.errors || data.message != 'Success') {
                logout?.() || signoutAuth()
            }
            if (!data.token) {
                throw new Error('Token is not present in the result')
            }
            setJwtToken(data.token ?? '')

            fetchJwtPromise = null

            return jwtToken
        } catch (error) {
            logout?.() || signoutAuth()
            //signoutAuth()

            fetchJwtPromise = null

            console.error(error)

            return jwtToken
        }
    }

    function getParsedJwt<R = { user_id: string; exp: number }>(): R | undefined {
        if (!parsed_jwt) {
            parsed_jwt = parseJwt<R>(jwtToken)
        }
        return parsed_jwt
    }

    return {
        isJwtValid,
        signin,
        srvAuthGet,
        signoutAuth,
        setReqConfig,
        getJwtTokenAsync,
        getNewJwtToken,
        getUserId,
        getParsedJwt,
        getJwtToken,
        accessTokenHasExpired,
    }
}

export function generateSrvAuthBindingsMicroApp(
    SRV_AUTH: string,
    DEVELOPMENT: boolean,
    ENVIRONMENT_TO_OPERATE: EnvironmentEnums,
    logout?: () => void,
) {
    return (
        window.__ASMA__SHELL__?.auth_bindings ||
        generateSrvAuthBindings(SRV_AUTH, DEVELOPMENT, ENVIRONMENT_TO_OPERATE, logout)
    )
}
