import { srvAuthGet } from "../clients/srvAuth"
import { parseJwt } from "./parseJwt"

export function jwtInit() {
    let jwtToken = ''

    let fetchJwtPromise: Promise<{
        data: { message: string; token?: string; errors: { message: string }[] }
    }> | null = null

    function setJwtToken(token: string) {
        jwtToken = token
    }

    function accessTokenHasExpired(): boolean {
        const tokenObj = parseJwt(jwtToken)

        const accessTokenExpDate = tokenObj.exp ? tokenObj.exp : 0

        const nowTime = Math.floor(new Date().getTime() / 1000)

        //set exp time -20sec for token to be refreshed early
        return accessTokenExpDate - 10 <= nowTime
    }

    function isJwtValid():boolean{
        return !(jwtToken && accessTokenHasExpired() || !jwtToken)
    }
    async function getJwtTokenAndValidate() {
        if (isJwtValid()) {
            const new_jwt = await getNewJwtToken()

            return new_jwt
        } else {
            return jwtToken
        }
    }
    async function getNewJwtToken() {
        try {
            if (!fetchJwtPromise) {
                fetchJwtPromise = srvAuthGet('/token') /* axios.get(`${EnvConfigs.SRV_AUTH}/token`, {
                    withCredentials: true,
                }) */
            }

            const { data } = await fetchJwtPromise

            if (!data || data.errors || data.message != 'Success') {
                signoutAuth()
            }

            setJwtToken(data.token ?? '')

            fetchJwtPromise = null

            return jwtToken
        } catch (error) {
            signoutAuth()

            //processServerError(error)

            fetchJwtPromise = null

            return jwtToken
        }
    }
    async function signoutAuth() {
        setJwtToken('')
        await srvAuthGet('/signout') //axios.get(`${EnvConfigs.SRV_AUTH}/signout`, { withCredentials: true })
    }

    return {
        getJwtTokenAndValidate,
        setJwtToken,
        isJwtValid,
        signoutAuth,
    }
}