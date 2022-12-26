import type { IPatientBasicData, IPatientBasicDataWithActno } from '../interfaces/directory.interfaces'

export interface IDirectoryEventBus {
    select_patients: string[]

    select_patient: string

    selected_patients_soknad_ids: string[]

    patients_basic_data: IPatientBasicData[]

    users_credentials: {
        journal_user_id: string
        brukerBrukerNavn: string
    }
    patients_basic_data_with_actno: IPatientBasicDataWithActno[]
}
