function parseCommand(command: string){
    let commandArr: Array<string> = command.split(" ")
    // let commandMap: Map<string, number> = new Map()//k:command, v:index 
    // for (let i = 0; i < commandArr.length; i++){
    //     commandMap.set(commandArr[i], i);
    // } -- easier to understand but worse space and time efficiency
    for (let i = 0; i < commandArr.length; i++){
        switch(i){
            case 0:
                if (commandArr[i] == "sudo"){
                    
                }
                break;
        }
    }
}

function commandInline(){
    let cmd: HTMLElement = document.createElement('div')
    
}

export { commandInline }