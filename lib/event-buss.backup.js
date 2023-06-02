//type fn = <T>(arg: T) => void
/* interface Registry {
    unregister: fn
} */
/* declare global {
    interface Window {
        ASMA_EVENT_BUS?: {
            [key in EventBusNamesEnum]?: {
                dispatch: (event: any, arg: any, shouldPersist?: boolean) => void
                register: (event: any, callback: (arg: any) => void) => Registry
            }
        }
    }
} */
const getKeys = Object.keys;
export function EventBus(name) {
    var _a;
    if ((_a = window.ASMA_EVENT_BUS) === null || _a === void 0 ? void 0 : _a[name]) {
        return window.ASMA_EVENT_BUS[name];
    }
    const subscribers = {};
    const storage = {};
    let nextId = 0;
    /**
     *
     * @param event
     * @param arg
     * @param shouldPersist - default true
     */
    function dispatch(event, arg, shouldPersist = true) {
        storage[event] = arg;
        const subscriber = subscribers[event];
        if (subscriber) {
            getKeys(subscriber).forEach((key) => {
                const subscriber_by_key = subscriber[key];
                if (subscriber_by_key) {
                    subscriber_by_key.callback(storage[event]);
                    subscriber_by_key.calls++;
                    cleanAfterFirstCall(event, key);
                }
            });
        }
        if (!shouldPersist) {
            delete storage[event];
        }
    }
    function cleanAfterFirstCall(event, id) {
        var _a, _b, _c;
        if ((_b = (_a = subscribers[event][id]) === null || _a === void 0 ? void 0 : _a.flags) === null || _b === void 0 ? void 0 : _b.clean) {
            if (Object.keys(subscribers[event]).length > 1) {
                console.warn(`EventBus: ${name} - ${event} - clean flag is set to true - and more than one subscriber is registered, this will cause the event to be deleted after the first call and may cause unexpected behavior! Please check`);
            }
            // deepcode ignore DeleteOfNonProperty: <this is intended>
            (_c = subscribers[event]) === null || _c === void 0 ? true : delete _c[id];
            delete storage[event];
        }
    }
    function register(event, callback, flags) {
        const id = getNextId();
        if (!subscribers[event]) {
            subscribers[event] = {};
        }
        const subscriber = { callback, calls: 0, flags };
        subscribers[event][id] = subscriber;
        if (storage[event]) {
            callback(storage[event]);
            subscriber.calls++;
            cleanAfterFirstCall(event, id);
        }
        return {
            unregister: () => {
                var _a;
                // deepcode ignore DeleteOfNonProperty: <this is intended>
                (_a = subscribers[event]) === null || _a === void 0 ? true : delete _a[id];
                if (Object.keys(subscribers[event] || {}).length === 0) {
                    delete subscribers[event];
                }
            },
        };
    }
    function getNextId() {
        return nextId++;
    }
    const fns = {
        dispatch,
        register,
    };
    if (!window.ASMA_EVENT_BUS) {
        window.ASMA_EVENT_BUS = {};
    }
    window.ASMA_EVENT_BUS[name] = fns;
    return fns;
}
//# sourceMappingURL=event-buss.backup.js.map