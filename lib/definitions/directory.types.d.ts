import type { IPatientBasicData } from '../interfaces/directory.interfaces';
export interface IDirectoryEventBus {
    select_patients: string[];
    select_patient: string;
    selected_patients_soknad_ids: string[];
    patients_basic_data: IPatientBasicData[];
    users_credentials: {
        journal_user_id: string;
        brukerBrukerNavn: string;
    };
}
//# sourceMappingURL=directory.types.d.ts.map