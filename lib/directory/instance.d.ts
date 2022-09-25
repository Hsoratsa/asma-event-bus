import type { IDirectoryEventBus } from './types';
export declare const directoryEventBuss: {
    dispatch: <Key extends "selected_patients">(event: Key, arg: IDirectoryEventBus[Key]) => void;
    register: <Key_1 extends "selected_patients">(event: Key_1, callback: (val: IDirectoryEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=instance.d.ts.map