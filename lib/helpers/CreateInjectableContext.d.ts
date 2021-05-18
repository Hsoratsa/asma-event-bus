import { FC } from "react";
export declare function createInjectableContext<T>(): {
    StoreProvider: FC<{
        root_store: T;
    }>;
    useDashboardRootStore: () => T;
};
//# sourceMappingURL=CreateInjectableContext.d.ts.map