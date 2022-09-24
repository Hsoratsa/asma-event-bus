import { EventBus } from '../event-buss'
import type { IDirectoryEventBus } from './types'

export const directoryEventBuss = EventBus<IDirectoryEventBus>('app-directory')
