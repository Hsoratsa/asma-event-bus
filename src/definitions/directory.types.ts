import type { IPatientFullFata } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    users: IPatientFullFata[]
    selected_users: IPatientFullFata[]
}
