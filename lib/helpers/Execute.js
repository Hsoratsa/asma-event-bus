/**
 * for graphql requests
*/
import { processServerError } from "./ProcessServerError";
export async function execute(variables, operation, service_url, admin_secret, session_variables) {
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
        });
        const data = await fetchResponse.json();
        return data;
    }
    catch (e) {
        processServerError(e);
        //console.error(e)
    }
    //console.log('DEBUG: ', JSON.stringify(data));
}
//# sourceMappingURL=Execute.js.map