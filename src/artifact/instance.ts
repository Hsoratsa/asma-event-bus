import { EventBus } from '../event-buss'
import type { IArtifactEventBus } from './types'

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')
