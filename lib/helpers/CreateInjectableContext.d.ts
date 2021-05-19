import { FC } from 'react';
export declare function createInjectableContext<T>(): {
    StoreProvider: FC<{
        store: T;
    }>;
    useStore: () => T;
};
//# sourceMappingURL=CreateInjectableContext.d.ts.map