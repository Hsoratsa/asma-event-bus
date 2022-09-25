import type { IDirectoryEventBus } from '../definitions/directory.types';
export declare const directoryEventBuss: {
    dispatch: <Key extends keyof IDirectoryEventBus>(event: Key, arg: IDirectoryEventBus[Key]) => void;
    register: <Key_1 extends keyof IDirectoryEventBus>(event: Key_1, callback: (val: IDirectoryEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map