import type { IArtifactEventBus } from '../definitions/artifact.types';
export declare const artifactEventBuss: {
    dispatch: <Key extends keyof IArtifactEventBus>(event: Key, arg: IArtifactEventBus[Key]) => void;
    register: <Key_1 extends keyof IArtifactEventBus>(event: Key_1, callback: (val: IArtifactEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map