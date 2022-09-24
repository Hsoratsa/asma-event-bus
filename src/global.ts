import type { EventBusNamesEnum } from './types'

type fn = <T>(arg: T) => void

interface Registry {
    unregister: fn
}

declare global {
    interface Window {
        ASMA_EVENT_BUS?: {
            [key in EventBusNamesEnum]?: {
                dispatch: (event: string, arg: unknown) => void
                register: (event: string, callback: fn) => Registry
            }
        }
    }
}
