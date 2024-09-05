//helper functions
let CurrDirVal = "~";
let currDirMap = new Map(); //folder name, subdirs. When using cd check if arg is element of children array of currDir
//and be able to isolate arg from a pwd + arg entry
currDirMap.set("~", ["Projects/", "Skills/"]);
currDirMap.set("$HOME", currDirMap.get("~")); // exp()! means that return val of exp is guaranteed to not be null 
currDirMap.set("", currDirMap.get("~"));
currDirMap.set(null, currDirMap.get("~"));
currDirMap.set("/home/", currDirMap.get("~"));
currDirMap.set("/", ["bin/", "home/"]);
currDirMap.set("/bin/", ["help", "man", "pwd", "whoami", "cd", "ls", "cat", "echo", "sudo"]);
currDirMap.set("/home/", ["username"]); //dk if its important to use actual uname ill pass into commandInline 
function createP(content) {
    //create p element quickly
    const newP = document.createElement("p");
    newP.innerHTML = content;
    const initbody = document.getElementById("init");
    initbody === null || initbody === void 0 ? void 0 : initbody.append(newP);
}
function checkIsOption(string) {
    return true;
}
function currDir() {
    return CurrDirVal;
}
//commands
function help() {
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does");
}
function man(args) {
    switch (args) {
        case "man":
            createP("");
    }
}
function pwd() {
}
function whoami(name) {
    createP(name);
}
function cd(args) {
}
function ls(opts, args) {
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
export { createP, currDir, checkIsOption, help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo };
//# sourceMappingURL=commands.js.map