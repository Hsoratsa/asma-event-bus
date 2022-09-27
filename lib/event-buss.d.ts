declare type EventBusNamesEnum = 'app-artifact' | 'app-calendar' | 'ao-app-directory' | 'app-directory' | 'app-chat' | 'app-consents';
declare type fn = <T>(arg: T) => void;
interface Registry {
    unregister: fn;
}
declare global {
    interface Window {
        ASMA_EVENT_BUS?: {
            [key in EventBusNamesEnum]?: {
                dispatch: (event: any, arg: any) => void;
                register: (event: any, callback: (arg: any) => void) => Registry;
            };
        };
    }
}
export declare function EventBus<E>(name: EventBusNamesEnum): {
    dispatch: <Key extends keyof E>(event: Key, arg: E[Key]) => void;
    register: <Key_1 extends keyof E>(event: Key_1, callback: (val: E[Key_1]) => void) => {
        unregister: () => void;
    };
};
export {};
//# sourceMappingURL=event-buss.d.ts.map