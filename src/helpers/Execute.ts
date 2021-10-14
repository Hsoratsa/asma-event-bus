import { getGqlOperationName } from './getGqlOperationName'
import { processServerError } from './ProcessServerError'
/**
 * Method return always resolved promise it handels cases when there is a gql error or a request/system error
 * 
 * 
 * @param service_url url where shall be perfomrmed request
 * @param operation qraphQl query
 * @param variables 
 * @param admin_secret 
 * @param headers 
 * @returns T|undefined
 */

 interface IExecuteFe {
    service_url: string
    operation: string
    variables?: Record<string, unknown>
    headers?: Record<string, string>
}
export async function executeFE<R>({
    headers,
    service_url,
    operation,
    variables,
}: IExecuteFe): Promise<R | undefined> {
    const local_headers: Record<string, string> = {}

    const operationName = getGqlOperationName(operation)

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
        })

        const data = await fetchResponse.json()

        if ([400, 401, 422].includes(fetchResponse.status)) {
            processServerError(data, operationName)
            
            fetchResponse.status === 401 && window.logoutUser?.()
        }

        if (data.errors) {
            processServerError(data.errors, operationName)
        }

        return data
    } catch (e:any) {
        processServerError(e, operationName)

        return
    }
}
