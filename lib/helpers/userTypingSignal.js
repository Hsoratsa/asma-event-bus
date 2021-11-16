export function userTypingSignal(insertUserLastTyped) {
    let timmer = undefined;
    let last_typed = undefined;
    function setLastTyped() {
        last_typed = Date.now();
    }
    function initiateUserTyping() {
        if (timmer) {
            return;
        }
        if (userIsTyping()) {
            timmer = window.setInterval(() => {
                if (userIsTyping()) {
                    window.clearInterval(timmer);
                    timmer = undefined;
                }
                insertUserLastTyped();
            }, 1400);
        }
    }
    function userIsTyping() {
        if (!last_typed) {
            return false;
        }
        console.log(last_typed, new Date(Date.now() - 3 * 1000));
        return last_typed > Date.now() - 3 * 1000;
    }
    return {
        initiateUserTyping,
        setLastTyped,
    };
}
//# sourceMappingURL=userTypingSignal.js.map