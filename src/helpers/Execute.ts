/**
 * for graphql requests
 */

import { processServerError } from './ProcessServerError'

export async function executeSRV<R, T = Record<string, string>, V = Record<string, string>>(
    service_url: string,
    operation: string,
    variables?: T,
    admin_secret?: string,
    session_variables?: V,
): Promise<R | undefined> {
    const headers: Record<string, string> = {}
    if (admin_secret) {
        headers['x-hasura-admin-secret'] = admin_secret
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
        })

        const data = await fetchResponse.json()

        if (data.errors) {
            processServerError(data.errors)
        }
        return data
    } catch (e) {
        processServerError(e)
        return
        //console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}

export function executeFE<R = unknown, T = unknown, K = unknown>(
    operation: string,
    service_url: string,
    variables?: T,
    headers?: K,
) {
    return executeSRV<R, T, K>(service_url, operation, variables, undefined, headers)
}
