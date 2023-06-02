type EventBusNamesEnum = 'app-artifact' | 'app-calendar' | 'app-tasks' | 'ao-app-directory' | 'app-directory' | 'app-chat' | 'app-consents' | 'app-office' | 'auth-bindings' | 'asma-theme' | 'app-notification';
export declare function EventBus<E>(name: EventBusNamesEnum): {
    dispatch: <Key extends keyof E & string>(event: Key, arg: E[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof E & string>(event: Key_1, callback: (val: E[Key_1]) => void, flags?: {
        clean: boolean;
    }) => {
        unregister: () => void;
    };
};
export {};
//# sourceMappingURL=event-buss.backup.d.ts.map