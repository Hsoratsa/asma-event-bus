/** 
 * for graphql requests 
*/

export async function execute<T=unknown,V=unknown>(
    variables: T,
    operation: string,
    service_url: string,
    admin_secret: string,
    session_variables?: V
) {
    try {
        const fetchResponse = await fetch(service_url, {
            method: 'POST',
            headers: {
                'x-hasura-admin-secret': admin_secret,
                content_encoding: 'gzip',
                ...session_variables
            },
            body: JSON.stringify({
                query: operation,
                variables: variables
            })
        })
        const data = await fetchResponse.json()
        return data
    } catch (e) {
        console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}