//helper functions
let CurrDirVal: string = "~";
let currDirMap: Map<string | null, Array<string>> = new Map(); //folder name, subdirs. When using cd check if arg is element of children array of currDir
//and be able to isolate arg from a pwd + arg entry
currDirMap.set("~", ["Projects/", "Skills/"])
currDirMap.set("$HOME", currDirMap.get("~")!) // exp()! means that return val of exp is guaranteed to not be null 
currDirMap.set("", currDirMap.get("~")!)
currDirMap.set(null, currDirMap.get("~")!)
currDirMap.set("/home/", currDirMap.get("~")!)

currDirMap.set("/", ["bin/", "home/"])
currDirMap.set("/bin/", ["help", "man", "pwd", "whoami", "cd", "ls", "cat", "echo", "sudo"])
currDirMap.set("/home/", ["username"]) //dk if its important to use actual uname ill pass into commandInline 

function createP(content: string){
    //create p element quickly
    const newP = document.createElement("p")
    newP.innerHTML=content
    const initbody = document.getElementById("init");
    initbody?.append(newP)
}
function checkIsOption(string: string): boolean{
    return true;
}
function currDir(): string{
    return CurrDirVal;
}


//commands
function help(){
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does")
}

function man(args: string){
    switch(args){
        case "man":
            createP("")
    }
}

function pwd(){

}

function whoami(name: string){
    createP(name)
}

function cd(args: string){

}

function ls(opts: string, args: string){

}

function cat(args: string){

}

function echo(args:string){
    createP(args)
}

function clear(){
    const initbody = document.getElementById("init");
    while (initbody?.firstChild) {
        initbody.removeChild(initbody?.lastChild!); // the ! means that initbody.lastChild is never null
    }
}

function sudo(uname: string){
    createP(`${uname} is not in the sudoers file. This incident will be reported.`)
}

export { createP, currDir, checkIsOption, help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo }