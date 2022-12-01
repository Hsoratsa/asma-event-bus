import type { IModeratorArtifactBasicData, IQnrViewBasicData } from '../interfaces/artifact.interfaces';
export interface IOnSelectDocument {
    id: string;
    name: string;
    url: string;
}
export interface IArtifactEventBus {
    on_select_documents: IOnSelectDocument[];
    some_test_event: {
        id: string;
        name: number;
    };
    moderator_artifact_basic_data: IModeratorArtifactBasicData[];
    on_open_plans: {};
    on_open_research: {};
    on_open_qnr_view: IQnrViewBasicData;
    question_id: string;
}
//# sourceMappingURL=artifact.types.d.ts.map