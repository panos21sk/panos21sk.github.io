import { CurrDir, createP, sudo, help, man, pwd, whoami, cd, ls, cat, clear, echo } from "./commands.js"
import { addToHistory, access } from "./command_history.js"

function parseCommand(command: string, uname: string){
    //console.log(`parsing command ${command}`)
    let commandArr: Array<string> = command.split(" ")
    // let commandMap: Map<string, number> = new Map()//k:command, v:index 
    // for (let i = 0; i < commandArr.length; i++){
    //     commandMap.set(commandArr[i], i);
    // } -- easier to understand but worse space and time efficiency
    switch(commandArr[0]){
        case "sudo":
            sudo(uname)
            break;

        case "echo":
            let echoArg: string = "";
            for(let i = 1; i < commandArr.length; i++){
                echoArg += commandArr[i]
                echoArg += ""
            }
            echo(echoArg)
            break;

        case "whoami":
            whoami(uname);
            break;

        case "clear":
            clear();
            break;

        case "man":
            for(let i = 1; i < commandArr.length; i++){
                man(commandArr[i]);
            }
            break;

        case "pwd":
            pwd();
            break;

        case "help":
            help()
            break;

        case "cd":
            cd(commandArr[1])
            break;

        case "ls":
            ls()
            break;

        case "cat":
            cat(commandArr[1])
            break;

        default:
            createP(`${commandArr[0]}: command not found`)
    }
}

//TODO: enter -> parse command -> execute imported function (ie bash command recreation) -> recursively create new cmdline elem
//IDEA: change client to route passed to url 
function commandInline(uname: string){
    const initbody : HTMLElement | null = document.getElementById("init");

    const cmd: HTMLElement = document.createElement('div')
    cmd.innerHTML = `\
        <p>${uname}@client:${CurrDir.name}$ </p>\
        <textarea autofocus rows="1"></textarea>\
        `;
    cmd.className = "termTextArea"

    const cmdTextArea: Element | null = cmd.lastElementChild; 
    initbody?.appendChild(cmd);
    (<HTMLInputElement>cmdTextArea).focus();

    let indexFromEnd: number = 0; 

    cmdTextArea?.addEventListener('keydown', (event) => {
        if ((<KeyboardEvent>event).key === 'Enter') {
            (<KeyboardEvent>event).preventDefault(); //do not add newline if enter is pressed
            //remove newline char
            (<HTMLInputElement>cmdTextArea).value = (<HTMLInputElement>cmdTextArea).value.replace(/\n|\r/g, "")

            if((<HTMLInputElement>cmdTextArea).value.length > 0 && !/\r|\n/.exec((<HTMLInputElement>cmdTextArea).value)){
                var command: string = (<HTMLInputElement>cmdTextArea).value
                //console.log(command)
                cmdTextArea.setAttribute("disabled", "");
                addToHistory(command)
                indexFromEnd = 0;
                parseCommand(command, uname)
                commandInline(uname)
            }
            else{
                //Check empty textbox by having it have length greater than 0 and not containing \r or \n via regexp
                //console.log(`no command ${(<HTMLInputElement>cmdTextArea).value}`)
                cmdTextArea.setAttribute("disabled", "")
                commandInline(uname);
            }
        }

        if ((<KeyboardEvent>event).key === "ArrowUp"){
            if(access(indexFromEnd + 1) != undefined){
                console.log(indexFromEnd + 1);
                (<HTMLInputElement>cmdTextArea).value = access(++indexFromEnd)
            } else console.log("undefined: " + indexFromEnd)
        }
        if ((<KeyboardEvent>event).key === "ArrowDown"){
            if(access(indexFromEnd - 1) != undefined){
                console.log(indexFromEnd - 1);
                (<HTMLInputElement>cmdTextArea).value = access(--indexFromEnd)
            } else console.log("undefined: " + indexFromEnd)
        }
    });

    
}

export { commandInline }