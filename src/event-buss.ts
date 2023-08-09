type EventBusNamesEnum =
    | 'app-artifact'
    | 'app-calendar'
    | 'app-tasks'
    | 'ao-app-directory'
    | 'app-directory'
    | 'app-chat'
    | 'app-consents'
    | 'app-office'
    | 'auth-bindings'
    | 'asma-theme'
    | 'app-notification'
    | 'asma-overrides'
type fn = <T>(arg: T) => void

interface Registry {
    unregister: fn
}

declare global {
    interface Window {
        ASMA_EVENT_BUS?: Record<
            string,
            {
                dispatch: (event: any, arg: any, shouldPersist?: boolean) => void
                register: (event: any, callback: (arg: any) => void) => Registry
            }
        >
    }
}

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

export function EventBus<E>(name: EventBusNamesEnum, local_idx?: number) {
    const name_idx = local_idx ? `${name}-${local_idx}` : name
    if (window.ASMA_EVENT_BUS?.[name_idx]) {
        return window.ASMA_EVENT_BUS[name_idx] as {
            dispatch: typeof dispatch
            register: typeof register
        }
    }

    interface Callable {
        [key: number]: (val: any) => void
    }

    const subscribers = {} as Record<keyof E, Callable>

    const storage = {} as E

    let nextId = 0
    /**
     *
     * @param shouldPersist - default true
     */
    function dispatch<Key extends keyof E>(event: Key, arg: E[Key], shouldPersist = true): void {
        storage[event] = arg

        const subscriber: Callable | undefined = subscribers[event]

        if (subscriber) {
            getKeys(subscriber).forEach((key) => subscriber[key]?.(storage[event]))
        }

        if (!shouldPersist) {
            delete storage[event]
        }
    }

    function register<Key extends keyof E>(event: Key, callback: (val: E[Key]) => void) {
        const id = getNextId()

        if (!subscribers[event]) {
            subscribers[event] = {}
        }

        subscribers[event][id] = callback

        if (storage[event]) {
            callback(storage[event])
        }

        return {
            unregister: () => {
                // deepcode ignore DeleteOfNonProperty: <this is intended>
                delete subscribers[event]?.[id]

                if (Object.keys(subscribers[event] || {}).length === 0) {
                    delete subscribers[event]

                    delete storage[event]
                }
            },
        }
    }

    function getNextId(): number {
        return nextId++
    }
    const fns = {
        dispatch,
        register,
    }

    if (!window.ASMA_EVENT_BUS) {
        window.ASMA_EVENT_BUS = {}
    }

    window.ASMA_EVENT_BUS[name_idx] = fns

    return fns
}
