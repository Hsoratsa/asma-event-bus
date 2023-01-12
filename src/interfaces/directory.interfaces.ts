export interface IPatientBasicData {
    id: string
    name: string
}

export interface IPatientFullFata extends IPatientBasicData {
    actno: string
    soknad_ids: string[]
}
