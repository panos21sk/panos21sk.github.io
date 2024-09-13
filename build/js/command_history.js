let commandStack = [""];
function addToHistory(command) {
    //console.log(commandStack)
    commandStack.pop();
    commandStack.push(command);
    commandStack.push("");
    //console.log(commandStack)
}
function access(indexFromEnd) {
    return commandStack[commandStack.length - indexFromEnd];
}
export { addToHistory, access };
//# sourceMappingURL=command_history.js.map