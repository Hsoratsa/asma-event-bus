import { AxiosRequestConfig } from "axios";
import type { ClientOptions } from '@genql/runtime';
export declare function generateGenqlClient<T>({ accessTokenHasExpired, setReqConfig, createClient, serviceUrl, serviceUrlWs, }: {
    accessTokenHasExpired: () => boolean;
    setReqConfig: () => Promise<AxiosRequestConfig<any>>;
    createClient: (options?: ClientOptions | undefined) => T;
    serviceUrl: () => string | undefined;
    serviceUrlWs: () => string | undefined;
}): {
    getGenGqlClient: () => Promise<T>;
    resetGenqlClient: () => void;
    genqlClient: (anonymous?: boolean | undefined, headers?: Record<string, string>) => Promise<T>;
    genqlClientWs: (anonymous?: boolean | undefined, headers?: Record<string, string>) => Promise<T>;
};
//# sourceMappingURL=generateGenqlClient.d.ts.map