export interface ISaveToDataBase {
    method: string
    json: string
    uuid: string | undefined
    feedback: IFeedBack
    url: string
    origin?: {
        method: string
        // history: any
    }
}

export interface IFeedBack {
    error?: string
    type: string
    message: string
    show_time: number
}