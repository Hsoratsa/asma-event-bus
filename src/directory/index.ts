import type { IDirectoryEventBus } from '../definitions/directory.types'
import { EventBus } from '../event-buss'

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')
