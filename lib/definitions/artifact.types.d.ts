import type { ArtifactPresenterTypes } from 'asma-types/lib';
export interface IOnSelectDocument {
    id: string;
    name: string;
    url?: string;
    file?: File;
}
export interface IArtifactEventBus {
    on_select_documents: IOnSelectDocument[];
    moderator_artifact_basic_data: IModeratorArtifactBasicData[];
    on_open_plans: {};
    on_open_research: {};
    qnr_custom_context?: string;
    sms_notification_recipients: ISmsNotificationRecipient[];
    on_send_artifacts_to_cart: {
        id: string;
        type: 'qnr' | 'doc' | 'parcel';
    }[];
}
export interface IModeratorArtifactBasicData {
    type: ArtifactPresenterTypes;
    id: string;
    title: string;
    patient_id: string;
}
export interface ISmsNotificationRecipient {
    user_id: string;
    subject_id: string;
}
//# sourceMappingURL=artifact.types.d.ts.map