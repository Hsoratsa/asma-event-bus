import { EventBus } from './event-buss';
export * from './definitions/artifact.types';
export * from './definitions/directory.types';
export const chatEventBuss = EventBus('app-chat');
export const artifactEventBuss = EventBus('app-artifact');
export const calendarEventBuss = EventBus('app-calendar');
export const tasksEventBuss = EventBus('app-tasks');
export const directoryEventBuss = EventBus('app-directory');
export const consentsEventBuss = EventBus('app-consents');
export const msofficeEnventBuss = EventBus('app-office');
//# sourceMappingURL=index.js.map