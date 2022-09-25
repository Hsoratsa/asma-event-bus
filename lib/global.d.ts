import type { EventBusNamesEnum } from './types';
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
export {};
//# sourceMappingURL=global.d.ts.map