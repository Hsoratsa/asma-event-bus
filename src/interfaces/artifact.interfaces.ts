import type { ArtifactPresenterTypes, TemplatesContextTypes } from 'asma-types/lib'

export interface IModeratorArtifactBasicData {
    type: ArtifactPresenterTypes
    id: string
    title: string
    patient_id: string
}

export interface IQnrViewBasicData {
    qnr_uuid: string
    target: TemplatesContextTypes
}
