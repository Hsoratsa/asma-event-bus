import { history } from 'asma-helpers';
export interface INavigationEventBus {
    on_navigation: {
        path: string;
    };
    on_trigger_prompt: {
        showPrompt: boolean;
        message: string;
        history?: typeof history;
        onConfirm?: () => void;
        onCancel?: () => void;
    };
}
//# sourceMappingURL=navigation.types.d.ts.map