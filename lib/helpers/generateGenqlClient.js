export function generateGenQlClient({ accessTokenHasExpired, setReqConfig, createClient, serviceUrl, }) {
    let directoryClient = null;
    async function getDirectoryGenGqlClient() {
        if (accessTokenHasExpired() || directoryClient === null) {
            directoryClient = await directoryGenQLClient();
            return directoryClient;
        }
        return directoryClient;
    }
    function resetDirectoryClient() {
        directoryClient = null;
    }
    async function directoryGenQLClient(anonymous = undefined, headers = {}) {
        var _a;
        let req_headers = {};
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
    return { getDirectoryGenGqlClient, resetDirectoryClient, directoryGenQLClient };
}
//# sourceMappingURL=generateGenqlClient.js.map