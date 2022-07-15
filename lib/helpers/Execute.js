import { getGqlOperationName } from './getGqlOperationName';
import { processServerError } from './ProcessServerError';
export async function executeFE({ headers, service_url, operation, variables, }) {
    const local_headers = {};
    const operationName = getGqlOperationName(operation);
    try {
        const fetchResponse = await fetch(service_url, {
            method: 'POST',
            headers: {
                ...local_headers,
                'content-encoding': 'gzip',
                'Content-Type': 'application/json',
                accept: 'application/json',
                ...headers,
            },
            body: JSON.stringify({
                operationName,
                query: operation,
                variables: variables ?? null,
            }),
        });
        const data = await fetchResponse.json();
        if ([400, 401, 422].includes(fetchResponse.status)) {
            processServerError(data, operationName);
            fetchResponse.status === 401 && window.logoutUser?.();
        }
        if (data.errors) {
            processServerError(data.errors, operationName);
        }
        return data;
    }
    catch (e) {
        processServerError(e, operationName);
        return;
    }
}
//# sourceMappingURL=Execute.js.map