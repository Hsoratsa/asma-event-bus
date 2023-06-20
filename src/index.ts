import type { IAoAppDirectoryEventBus } from './definitions/ao-app-directory.types'
import type { IArtifactEventBus } from './definitions/artifact.types'
import type { ICalendarEventBus } from './definitions/calendar.types'
import type { IChatEventBus } from './definitions/chat.types'
import type { IConsentsEventBus } from './definitions/consents.types'
import type { IDirectoryEventBus } from './definitions/directory.types'
import type { IMsOfficeEventBus } from './definitions/msoffice.types'
import type { INotificationEventBus } from './definitions/notification.types'
import type { ITasksEventBus } from './definitions/tasks.types'
import { EventBus } from './event-buss'

export * from './definitions/artifact.types'
export * from './definitions/directory.types'

export const chatEventBuss = EventBus<IChatEventBus>('app-chat')

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')
export const notificationEventBuss = EventBus<INotificationEventBus>('app-notification')

export const calendarEventBuss = EventBus<ICalendarEventBus>('app-calendar')
export const tasksEventBuss = EventBus<ITasksEventBus>('app-tasks')

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')
export const oaDirectoryEventBuss = EventBus<IAoAppDirectoryEventBus>('ao-app-directory')
export const consentsEventBuss = EventBus<IConsentsEventBus>('app-consents')
export const msOfficeEventBuss = EventBus<IMsOfficeEventBus>('app-office')
