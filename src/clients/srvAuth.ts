import { http } from "../utility/fetch";

export async function srvAuthGet<R>(url: string, headers?: Headers) {
    return http<R>(url,{
        headers
    }) 
}