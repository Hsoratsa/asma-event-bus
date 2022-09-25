import type { EventBusNamesEnum } from './types';
export declare function EventBus<E>(name: EventBusNamesEnum): {
    dispatch: <Key extends keyof E>(event: Key, arg: E[Key]) => void;
    register: <Key_1 extends keyof E>(event: Key_1, callback: (val: E[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=event-buss.d.ts.map