import type { IArtifactEventBus } from './definitions/artifact.types';
import type { ICalendarEventBus } from './definitions/calendar.types';
import type { IChatEventBus } from './definitions/chat.types';
import type { IConsentsEventBus } from './definitions/consents.types';
import type { IDirectoryEventBus } from './definitions/directory.types';
import type { IDemoAsmaEventBus } from './definitions/someTest.types';
import type { ITasksEventBus } from './definitions/tasks.types';
export * from './definitions/artifact.types';
export * from './definitions/directory.types';
export declare const chatEventBuss: {
    dispatch: <Key extends keyof IChatEventBus>(event: Key, arg: IChatEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IChatEventBus>(event: Key_1, callback: (val: IChatEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const artifactEventBuss: {
    dispatch: <Key extends keyof IArtifactEventBus>(event: Key, arg: IArtifactEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IArtifactEventBus>(event: Key_1, callback: (val: IArtifactEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const calendarEventBuss: {
    dispatch: <Key extends "on_open_calendar">(event: Key, arg: ICalendarEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends "on_open_calendar">(event: Key_1, callback: (val: ICalendarEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const tasksEventBuss: {
    dispatch: <Key extends "on_open_tasks">(event: Key, arg: ITasksEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends "on_open_tasks">(event: Key_1, callback: (val: ITasksEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const directoryEventBuss: {
    dispatch: <Key extends keyof IDirectoryEventBus>(event: Key, arg: IDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IDirectoryEventBus>(event: Key_1, callback: (val: IDirectoryEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const consentsEventBuss: {
    dispatch: <Key extends keyof IConsentsEventBus>(event: Key, arg: IConsentsEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IConsentsEventBus>(event: Key_1, callback: (val: IConsentsEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const demoAsmaEventBuss: {
    dispatch: <Key extends keyof IDemoAsmaEventBus>(event: Key, arg: IDemoAsmaEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IDemoAsmaEventBus>(event: Key_1, callback: (val: IDemoAsmaEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map