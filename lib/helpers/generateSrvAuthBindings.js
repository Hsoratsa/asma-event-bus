import axios from "axios";
import { parseJwt } from "..";
export function generateSrvAuthBindings(SRV_AUTH, DEVELOPMENT, ENVIRONMENT_TO_OPERATE, logout) {
    let jwtToken = '';
    let fetchJwtPromise = null;
    const isJwtInvalid = () => (jwtToken && accessTokenHasExpired()) || !jwtToken;
    const isJwtValid = () => !isJwtInvalid;
    async function srvAuthGet(url, headers) {
        if (DEVELOPMENT && ENVIRONMENT_TO_OPERATE) {
            url = `${url}&env=${ENVIRONMENT_TO_OPERATE}`;
            url = url.includes('&') && !url.includes('?') ? url.replace('&', '?') : url;
        }
        return axios.get(`${SRV_AUTH}${url}`, {
            headers,
            withCredentials: true,
        });
    }
    function accessTokenHasExpired() {
        const tokenObj = getParsedJwt();
        const accessTokenExpDate = (tokenObj === null || tokenObj === void 0 ? void 0 : tokenObj.exp) || 0;
        const nowTime = Math.floor(new Date().getTime() / 1000);
        //set exp time -20sec for token to be refreshed early
        return accessTokenExpDate - 10 <= nowTime;
    }
    async function signin(url, headers) {
        const { data } = await srvAuthGet(url, headers);
        setJwtToken(data.token);
        return data;
    }
    async function signoutAuth() {
        setJwtToken('');
        logout;
        await srvAuthGet('/signout');
    }
    function getUserId() {
        var _a;
        return ((_a = getParsedJwt()) === null || _a === void 0 ? void 0 : _a['user_id']) || '-1';
    }
    function setJwtToken(token) {
        jwtToken = token;
    }
    function getJwtToken() {
        return jwtToken;
    }
    async function getJwtTokenAsync() {
        if (isJwtInvalid()) {
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
                fetchJwtPromise = srvAuthGet('/token');
            }
            const { data } = await fetchJwtPromise;
            if (!data || data.errors || data.message != 'Success') {
                signoutAuth();
            }
            if (!data.token) {
                throw new Error('Token is not present in the result');
            }
            setJwtToken((_a = data.token) !== null && _a !== void 0 ? _a : '');
            fetchJwtPromise = null;
            return jwtToken;
        }
        catch (error) {
            signoutAuth();
            fetchJwtPromise = null;
            console.error(error);
            return jwtToken;
        }
    }
    function getParsedJwt() {
        return parseJwt(jwtToken);
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
    };
}
//# sourceMappingURL=generateSrvAuthBindings.js.map