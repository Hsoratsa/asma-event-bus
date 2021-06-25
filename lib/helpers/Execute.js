import { getGqlOperationName } from './getGqlOperationName';
import { processServerError } from './ProcessServerError';
export async function executeSRV(service_url, operation, variables, admin_secret, headers) {
    const local_headers = {};
    if (admin_secret) {
        local_headers['x-hasura-admin-secret'] = admin_secret;
    }
    let operationName = getGqlOperationName(operation);
    try {
        const fetchResponse = await fetch(service_url, {
            method: 'POST',
            headers: {
                ...local_headers,
                'content-encoding': 'gzip',
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify({
                operationName,
                query: operation,
                variables: variables !== null && variables !== void 0 ? variables : null,
            }),
        });
        const data = await fetchResponse.json();
        if (data.errors) {
            processServerError(data.errors, operationName);
        }
        return data;
    }
    catch (e) {
        processServerError(e, operationName);
        return;
        //console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}
export function executeFE({ operation, service_url, variables, headers, }) {
    return executeSRV(service_url, operation, variables, undefined, headers);
}
//# sourceMappingURL=Execute.js.map