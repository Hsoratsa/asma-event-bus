export interface IPatientBasicData {
    id: string
}

export interface IPatientFullFata extends IPatientBasicData {
    actno: string
    soknad_ids: string[]
}

export interface IPatientsFullFata {
    patients: IPatientFullFata[]
}
