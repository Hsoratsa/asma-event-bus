import { getGqlOperationName } from './getGqlOperationName'
import { processServerError } from './ProcessServerError'

export async function executeSRV<R, T = Record<string, string>, V = Record<string, string>>(
    service_url: string,
    operation: string,
    variables?: T,
    admin_secret?: string,
    headers?: V,
): Promise<R | undefined> {
    
    const local_headers: Record<string, string> = {}
    
    if (admin_secret) {
        local_headers['x-hasura-admin-secret'] = admin_secret
    }

    let operationName = getGqlOperationName(operation)

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
                variables: variables ?? null,
            }),
        })

        const data = await fetchResponse.json()

        if (data.errors) {
            processServerError(data.errors, operationName)
        }
        return data
    } catch (e) {
        processServerError(e, operationName)
        return
        //console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}

export function executeFE<R = unknown, T = unknown, K = unknown>({
    operation,
    service_url,
    variables,
    headers,
}: {
    operation: string
    service_url: string
    variables?: T
    headers?: K
}) {
    return executeSRV<R, T, K>(service_url, operation, variables, undefined, headers)
}
