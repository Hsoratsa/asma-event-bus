export function EventBus(name) {
    var _a;
    if ((_a = window.ASMA_EVENT_BUS) === null || _a === void 0 ? void 0 : _a[name]) {
        return window.ASMA_EVENT_BUS[name];
    }
    const subscribers = {};
    const storage = {};
    let nextId = 0;
    function dispatch(event, arg) {
        storage[event] = arg;
        const subscriber = subscribers[event];
        if (subscriber === undefined) {
            return;
        }
        ;
        Object.keys(subscriber).forEach((key) => { var _a; return (_a = subscriber[key]) === null || _a === void 0 ? void 0 : _a.call(subscriber, storage[event]); });
    }
    function register(event, callback) {
        const id = getNextId();
        if (!subscribers[event]) {
            subscribers[event] = {};
        }
        subscribers[event][id] = callback;
        if (storage[event]) {
            callback(storage[event]);
        }
        return {
            unregister: () => {
                var _a;
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
    return {
        dispatch,
        register,
    };
}
//# sourceMappingURL=event-buss.js.map