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
export enum QuestionTypes {
    BooleanQuestion = 'BooleanQuestion',
    CheckBoxes = 'CheckBoxes',
    CompositeQuestion = 'CompositeQuestion',
    DateField = 'DateField',
    Dropdown = 'Dropdown',
    FormatNumber = 'FormatNumber',
    LinearScale = 'LinearScale',
    Link = 'Link',
    RadioButtons = 'RadioButtons',
    TextLong = 'TextLong',
    TextShort = 'TextShort',
    Emoticons = 'Emoticons',
    DocumentUpload = 'DocumentUpload',
}

export enum ActorTypes {
    Mappable = 'mappable',
    Custom = 'custom',
    Complex = 'complex',
}

export enum EnvironmentEnums {
    local = 'local',
    dev = 'dev',
    test = 'test',
    stage = 'stage',
    prod = 'prod',
    no_env = 'no_env'
}

export enum ConsentsGroup {
    GENERAL = 'GENERAL',
    QUERY = 'QUERY',
    COMMNICATION = 'COMMUNICATION',
}

export enum ConsentsType {
    MANDATORY = 'MANDATORY',
    OPTIONAL = 'OPTIONAL',
}

export enum DocumentPatientSecurityLevel {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
}

export enum QueriesStatus {
    INBOUND = 'INBOUND',
    IN_PROGRESS = 'IN_PROGRESS',
    AWAITING_REPLY = 'AWAITING_REPLY',
    EXPIRED = 'EXPIRED',
    COMPLETED = 'COMPLETED',
    PROCESSED = 'PROCESSED',
    REJECTED = 'REJECTED',
}

export enum QueriesInitiator {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
}

export enum SmsTemplatesCategory {
    INFO = 'INFO',
    REJECT = 'REJECT',
}

export enum TemplatesContext {
    ADVOCA = 'ADVOCA',
    PORTAL = 'PORTAL',
    OUTLOOK = 'OUTLOOK',
}

export enum TemplatesAccessible {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
}