export enum InitiatorTypes {
    Customer = 'customer',
    Patient = 'patient',
    SelfCompletable = 'self-completable',
}

export enum QnrContextTypes {
    Advoca = 'advoca',
    Portal = 'portal',
    Outlook = 'outlook',
}
export enum  DocSignicatSignStatusTypes {
    Complteted = 'completed',
    Rejected = 'rejected',
    Waiting = 'waiting'
}

export enum DocProxyStatusTypes {
    Signed = 'signed',
    WaitingForSigning = 'waiting_for_signing',
    OnlyForView = 'only_for_view',
    /* download = 'download',
    uploaded = 'uploaded' */
}
