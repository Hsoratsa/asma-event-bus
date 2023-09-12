import { EventBus } from './event-buss';
export * from './definitions/artifact.types';
export * from './definitions/directory.types';
export const chatEventBuss = EventBus('app-chat');
export const artifactEventBuss = EventBus('app-artifact');
export const notificationEventBuss = EventBus('app-notification');
export const calendarEventBuss = EventBus('app-calendar');
export const tasksEventBuss = EventBus('app-tasks');
export const directoryEventBuss = EventBus('app-directory');
export const oaDirectoryEventBuss = EventBus('ao-app-directory');
export const consentsEventBuss = EventBus('app-consents');
export const msOfficeEventBuss = EventBus('app-office');
export const asmaOverridesEventBus = EventBus('asma-overrides');
export const navigationEventBus = EventBus('app-navigation');
export const legacyPortalEventBus = EventBus('legacy-portal');
//# sourceMappingURL=index.js.map