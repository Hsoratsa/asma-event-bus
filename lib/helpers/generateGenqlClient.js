export function generateGenqlClient({ accessTokenHasExpired, setReqConfig, createClient, serviceUrl, serviceUrlWs, }) {
    let directoryClient = null;
    async function getGenqlClient() {
        if (accessTokenHasExpired() || directoryClient === null) {
            directoryClient = await genqlClient();
            return directoryClient;
        }
        return directoryClient;
    }
    function resetGenqlClient() {
        directoryClient = null;
    }
    async function genqlClient(anonymous = undefined, headers = {}) {
        let req_headers = {};
        if (!serviceUrl()) {
            console.warn('requred param srv_url is undefined, please check EnvConfig object!');
        }
        if (!anonymous) {
            req_headers = ((await setReqConfig()).headers ?? {});
        }
        return createClient({
            url: `${serviceUrl()}/v1/graphql`,
            headers: {
                ...req_headers,
                ...headers,
            },
            batch: { batchInterval: 50, maxBatchSize: 100 },
        });
    }
    async function genqlClientWs() {
        const req_headers = ((await setReqConfig()).headers ?? {});
        return createClient({
            url: `${serviceUrlWs()}/v1/graphql`,
            cache: 'reload',
            subscription: {
                timeout: 1,
                reconnect: true,
                reconnectionAttempts: 5,
                headers: {
                    ...req_headers,
                },
            },
        });
    }
    return { getGenGqlClient: getGenqlClient, resetGenqlClient, genqlClient, genqlClientWs };
}
//# sourceMappingURL=generateGenqlClient.js.map