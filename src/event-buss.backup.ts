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
type fn = <T>(arg: T) => void

interface Registry {
    unregister: fn
}

declare global {
    interface Window {
        ASMA_EVENT_BUS?: {
            [key in EventBusNamesEnum]?: {
                dispatch: (event: any, arg: any, shouldPersist?: boolean) => void
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
        [key: number]: {
            callback: (val: any) => void
            calls: number
            flags?: { clean?: boolean }
        }
    }

    const subscribers = {} as Record<keyof E, Callable>

    const storage = {} as E

    let nextId = 0

    /**
     *
     * @param event
     * @param arg
     * @param shouldPersist - default true
     */
    function dispatch<Key extends keyof E & string>(event: Key, arg: E[Key], shouldPersist = true): void {
        storage[event] = arg

        const subscriber: Callable | undefined = subscribers[event]

        if (subscriber) {
            getKeys(subscriber).forEach((key) => {
                const subscriber_by_key = subscriber[key]

                if (subscriber_by_key) {
                    subscriber_by_key.callback(storage[event])

                    subscriber_by_key.calls++

                    cleanAfterFirstCall(event, key)
                }
            })
        }

        if (!shouldPersist) {
            delete storage[event]
        }
    }
    function cleanAfterFirstCall(event: keyof E & string, id: number) {
        if (subscribers[event][id]?.flags?.clean) {
            if (Object.keys(subscribers[event]).length > 1) {
                console.warn(
                    `EventBus: ${name} - ${event} - clean flag is set to true - and more than one subscriber is registered, this will cause the event to be deleted after the first call and may cause unexpected behavior! Please check`,
                )
            }
            // deepcode ignore DeleteOfNonProperty: <this is intended>
            delete subscribers[event]?.[id]

            delete storage[event]
        }
    }
    function register<Key extends keyof E & string>(
        event: Key,
        callback: (val: E[Key]) => void,
        flags?: { clean: boolean },
    ) {
        const id = getNextId()

        if (!subscribers[event]) {
            subscribers[event] = {}
        }
        const subscriber = { callback, calls: 0, flags }

        subscribers[event][id] = subscriber

        if (storage[event]) {
            callback(storage[event])

            subscriber.calls++

            cleanAfterFirstCall(event, id)
        }

        return {
            unregister: () => {
                // deepcode ignore DeleteOfNonProperty: <this is intended>
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
