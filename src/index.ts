import type { IArtifactEventBus } from './definitions/artifact.types'
import type { IChatEventBus } from './definitions/chat.types'
import type { IConsentsEventBus } from './definitions/consents.types'
import type { IDirectoryEventBus } from './definitions/directory.types'
import { EventBus } from './event-buss'

export * from './definitions/artifact.types'
export * from './definitions/directory.types'

export const chatEventBuss = EventBus<IChatEventBus>('app-chat')

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')

export const consentsEventBuss = EventBus<IConsentsEventBus>('app-consents')
