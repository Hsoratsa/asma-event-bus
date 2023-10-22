
export interface INotificationEventBus {
    sms_data: ISmsData[]
    rejected_query_uuid: string
}

export interface ISmsData {
    content: string
}

