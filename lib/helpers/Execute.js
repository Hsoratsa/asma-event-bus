/**
 * for graphql requests
 */
import { processServerError } from './ProcessServerError';
export async function executeSRV(service_url, operation, variables, admin_secret, session_variables) {
    const headers = {};
    if (admin_secret) {
        headers['x-hasura-admin-secret'] = admin_secret;
    }
    try {
        const fetchResponse = await fetch(service_url, {
            method: 'POST',
            headers: {
                ...headers,
                'content-encoding': 'gzip',
                ...session_variables,
            },
            body: JSON.stringify({
                query: operation,
                variables: variables,
            }),
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (e) {
        processServerError(e);
        return;
        //console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}
export function executeFE(operation, service_url, variables, headers) {
    return executeSRV(service_url, operation, variables, undefined, headers);
}
//# sourceMappingURL=Execute.js.map