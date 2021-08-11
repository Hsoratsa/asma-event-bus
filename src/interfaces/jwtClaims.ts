import type { roles_enum } from 'asma-genql-directory'
export interface IBaseJwtClaims {
    user_id: string
    role: roles_enum
    vt?: number
    exp?: number
}

export interface IAdminJwtClaims extends IBaseJwtClaims {
    name?: string
}

export interface IRecipientJwtClaims extends IBaseJwtClaims {
    access_level: 1 | 2 | 3 | 4
    name: string
}
export interface ITherapistOrSuperUserJwtClaims extends IBaseJwtClaims {
    region: string
    customer_id: string
    services: IService
    features: string[]
}
export interface IService {
    [key: string]: string[]
}

export function isRecipientJwtClaims(claims: IBaseJwtClaims): claims is IRecipientJwtClaims {
    return claims.role === 'RECIPIENT'
}
export function isTherapistJwtClaims(claims: IBaseJwtClaims): claims is ITherapistOrSuperUserJwtClaims {
    return claims.role === 'THERAPIST' || claims.role === 'SUPER_USER'
}

export function isAdminJwtClaims(claims: IBaseJwtClaims): claims is IAdminJwtClaims {
    return claims.role === ('ADMIN' as roles_enum)
}