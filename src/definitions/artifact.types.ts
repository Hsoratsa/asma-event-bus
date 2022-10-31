import type { ArtifactPresenterTypes } from 'asma-types/lib'

export interface IOnSelectDocument {
    id: string
    name: string
    url: string
}

export interface IArtifactEventBus {
    on_select_documents: IOnSelectDocument[]
    some_test_event: { id: string; name: number }
    moderator_artifact_basic_data: IModeratorArtifactBasicData[]
    on_open_plans: {}
    on_open_research: {}
    question_id: string
}

export interface IModeratorArtifactBasicData {
    type: ArtifactPresenterTypes
    id: string
    title: string
}
