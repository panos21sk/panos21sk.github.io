import { root } from "./folders.js";
//helper functions
let CurrDir = root.content[1] /*home*/.content[0] /*uname */; // as folder so it doesnt throw: string | file | folder not assignable to folder
function createP(content) {
    //create p element quickly
    const newP = document.createElement("p");
    newP.innerHTML = content;
    const initbody = document.getElementById("init");
    initbody === null || initbody === void 0 ? void 0 : initbody.append(newP);
}
function createManPage(content) {
    const manElem = document.createElement("div");
    manElem.style.position = "fixed";
    manElem.style.top = "0";
    manElem.style.left = "0";
    manElem.style.height = '100vh';
    manElem.style.width = '100vw';
    manElem.style.backgroundColor = "#000000";
    const newP = document.createElement("p");
    newP.innerHTML = content;
    manElem.appendChild(newP);
    const helpManElem = document.createElement("div");
    helpManElem.style.position = "fixed";
    helpManElem.style.bottom = "2vh";
    helpManElem.style.left = "2vh";
    helpManElem.style.height = '1.5vh';
    helpManElem.style.width = '96vw';
    helpManElem.style.backgroundColor = "#AAAAAA";
    helpManElem.style.color = "#000000";
    helpManElem.innerHTML = `
        <p style="margin-top:auto; margin-bottom: auto;">Click and press q to exit</p>
    `;
    manElem.appendChild(helpManElem);
    manElem.tabIndex = 0;
    const initbody = document.getElementById("init");
    initbody === null || initbody === void 0 ? void 0 : initbody.append(manElem);
    manElem.focus();
    manElem.addEventListener("keydown", (e) => {
        if (e.key == "q") {
            initbody === null || initbody === void 0 ? void 0 : initbody.removeChild(manElem);
            //TODO: implement this correctly: (<HTMLInputElement>initbody?.lastChild?.lastChild).focus();
        }
    });
    manElem.focus();
}
function checkIsOption(string) {
    return true; //TODO:
}
//commands
function help() {
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does");
}
function man(args) {
    switch (args) {
        case "man":
            createManPage(`
            NAME: <br/>
                man - an interface to the system reference manuals <br/>
            DESCRIPTION: <br/>
                man shows uses for each command specified <br/>`);
            break;
        default:
            createP(`No manual entry for ${args}`);
            break;
    }
}
function pwd() {
    createP(`${CurrDir.name}`);
}
function whoami(name) {
    createP(name);
}
function cd(args) {
}
function ls( /*opts?: string, args?: string*/) {
}
function cat(args) {
}
function echo(args) {
    createP(args);
}
function clear() {
    const initbody = document.getElementById("init");
    while (initbody === null || initbody === void 0 ? void 0 : initbody.firstChild) {
        initbody.removeChild(initbody === null || initbody === void 0 ? void 0 : initbody.lastChild); // the ! means that initbody.lastChild is never null
    }
}
function sudo(uname) {
    createP(`${uname} is not in the sudoers file. This incident will be reported.`);
}
export { createP, CurrDir, checkIsOption, help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo };
//# sourceMappingURL=commands.js.map