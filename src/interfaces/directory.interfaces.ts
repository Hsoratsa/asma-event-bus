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


export interface ISelectedUsers {
    id: string
    soknad_id?: string
}

