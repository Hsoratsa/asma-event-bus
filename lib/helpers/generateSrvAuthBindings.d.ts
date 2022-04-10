import { IBaseJwtClaims } from "asma-genql-directory/lib";
import { AxiosResponse } from "axios";
import { EnvironmentEnums } from "..";
export declare function generateSrvAuthBindings(SRV_AUTH: string, DEVELOPMENT: boolean, ENVIRONMENT_TO_OPERATE: EnvironmentEnums, logout?: () => void): {
    isJwtValid: () => boolean;
    signin: (url: string, headers?: Record<string, string> | undefined) => Promise<{
        token: string;
    }>;
    srvAuthGet: <R>(url: string, headers?: Record<string, string> | undefined) => Promise<AxiosResponse<R, any>>;
    signoutAuth: () => Promise<void>;
    getJwtTokenAsync: () => Promise<string>;
    getNewJwtToken: () => Promise<string>;
    getUserId: () => string;
    getParsedJwt: <R_1 = IBaseJwtClaims>() => R_1 | undefined;
    getJwtToken: () => string;
    accessTokenHasExpired: () => boolean;
};
//# sourceMappingURL=generateSrvAuthBindings.d.ts.map