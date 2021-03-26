export var InitiatorTypes;
(function (InitiatorTypes) {
    InitiatorTypes["Customer"] = "customer";
    InitiatorTypes["Patient"] = "patient";
    InitiatorTypes["SelfCompletable"] = "self-completable";
})(InitiatorTypes || (InitiatorTypes = {}));
export var QnrContextTypes;
(function (QnrContextTypes) {
    QnrContextTypes["Advoca"] = "advoca";
    QnrContextTypes["Portal"] = "portal";
    QnrContextTypes["Outlook"] = "outlook";
})(QnrContextTypes || (QnrContextTypes = {}));
export var DocSignicatSignStatusTypes;
(function (DocSignicatSignStatusTypes) {
    DocSignicatSignStatusTypes["Complteted"] = "completed";
    DocSignicatSignStatusTypes["Rejected"] = "rejected";
    DocSignicatSignStatusTypes["Waiting"] = "waiting";
})(DocSignicatSignStatusTypes || (DocSignicatSignStatusTypes = {}));
export var DocProxyStatusTypes;
(function (DocProxyStatusTypes) {
    DocProxyStatusTypes["Signed"] = "signed";
    DocProxyStatusTypes["WaitingForSigning"] = "waiting_for_signing";
    DocProxyStatusTypes["OnlyForView"] = "only_for_view";
    /* download = 'download',
    uploaded = 'uploaded' */
})(DocProxyStatusTypes || (DocProxyStatusTypes = {}));
//# sourceMappingURL=enums.js.map