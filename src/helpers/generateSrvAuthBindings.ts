import { IBaseJwtClaims } from "asma-genql-directory/lib"
import axios, { AxiosResponse } from "axios"
import { EnvironmentEnums, parseJwt } from ".."

export function generateSrvAuthBindings(SRV_AUTH: string, DEVELOPMENT: boolean, ENVIRONMENT_TO_OPERATE: EnvironmentEnums, logout?:() => void) {
    let jwtToken = ''
    
    let fetchJwtPromise: Promise<{ data: { message: string; token?: string; errors: { message: string }[] } }> | null =
    null
    
    const isJwtInvalid = ()=> (jwtToken && accessTokenHasExpired()) || !jwtToken
    
    const isJwtValid = () => !isJwtInvalid

    async function srvAuthGet<R>(url: string, headers?: Record<string, string>) {
        if (DEVELOPMENT && ENVIRONMENT_TO_OPERATE) {
            url = `${url}&env=${ENVIRONMENT_TO_OPERATE}`
            url = url.includes('&') && !url.includes('?') ? url.replace('&', '?') : url
        }
        return axios.get<unknown, AxiosResponse<R>>(`${SRV_AUTH}${url}`, {
            headers,
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



    function getParsedJwt<R=IBaseJwtClaims>(): R|undefined {
        return parseJwt<R>(jwtToken)
    }

    return {
        isJwtValid,
        signin,
        srvAuthGet,
        signoutAuth,
        getJwtTokenAsync,
        getNewJwtToken,
        getUserId,
        getParsedJwt,
        getJwtToken,
        accessTokenHasExpired,
    }
}

