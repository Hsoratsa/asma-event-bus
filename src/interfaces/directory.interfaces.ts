export interface IPatientBasicData {
    id: string
    name: string
}
export interface IUsersForOrders extends IPatientBasicData {
    soknad_id: string
    directory_uuid: string
}

export interface IPatientFullData extends IPatientBasicData {
    actno: string
    soknad_ids: string[]
}
