import { currDir, createP, sudo, help, whoami, clear, echo } from "./commands.js";
function parseCommand(command, uname) {
    console.log(`parsing command ${command}`);
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
            for (let i = 1; i <= commandArr.length; i++) {
                echoArg += commandArr[i];
            }
            echo(echoArg);
            break;
        case "whoami":
            whoami(uname);
            break;
        case "clear":
            clear();
            break;
        case "help":
            help();
            break;
        default:
            createP(`${command[0]}: command not found`);
    }
}
//TODO: enter -> parse command -> execute imported function (ie bash command recreation) -> recursively create new cmdline elem
//IDEA: change client to route passed to url 
function commandInline(uname) {
    const initbody = document.getElementById("init");
    const cmd = document.createElement('div');
    cmd.innerHTML = `\
        <p>${uname}@client:${currDir()}$ </p>\
        <textarea autofocus rows="1"></textarea>\
        `;
    cmd.className = "termTextArea";
    const cmdTextArea = cmd.lastElementChild;
    initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(cmd);
    cmdTextArea.focus();
    cmdTextArea === null || cmdTextArea === void 0 ? void 0 : cmdTextArea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            //remove newline char
            cmdTextArea.value = cmdTextArea.value.replace(/\n|\r/g, "");
            if (cmdTextArea.value.length > 0 && !/\r|\n/.exec(cmdTextArea.value)) {
                var command = cmdTextArea.value;
                console.log(command);
                cmdTextArea.setAttribute("disabled", "");
                parseCommand(command, uname);
                commandInline(uname);
            }
            else {
                //Check empty textbox by having it have length greater than 0 and not containing \r or \n via regexp
                console.log(`no command ${cmdTextArea.value}`);
                cmdTextArea.setAttribute("disabled", "");
                commandInline(uname);
            }
        }
    });
}
export { commandInline };
//# sourceMappingURL=command_line.js.map