export interface IPatientBasicData {
    /**
     * @id is user directory_uuid or users directory_id
     */
    id: string;
    name: string;
}
export interface IUsersForOrders extends IPatientBasicData {
    /**
     * @soknad_id is activity_id or activity
     */
    soknad_id: string;
    directory_uuid: string;
}
export interface IPatientFullData extends IPatientBasicData {
    actno: string;
    soknad_ids: string[];
}
//# sourceMappingURL=directory.interfaces.d.ts.map