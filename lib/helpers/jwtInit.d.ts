export declare function jwtInit(srv_auth: string): {
    getJwtTokenAndValidate: () => Promise<string | null>;
    setJwtToken: (token: string) => void;
    isJwtValid: () => boolean;
    signoutAuth: () => Promise<void>;
};
//# sourceMappingURL=jwtInit.d.ts.map