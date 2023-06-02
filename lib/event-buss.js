const getKeys = Object.keys;
export function EventBus(name, local_idx) {
    var _a;
    const name_idx = local_idx ? `${name}-${local_idx}` : name;
    if ((_a = window.ASMA_EVENT_BUS) === null || _a === void 0 ? void 0 : _a[name_idx]) {
        return window.ASMA_EVENT_BUS[name_idx];
    }
    const subscribers = {};
    const storage = {};
    let nextId = 0;
    /**
     *
     * @param shouldPersist - default true
     */
    function dispatch(event, arg, shouldPersist = true) {
        storage[event] = arg;
        const subscriber = subscribers[event];
        if (subscriber) {
            getKeys(subscriber).forEach((key) => { var _a; return (_a = subscriber[key]) === null || _a === void 0 ? void 0 : _a.call(subscriber, storage[event]); });
        }
        if (!shouldPersist) {
            delete storage[event];
        }
    }
    function register(event, callback) {
        const id = getNextId();
        if (!subscribers[event]) {
            subscribers[event] = {};
        }
        subscribers[event][id] = callback;
        console.log('subscribers', subscribers);
        if (storage[event]) {
            callback(storage[event]);
        }
        return {
            unregister: () => {
                var _a;
                // deepcode ignore DeleteOfNonProperty: <this is intended>
                (_a = subscribers[event]) === null || _a === void 0 ? true : delete _a[id];
                if (Object.keys(subscribers[event] || {}).length === 0) {
                    delete subscribers[event];
                    delete storage[event];
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
    window.ASMA_EVENT_BUS[name_idx] = fns;
    return fns;
}
//# sourceMappingURL=event-buss.js.map