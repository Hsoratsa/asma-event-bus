type EventBusNamesEnum = 'app-artifact' | 'app-calendar' | 'ao-app-directory' | 'app-directory' | 'app-chat'
type fn = <T>(arg: T) => void

interface Registry {
    unregister: fn
}

declare global {
    interface Window {
        ASMA_EVENT_BUS?: {
            [key in EventBusNamesEnum]?: {
                dispatch: (event: any, arg: any) => void
                register: (event: any, callback: (arg: any) => void) => Registry
            }
        }
    }
}

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

export function EventBus<E>(name: EventBusNamesEnum) {
    if (window.ASMA_EVENT_BUS?.[name]) {
        return window.ASMA_EVENT_BUS[name] as {
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

    function dispatch<Key extends keyof E>(event: Key, arg: E[Key]): void {
        storage[event] = arg

        const subscriber: Callable = subscribers[event]

        if (subscriber === undefined) {
            return
        }

        getKeys(subscriber).forEach((key) => subscriber[key]?.(storage[event]))
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
                delete subscribers[event]?.[id]

                if (Object.keys(subscribers[event] || {}).length === 0) {
                    delete subscribers[event]
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

    window.ASMA_EVENT_BUS[name] = fns

    return fns
}
