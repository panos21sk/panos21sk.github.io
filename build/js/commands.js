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
function checkIsOption(string) {
    return true; //TODO:
}
//commands
function help() {
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does");
}
function man(args) {
    const manElem = document.createElement("div");
    manElem.style.height = '100vh';
    manElem.style.width = '100vw';
    manElem.style.backgroundColor = "#000000";
    const initbody = document.getElementById("init");
    initbody === null || initbody === void 0 ? void 0 : initbody.append(manElem);
    switch (args) {
        case "man":
            const newP = document.createElement("p");
            newP.innerHTML = `
            NAME:
                man - an interface to the system reference manuals
            DESCRIPTION:
                man shows uses for each command specified
            `;
            manElem.appendChild(newP);
        default:
            createP(`No manual entry for ${args}`);
            initbody === null || initbody === void 0 ? void 0 : initbody.removeChild(manElem);
            break;
    }
    manElem.addEventListener("keydown", (e) => {
        if (e.key == "q") {
            initbody === null || initbody === void 0 ? void 0 : initbody.removeChild(manElem);
        }
    });
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