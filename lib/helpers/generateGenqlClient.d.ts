import { AxiosRequestConfig } from "axios";
import type { ClientOptions } from '@genql/runtime';
export declare function generateGenQlClient<T>({ accessTokenHasExpired, setReqConfig, createClient, serviceUrl, }: {
    accessTokenHasExpired: () => boolean;
    setReqConfig: () => Promise<AxiosRequestConfig<any>>;
    createClient: (options?: ClientOptions | undefined) => T;
    serviceUrl: () => string | undefined;
}): {
    getDirectoryGenGqlClient: () => Promise<T>;
    resetDirectoryClient: () => void;
    directoryGenQLClient: (anonymous?: boolean | undefined, headers?: Record<string, string>) => Promise<T>;
};
//# sourceMappingURL=generateGenqlClient.d.ts.map