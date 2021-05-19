import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
export function createInjectableContext() {
    const storeContext = createContext(null);
    const StoreProvider = ({ children, main_store }) => {
        return _jsx(storeContext.Provider, Object.assign({ value: main_store }, { children: children }), void 0);
    };
    /* const StoreProvider: FC = ({ children }) => (
        <CreateStoreProvider root_store={root_store}>{children}</CreateStoreProvider>
    ) */
    const useStore = () => {
        const store = useContext(storeContext);
        if (!store) {
            throw new Error('useStore shall be used within StoreProvider');
        }
        return store;
    };
    return {
        StoreProvider,
        useStore,
    };
}
//# sourceMappingURL=CreateInjectableContext.js.map