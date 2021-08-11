import type { roles_enum } from 'asma-genql-directory';
export interface IBaseJwtClaims {
    user_id: string;
    role: roles_enum;
    vt?: number;
    exp?: number;
}
export interface IAdminJwtClaims extends IBaseJwtClaims {
    name?: string;
}
export interface IRecipientJwtClaims extends IBaseJwtClaims {
    access_level: 1 | 2 | 3 | 4;
    name: string;
}
export interface ITherapistOrSuperUserJwtClaims extends IBaseJwtClaims {
    region: string;
    customer_id: string;
    services: IService;
    features: string[];
}
export interface IService {
    [key: string]: string[];
}
export declare function isRecipientJwtClaims(claims: IBaseJwtClaims): claims is IRecipientJwtClaims;
export declare function isTherapistJwtClaims(claims: IBaseJwtClaims): claims is ITherapistOrSuperUserJwtClaims;
export declare function isAdminJwtClaims(claims: IBaseJwtClaims): claims is IAdminJwtClaims;
//# sourceMappingURL=jwtClaims.d.ts.map