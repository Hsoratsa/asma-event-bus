export function getGqlOperationName(query) {
    var _a, _b, _c, _d, _e, _f;
    const is_query = query.includes('query') ? 'query' : undefined;
    const is_mutation = query.includes('mutation') ? 'mutation' : undefined;
    const is_subscription = query.includes('subscription') ? 'subscription' : undefined;
    const is_qql_query = is_query || is_mutation || is_subscription;
    if (!is_qql_query) {
        return undefined;
    }
    const split_word = query.includes('query') ? 'query' : query.includes('mutation') ? 'mutation' : 'subscription';
    let operationName = (_f = (_e = (_d = (_c = (_b = (_a = split_word === null || split_word === void 0 ? void 0 : split_word.split(split_word, 1)) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split('{', 1)[0]) === null || _c === void 0 ? void 0 : _c.trim()) === null || _d === void 0 ? void 0 : _d.split(' ')) === null || _e === void 0 ? void 0 : _e[1]) === null || _f === void 0 ? void 0 : _f.trim();
    if (operationName === null || operationName === void 0 ? void 0 : operationName.includes('(')) {
        operationName = operationName.split('(', 1)[0];
    }
    return operationName;
}
//# sourceMappingURL=getGqlOperationName.js.map