import { srvAuthGet } from "../clients/srvAuth";
import { parseJwt } from "./parseJwt";
export function jwtInit() {
    let jwtToken = '';
    let fetchJwtPromise = null;
    function setJwtToken(token) {
        jwtToken = token;
    }
    function accessTokenHasExpired() {
        const tokenObj = parseJwt(jwtToken);
        const accessTokenExpDate = tokenObj.exp ? tokenObj.exp : 0;
        const nowTime = Math.floor(new Date().getTime() / 1000);
        //set exp time -20sec for token to be refreshed early
        return accessTokenExpDate - 10 <= nowTime;
    }
    async function getJwtTokenAndValidate() {
        if ((jwtToken && accessTokenHasExpired()) || !jwtToken) {
            const new_jwt = await getNewJwtToken();
            return new_jwt;
        }
        else {
            return jwtToken;
        }
    }
    async function getNewJwtToken() {
        var _a;
        try {
            if (!fetchJwtPromise) {
                fetchJwtPromise = srvAuthGet('/token'); /* axios.get(`${EnvConfigs.SRV_AUTH}/token`, {
                    withCredentials: true,
                }) */
            }
            const { data } = await fetchJwtPromise;
            if (!data || data.errors || data.message != 'Success') {
                signoutAuth();
            }
            setJwtToken((_a = data.token) !== null && _a !== void 0 ? _a : '');
            fetchJwtPromise = null;
            return jwtToken;
        }
        catch (error) {
            signoutAuth();
            //processServerError(error)
            fetchJwtPromise = null;
            return jwtToken;
        }
    }
    async function signoutAuth() {
        setJwtToken('');
        await srvAuthGet('/signout'); //axios.get(`${EnvConfigs.SRV_AUTH}/signout`, { withCredentials: true })
    }
    return {
        getJwtTokenAndValidate,
        setJwtToken,
        signoutAuth,
    };
}
//# sourceMappingURL=jwtInit.js.map