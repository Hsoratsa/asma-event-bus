import type { IPatientFullData } from '../interfaces/directory.interfaces'

export interface IAoAppDirectoryEventBus {
    selected_users: IPatientFullData[]
}
