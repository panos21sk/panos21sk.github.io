function parseCommand(command) {
    let commandArr = command.split(" ");
    // let commandMap: Map<string, number> = new Map()//k:command, v:index 
    // for (let i = 0; i < commandArr.length; i++){
    //     commandMap.set(commandArr[i], i);
    // } -- easier to understand but worse space and time efficiency
    for (let i = 0; i < commandArr.length; i++) {
        switch (i) {
            case 0:
                if (commandArr[i] == "sudo") {
                }
                break;
        }
    }
}
//TODO: enter -> parse command -> execute imported function (ie bash command recreation) -> recursively create new cmdline elem
//IDEA: change client to route passed to url 
function commandInline(uname) {
    const initbody = document.getElementById("init");
    const cmd = document.createElement('div');
    cmd.innerHTML = `\
        <p>[ ${uname}@client ]</p>\
        <textarea autofocus rows="1"></textarea>\
        `;
    cmd.className = "termTextArea";
    const cmdTextArea = cmd.lastElementChild;
    initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(cmd);
    cmdTextArea === null || cmdTextArea === void 0 ? void 0 : cmdTextArea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (cmdTextArea.value.length > 0 && !/\r|\n/.exec(cmdTextArea.value)) {
                //remove newline char
                var command = cmdTextArea.value.replace(/\n|\r/g, "");
                console.log(command + command.length);
                cmdTextArea.setAttribute("disabled", "");
                parseCommand(command);
            }
            else {
                //Check empty textbox by having it have length greater than 0 and not containing \r or \n via regexp
                cmdTextArea.setAttribute("disabled", "");
                commandInline(uname);
            }
        }
    });
}
export { commandInline };
//# sourceMappingURL=command_line.js.map