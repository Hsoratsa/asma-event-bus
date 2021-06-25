export declare function executeSRV<R, T = Record<string, string>, V = Record<string, string>>(service_url: string, operation: string, variables?: T, admin_secret?: string, headers?: V): Promise<R | undefined>;
export declare function executeFE<R = unknown, T = unknown, K = unknown>({ operation, service_url, variables, headers, }: {
    operation: string;
    service_url: string;
    variables?: T;
    headers?: K;
}): Promise<R | undefined>;
//# sourceMappingURL=Execute.d.ts.map