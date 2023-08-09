import type { IAoAppDirectoryEventBus } from './definitions/ao-app-directory.types';
import type { IArtifactEventBus } from './definitions/artifact.types';
import type { ICalendarEventBus } from './definitions/calendar.types';
import type { IChatEventBus } from './definitions/chat.types';
import type { IConsentsEventBus } from './definitions/consents.types';
import type { IDirectoryEventBus } from './definitions/directory.types';
import type { IMsOfficeEventBus } from './definitions/msoffice.types';
import type { INotificationEventBus } from './definitions/notification.types';
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
export declare const notificationEventBuss: {
    dispatch: <Key extends keyof INotificationEventBus>(event: Key, arg: INotificationEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof INotificationEventBus>(event: Key_1, callback: (val: INotificationEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const calendarEventBuss: {
    dispatch: <Key extends keyof ICalendarEventBus>(event: Key, arg: ICalendarEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof ICalendarEventBus>(event: Key_1, callback: (val: ICalendarEventBus[Key_1]) => void) => {
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
export declare const oaDirectoryEventBuss: {
    dispatch: <Key extends "selected_users">(event: Key, arg: IAoAppDirectoryEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends "selected_users">(event: Key_1, callback: (val: IAoAppDirectoryEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const consentsEventBuss: {
    dispatch: <Key extends keyof IConsentsEventBus>(event: Key, arg: IConsentsEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends keyof IConsentsEventBus>(event: Key_1, callback: (val: IConsentsEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const msOfficeEventBuss: {
    dispatch: <Key extends "login">(event: Key, arg: IMsOfficeEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends "login">(event: Key_1, callback: (val: IMsOfficeEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
export declare const asmaOverridesEventBus: {
    dispatch: <Key extends "login">(event: Key, arg: IMsOfficeEventBus[Key], shouldPersist?: boolean) => void;
    register: <Key_1 extends "login">(event: Key_1, callback: (val: IMsOfficeEventBus[Key_1]) => void) => {
        unregister: () => void;
    };
};
//# sourceMappingURL=index.d.ts.map