export interface IPatientBasicData {
    id: string
    name: string
}

export interface IPatientBasicDataWithActno extends IPatientBasicData {
    actno: string
}

export interface IPatientIDs {
    id: string
    actno: string
}

interface UserActivity {
    id: string,
    name: string,
    description: string,
    corespondence_terminated: boolean,
    start_date: string,
}

export interface ISelectedUsers extends IPatientBasicData {
    national_id: string,
    mobile_phone: string | null,
    activities: UserActivity[]
    recipient_relation_ids: string[]
}