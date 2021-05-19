import { FC } from "react";
export declare function createInjectableContext<T>(): {
    StoreProvider: FC<{
        main_store: T;
    }>;
    useStore: () => T;
};
//# sourceMappingURL=CreateInjectableContext.d.ts.map