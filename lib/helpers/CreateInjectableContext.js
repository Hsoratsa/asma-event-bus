import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
export function createInjectableContext() {
    const storeContext = createContext(null);
    const StoreProvider = ({ children, root_store }) => {
        return _jsx(storeContext.Provider, Object.assign({ value: root_store }, { children: children }), void 0);
    };
    /* const StoreProvider: FC = ({ children }) => (
        <CreateStoreProvider root_store={root_store}>{children}</CreateStoreProvider>
    ) */
    const useDashboardRootStore = () => {
        const store = useContext(storeContext);
        if (!store) {
            throw new Error('useStore shall be used within StoreProvider');
        }
        return store;
    };
    return {
        StoreProvider,
        useDashboardRootStore,
    };
}
//# sourceMappingURL=CreateInjectableContext.js.map