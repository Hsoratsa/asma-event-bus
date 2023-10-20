export interface INavigationEventBus {
    on_navigation: {
        path: string;
    };
    on_trigger_prompt: {
        showPrompt: boolean;
        message: string;
        location?: Location;
    };
}
//# sourceMappingURL=navigation.types.d.ts.map