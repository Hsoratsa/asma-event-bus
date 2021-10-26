export declare enum InitiatorTypes {
    Customer = "customer",
    Patient = "patient",
    SelfCompletable = "self-completable"
}
export declare enum QnrContextTypes {
    Advoca = "advoca",
    Portal = "portal",
    Outlook = "outlook"
}
export declare enum DocSignicatSignStatusTypes {
    Complteted = "completed",
    Rejected = "rejected",
    Waiting = "waiting"
}
export declare enum DocProxyStatusTypes {
    Signed = "signed",
    WaitingForSigning = "waiting_for_signing",
    OnlyForView = "only_for_view"
}
export declare enum QuestionTypes {
    BooleanQuestion = "BooleanQuestion",
    CheckBoxes = "CheckBoxes",
    CompositeQuestion = "CompositeQuestion",
    DateField = "DateField",
    Dropdown = "Dropdown",
    FormatNumber = "FormatNumber",
    LinearScale = "LinearScale",
    Link = "Link",
    RadioButtons = "RadioButtons",
    TextLong = "TextLong",
    TextShort = "TextShort",
    Emoticons = "Emoticons",
    DocumentUpload = "DocumentUpload"
}
export declare enum ActorTypes {
    Mappable = "mappable",
    Custom = "custom",
    Complex = "complex"
}
export declare enum EnvironmentEnums {
    local = "local",
    dev = "dev",
    test = "test",
    stage = "stage",
    prod = "prod",
    no_env = "no_env"
}
export declare enum ConsentsGroup {
    GENERAL = "GENERAL",
    QUERY = "QUERY",
    COMMNICATION = "COMMUNICATION"
}
export declare enum ConsentsType {
    MANDATORY = "MANDATORY",
    OPTIONAL = "OPTIONAL"
}
export declare enum DocumentPatientSecurityLevel {
    ONE = "1",
    TWO = "2",
    THREE = "3",
    FOUR = "4"
}
export declare enum QueriesStatus {
    INBOUND = "INBOUND",
    IN_PROGRESS = "IN_PROGRESS",
    AWAITING_REPLY = "AWAITING_REPLY",
    EXPIRED = "EXPIRED",
    COMPLETED = "COMPLETED",
    PROCESSED = "PROCESSED",
    REJECTED = "REJECTED"
}
export declare enum QueriesInitiator {
    PATIENT = "PATIENT",
    CUSTOMER = "CUSTOMER",
    SELF_COMPLETABLE = "SELF_COMPLETABLE"
}
export declare enum SmsTemplatesCategory {
    INFO = "INFO",
    REJECT = "REJECT"
}
export declare enum TemplatesContext {
    ADVOCA = "ADVOCA",
    PORTAL = "PORTAL",
    OUTLOOK = "OUTLOOK"
}
export declare enum TemplatesAccessible {
    PATIENT = "PATIENT",
    CUSTOMER = "CUSTOMER"
}
//# sourceMappingURL=enums.d.ts.map