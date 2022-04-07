import { IBaseJwtClaims } from "asma-genql-directory/lib"


export function parseJwt<R=IBaseJwtClaims|{}>(jwtToken: string): R|undefined {
    const base64Url = jwtToken?.split('.')[1]

    if (base64Url === undefined) {
        return {} as any
    }

    return JSON.parse(decodeURIComponent(escape(window.atob(base64Url))))
}