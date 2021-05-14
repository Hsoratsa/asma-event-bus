/**
 * for graphql requests
 */
export declare function executeSRV<R, T = Record<string, string>, V = Record<string, string>>(service_url: string, operation: string, variables?: T, admin_secret?: string, session_variables?: V): Promise<R | undefined>;
export declare function executeFE<R = unknown, T = unknown, K = unknown>(operation: string, service_url: string, variables?: T, headers?: K): Promise<R | undefined>;
//# sourceMappingURL=Execute.d.ts.map