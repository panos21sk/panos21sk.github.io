let commandStack: Array<string> = [""];

function addToHistory(command: string){
    //console.log(commandStack)
    commandStack.pop()
    commandStack.push(command)
    commandStack.push("")
    //console.log(commandStack)
}

function access(indexFromEnd: number): string{
    return commandStack[commandStack.length - indexFromEnd]
}


export {addToHistory, access}