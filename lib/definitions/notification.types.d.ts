export interface INotificationEventBus {
    sms_data: ISmsData[];
    rejected_query_uuid: string;
}
export interface ISmsData {
    content: string;
}
export interface IPromptEventBus {
    on_trigger_prompt: {
        showPrompt: boolean;
        message: string;
        location?: Location;
    };
}
//# sourceMappingURL=notification.types.d.ts.map