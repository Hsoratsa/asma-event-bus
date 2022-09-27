import type { IArtifactEventBus } from './definitions/artifact.types';
import type { IChatEventBus } from './definitions/chat.types';
import type { IConsentsEventBus } from './definitions/consents.types';
import type { IDirectoryEventBus } from './definitions/directory.types';
export * from './definitions/artifact.types';
export * from './definitions/directory.types';
export declare const chatEventBuss: {
    dispatch: <Key extends "on_select_document">(event: Key, arg: IChatEventBus[Key]) => void;
    register: <Key_1 extends "on_select_document">(event: Key_1, callback: (val: IChatEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const artifactEventBuss: {
    dispatch: <Key extends keyof IArtifactEventBus>(event: Key, arg: IArtifactEventBus[Key]) => void;
    register: <Key_1 extends keyof IArtifactEventBus>(event: Key_1, callback: (val: IArtifactEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const directoryEventBuss: {
    dispatch: <Key extends keyof IDirectoryEventBus>(event: Key, arg: IDirectoryEventBus[Key]) => void;
    register: <Key_1 extends keyof IDirectoryEventBus>(event: Key_1, callback: (val: IDirectoryEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const consentsEventBuss: {
    dispatch: <Key extends "related_entitities">(event: Key, arg: IConsentsEventBus[Key]) => void;
    register: <Key_1 extends "related_entitities">(event: Key_1, callback: (val: IConsentsEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map