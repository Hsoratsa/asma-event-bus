export interface ISelectedTicket {
    id: string
    title: string
}

export interface IChatEventBus {
    on_select_document: ISelectedTicket
}
