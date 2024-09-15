import { CurrDir, createP, sudo, help, man, pwd, whoami, cd, ls, cat, clear, echo } from "./commands.js";
import { addToHistory, access } from "./command_history.js";
function parseCommand(command, uname) {
    //console.log(`parsing command ${command}`)
    let commandArr = command.split(" ");
    // let commandMap: Map<string, number> = new Map()//k:command, v:index 
    // for (let i = 0; i < commandArr.length; i++){
    //     commandMap.set(commandArr[i], i);
    // } -- easier to understand but worse space and time efficiency
    switch (commandArr[0]) {
        case "sudo":
            sudo(uname);
            break;
        case "echo":
            let echoArg = "";
            for (let i = 1; i < commandArr.length; i++) {
                echoArg += commandArr[i];
                echoArg += "";
            }
            echo(echoArg);
            break;
        case "whoami":
            whoami(uname);
            break;
        case "clear":
            clear();
            break;
        case "man":
            for (let i = 1; i < commandArr.length; i++) {
                man(commandArr[i]);
            }
            break;
        case "pwd":
            pwd();
            break;
        case "help":
            help();
            break;
        case "cd":
            cd(commandArr[1]);
            break;
        case "ls":
            ls();
            break;
        case "cat":
            cat(commandArr[1]);
            break;
        default:
            createP(`${commandArr[0]}: command not found`);
    }
}
//TODO: enter -> parse command -> execute imported function (ie bash command recreation) -> recursively create new cmdline elem
//IDEA: change client to route passed to url 
function commandInline(uname) {
    const initbody = document.getElementById("init");
    const cmd = document.createElement('div');
    cmd.innerHTML = `\
        <p>${uname}@client:${(() => {
        if (CurrDir.name == `${uname}`) {
            return "~";
        }
        else
            return CurrDir.name;
    })()}$ </p>\ 
        <textarea autofocus rows="1"></textarea>\
        `; //i dont get why i need the () at {(()=>{})()} but its ok ig, thanks stack overflow
    cmd.className = "termTextArea";
    const cmdTextArea = cmd.lastElementChild;
    initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(cmd);
    cmdTextArea.focus();
    let indexFromEnd = 0;
    cmdTextArea === null || cmdTextArea === void 0 ? void 0 : cmdTextArea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); //do not add newline if enter is pressed
            //remove newline char
            cmdTextArea.value = cmdTextArea.value.replace(/\n|\r/g, "");
            if (cmdTextArea.value.length > 0 && !/\r|\n/.exec(cmdTextArea.value)) {
                var command = cmdTextArea.value;
                //console.log(command)
                cmdTextArea.setAttribute("disabled", "");
                addToHistory(command);
                indexFromEnd = 0;
                parseCommand(command, uname);
                commandInline(uname);
            }
            else {
                //Check empty textbox by having it have length greater than 0 and not containing \r or \n via regexp
                //console.log(`no command ${(<HTMLInputElement>cmdTextArea).value}`)
                cmdTextArea.setAttribute("disabled", "");
                commandInline(uname);
            }
        }
        if (event.key === "ArrowUp") {
            if (access(indexFromEnd + 1) != undefined) {
                console.log(indexFromEnd + 1);
                cmdTextArea.value = access(++indexFromEnd);
            }
            else
                console.log("undefined: " + indexFromEnd);
        }
        if (event.key === "ArrowDown") {
            if (access(indexFromEnd - 1) != undefined) {
                console.log(indexFromEnd - 1);
                cmdTextArea.value = access(--indexFromEnd);
            }
            else
                console.log("undefined: " + indexFromEnd);
        }
    });
}
export { commandInline };
//# sourceMappingURL=command_line.js.map