import { AxiosRequestConfig } from "axios"
import type { ClientOptions } from '@genql/runtime'
import { httpToWs } from "./Config"

export function generateGenqlClient<T>({
    accessTokenHasExpired,
    setReqConfig,
    createClient,
    serviceUrl,
}: {
    accessTokenHasExpired: () => boolean
    setReqConfig: () => Promise<AxiosRequestConfig<any>>
    createClient: (options?: ClientOptions | undefined) => T
    serviceUrl: () => string | undefined
}) {


  

    let directoryClient: T | null = null

    async function getGenqlClient() {
        if (accessTokenHasExpired() || directoryClient === null) {
            directoryClient = await genqlClient()

            return directoryClient
        }

        return directoryClient
    }

    function resetGenqlClient() {
        directoryClient = null
    }

    async function genqlClient(
        anonymous: boolean | undefined = undefined,
        headers: Record<string, string> = {},
    ): Promise<T> {
        let req_headers: Record<string, string> = {}
        if(!serviceUrl()){
            console.warn('requred param srv_url is undefined, please check EnvConfig object!')
        }
        if (!anonymous) {
            req_headers = ((await setReqConfig()).headers ?? {}) as Record<string, string>
        }

        return createClient({
            url: `${serviceUrl()}/v1/graphql`,
            headers: {
                ...req_headers,
                ...headers,
            },
            batch: { batchInterval: 50, maxBatchSize: 100 },
        })
    }

    async function genqlClientWs(
        anonymous: boolean | undefined = undefined,
        headers: Record<string, string> = {},
    ): Promise<T> {
        const service_url = serviceUrl()
        if(!service_url){
            console.warn('requred param srv_url is undefined, please check EnvConfig object!')
        }

        let req_headers: Record<string, string> = {}

        if (!anonymous) {
            req_headers = ((await setReqConfig()).headers ?? {}) as Record<string, string>
        }

        

        return createClient({
            url: `${service_url&&httpToWs(service_url)}/v1/graphql`,
            headers: {
                ...req_headers,
                ...headers,
            },
        })
    }


    return { getGenGqlClient: getGenqlClient, resetGenqlClient, genqlClient, genqlClientWs }
}