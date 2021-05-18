import { createContext, FC, useContext } from "react"

export function createInjectableContext<T>() {
    const storeContext = createContext<T | null>(null)

    const StoreProvider: FC<{ root_store: T }> = ({ children, root_store }) => {
        return <storeContext.Provider value={root_store}>{children}</storeContext.Provider>
    }

    /* const StoreProvider: FC = ({ children }) => (
        <CreateStoreProvider root_store={root_store}>{children}</CreateStoreProvider>
    ) */
    const useDashboardRootStore = (): T => {
        const store = useContext(storeContext)
        if (!store) {
            throw new Error('useStore shall be used within StoreProvider')
        }

        return store
    }

    return {
        StoreProvider,
        useDashboardRootStore,
    }
}