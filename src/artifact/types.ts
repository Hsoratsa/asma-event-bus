export interface IOnSelectDocument {
    id: string
    name: string
    url: string
}

export interface IArtifactEventBus {
    on_select_document: IOnSelectDocument | IOnSelectDocument[]
    selected_patient: string
    some_other_event: { id: string; name: number }
}