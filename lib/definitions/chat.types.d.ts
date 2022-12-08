export interface ISelectedTicket {
    id: string;
    title: string;
}
export interface ISelectedChatDocument {
    file: File;
    data: {
        title: string;
        extension: string;
    };
}
export interface IChatEventBus {
    on_select_document: ISelectedTicket;
    on_select_chat_document: ISelectedChatDocument;
    test: string;
}
//# sourceMappingURL=chat.types.d.ts.map