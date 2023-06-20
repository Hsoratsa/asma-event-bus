import type { ArtifactPresenterTypes } from 'asma-types/lib';
export interface IOnSelectDocument {
    id: string;
    name: string;
    url?: string;
    file?: File;
}
export interface IArtifactOnSelect {
    id: string;
    type: 'qnr' | 'doc' | 'parcel';
}
export interface IArtifactEventBus {
    on_select_documents: IOnSelectDocument[];
    moderator_artifact_basic_data: IModeratorArtifactBasicData[];
    on_open_plans: {};
    on_open_research: {};
    qnr_custom_context?: string;
    sms_notification_recipients: ISmsNotificationRecipient[];
    /**
     * @use in all-qnrs widget
     */
    on_send_artifacts_to_cart: IArtifactOnSelect[];
    /**
     * @use in orders, all-qnrs widgets
     */
    select_artifacts: IArtifactOnSelect[];
    navigate_to_qnr_template_editor: {
        qnr_id?: string;
        is_anonymous?: boolean;
    };
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