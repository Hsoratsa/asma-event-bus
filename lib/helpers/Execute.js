import { processServerError } from './ProcessServerError';
export async function executeSRV(service_url, operation, variables, admin_secret, session_variables) {
    const headers = {};
    if (admin_secret) {
        headers['x-hasura-admin-secret'] = admin_secret;
    }
    let operationName = operation.split('{', 1)?.[0].trim().split(' ')?.[1].trim();
    if (operationName.includes('(')) {
        operationName = operationName.split('(', 1)[0];
    }
    try {
        const fetchResponse = await fetch(service_url, {
            method: 'POST',
            headers: {
                ...headers,
                'content-encoding': 'gzip',
                'Content-Type': 'application/json',
                ...session_variables,
            },
            body: JSON.stringify({
                operationName,
                query: operation,
                variables: variables ?? null,
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