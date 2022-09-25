import type { IArtifactEventBus } from '../definitions/artifact.types'
import { EventBus } from '../event-buss'

export const artifactEventBuss = EventBus<IArtifactEventBus>('app-artifact')
