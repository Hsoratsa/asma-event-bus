import type { IPatientBasicData } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    select_patients: string[]

    select_patient: string

    selected_patients_soknad_ids: string[]

    patients_basic_data: IPatientBasicData[]
}
