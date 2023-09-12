type EventBusNamesEnum = 'app-artifact' | 'app-calendar' | 'app-tasks' | 'ao-app-directory' | 'app-directory' | 'app-chat' | 'app-consents' | 'app-office' | 'auth-bindings' | 'asma-theme' | 'app-notification' | 'asma-overrides' | 'app-navigation' | 'legacy-portal';
type fn = <T>(arg: T) => void;
interface Registry {
    unregister: fn;
}
declare global {
    interface Window {
        ASMA_EVENT_BUS?: Record<string, {
            dispatch: (event: any, arg: any, shouldPersist?: boolean) => void;
            register: (event: any, callback: (arg: any) => void) => Registry;
        }>;
    }
}
export declare function EventBus<E>(name: EventBusNamesEnum, local_idx?: number): {
    dispatch: <Key extends keyof E>(event: Key, arg: E[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof E>(event: Key_1, callback: (val: E[Key_1]) => void) => {
        unregister: () => void;
    };
};
export {};
//# sourceMappingURL=event-buss.d.ts.map