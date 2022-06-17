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
        var _a;
        let req_headers = {};
        if (!serviceUrl()) {
            console.warn('requred param srv_url is undefined, please check EnvConfig object!');
        }
        if (!anonymous) {
            req_headers = ((_a = (await setReqConfig()).headers) !== null && _a !== void 0 ? _a : {});
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
    async function genqlClientWs(anonymous = undefined, headers = {}) {
        var _a;
        const service_url = serviceUrl();
        if (!service_url) {
            console.warn('requred param srv_url is undefined, please check EnvConfig object!');
        }
        let req_headers = {};
        if (!anonymous) {
            req_headers = ((_a = (await setReqConfig()).headers) !== null && _a !== void 0 ? _a : {});
        }
        return createClient({
            url: `${serviceUrlWs()}/v1/graphql`,
            headers: {
                ...req_headers,
                ...headers,
            },
        });
    }
    return { getGenGqlClient: getGenqlClient, resetGenqlClient, genqlClient, genqlClientWs };
}
//# sourceMappingURL=generateGenqlClient.js.map