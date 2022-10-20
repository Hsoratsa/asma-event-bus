import type { IArtifactEventBus } from './definitions/artifact.types'
import type { ICalendarEventBus } from './definitions/calendar.types'
import type { IChatEventBus } from './definitions/chat.types'
import type { IConsentsEventBus } from './definitions/consents.types'
import type { IDirectoryEventBus } from './definitions/directory.types'
import type { IDemoAsmaEventBus } from './definitions/someTest.types'
import { EventBus } from './event-buss'

export * from './definitions/artifact.types'
export * from './definitions/directory.types'

export const chatEventBuss = EventBus<IChatEventBus>('app-chat')

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')
export const calendarEventBuss = EventBus<ICalendarEventBus>('app-calendar')
export const tasksEventBuss = EventBus<ICalendarEventBus>('app-tasks')

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')

export const consentsEventBuss = EventBus<IConsentsEventBus>('app-consents')
export const demoAsmaEventBuss = EventBus<IDemoAsmaEventBus>('app-consents')
