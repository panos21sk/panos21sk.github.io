import { root, file, folder } from "./folders.js"

//helper functions
let CurrDir: folder = root.content[1]/*home*/.content[0]/*uname */ as folder; // as folder so it doesnt throw: string | file | folder not assignable to folder

function createP(content: string){
    //create p element quickly
    const newP = document.createElement("p")
    newP.innerHTML=content
    const initbody = document.getElementById("init");
    initbody?.append(newP)
}
function checkIsOption(string: string): boolean{
    return true; //TODO:
}


//commands
function help(){
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does")
}

function man(args: string){
    const manElem = document.createElement("div")
    manElem.style.height = '100vh'
    manElem.style.width = '100vw'
    manElem.style.backgroundColor = "#000000"
    const initbody = document.getElementById("init");
    initbody?.append(manElem)

    switch(args){
        case "man":
            const newP = document.createElement("p")
            newP.innerHTML = `
            NAME:
                man - an interface to the system reference manuals
            DESCRIPTION:
                man shows uses for each command specified
            `;
            manElem.appendChild(newP)
            
        default:
            createP(`No manual entry for ${args}`)
            initbody?.removeChild(manElem)
            break;
    }
    manElem.addEventListener("keydown", (e: KeyboardEvent)=>{
        if(e.key=="q"){
            initbody?.removeChild(manElem)
        }
    })
}

function pwd(){
    createP(`${CurrDir.name}`)
}

function whoami(name: string){
    createP(name)
}

function cd(args: string){

}

function ls(/*opts?: string, args?: string*/){

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

export { createP, CurrDir, checkIsOption, help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo }