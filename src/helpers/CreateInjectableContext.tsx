import { createContext, FC, useContext } from "react"

export function createInjectableContext<T>() {
    const storeContext = createContext<T | null>(null)

    const StoreProvider: FC<{ main_store: T }> = ({ children, main_store }) => {
        return <storeContext.Provider value={main_store}>{children}</storeContext.Provider>
    }

    /* const StoreProvider: FC = ({ children }) => (
        <CreateStoreProvider root_store={root_store}>{children}</CreateStoreProvider>
    ) */
    const useStore = (): T => {
        const store = useContext(storeContext)
        if (!store) {
            throw new Error('useStore shall be used within StoreProvider')
        }

        return store
    }

    return {
        StoreProvider,
        useStore,
    }
}