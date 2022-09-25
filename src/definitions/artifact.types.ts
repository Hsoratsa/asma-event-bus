export interface IOnSelectDocument {
    id: string
    name: string
    url: string
}

export interface IArtifactEventBus {
    on_select_document: IOnSelectDocument | IOnSelectDocument[]
    some_test_event: { id: string; name: number }
}
