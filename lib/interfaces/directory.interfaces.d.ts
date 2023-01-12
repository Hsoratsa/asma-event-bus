export interface IPatientBasicData {
    id: string;
    neme: string;
}
export interface IPatientFullFata extends IPatientBasicData {
    actno: string;
    soknad_ids: string[];
}
export interface IPatientsFullFata {
    patients: IPatientFullFata[];
}
//# sourceMappingURL=directory.interfaces.d.ts.map