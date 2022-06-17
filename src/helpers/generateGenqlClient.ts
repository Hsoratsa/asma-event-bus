import { AxiosRequestConfig } from "axios"
import type { ClientOptions } from '@genql/runtime'

export function generateGenQlClient<T>({
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

    async function getDirectoryGenGqlClient() {
        if (accessTokenHasExpired() || directoryClient === null) {
            directoryClient = await directoryGenQLClient()

            return directoryClient
        }

        return directoryClient
    }

    function resetDirectoryClient() {
        directoryClient = null
    }

    async function directoryGenQLClient(
        anonymous: boolean | undefined = undefined,
        headers: Record<string, string> = {},
    ): Promise<T> {
        let req_headers: Record<string, string> = {}

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

    return { getDirectoryGenGqlClient, resetDirectoryClient, directoryGenQLClient }
}