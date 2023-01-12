import type { IPatientsFullFata } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    users: IPatientsFullFata[]
    selected_users: IPatientsFullFata[]
}
