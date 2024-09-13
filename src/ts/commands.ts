import { root, file, folder } from "./folders.js"

//helper functions
let CurrDir: folder = root.content[1]/*home*/.content[0]/*uname*/ as folder; // as folder so it doesnt throw: string | file | folder not assignable to folder

function createP(content: string){
    //create p element quickly
    const newP = document.createElement("p")
    newP.innerHTML=content
    const initbody = document.getElementById("init");
    initbody?.append(newP)
}
function createManPage(content: string){
    const manElem = document.createElement("div")
    manElem.style.position = "fixed"
    manElem.style.top = "0"
    manElem.style.left = "0"
    manElem.style.height = '100vh'
    manElem.style.width = '100vw'
    manElem.style.backgroundColor = "#000000"

    const newP = document.createElement("p")
    newP.innerHTML = content
    manElem.appendChild(newP)

    const helpManElem = document.createElement("div")
    helpManElem.style.position = "fixed"
    helpManElem.style.bottom = "2vh"
    helpManElem.style.left = "2vh"
    helpManElem.style.height = '1.5vh'
    helpManElem.style.width = '96vw'
    helpManElem.style.backgroundColor = "#AAAAAA"
    helpManElem.style.color = "#000000"
    helpManElem.innerHTML = `
        <p style="margin-top:auto; margin-bottom: auto;">Click and press q to exit</p>
    `;
    manElem.appendChild(helpManElem)

    manElem.tabIndex = 0;
    const initbody = document.getElementById("init");
    initbody?.append(manElem)
    manElem.focus();

    manElem.addEventListener("keydown", (e: KeyboardEvent)=>{
        if(e.key=="q"){
            initbody?.removeChild(manElem);
            //TODO: implement this correctly: (<HTMLInputElement>initbody?.lastChild?.lastChild).focus();
        }
    })
    manElem.focus();
}
/*
function checkIsOption(string: string): boolean{
    return true; //TODO: complete this
}
*/

//commands
function help(){
    createP("Available binaries: man, pwd, whoami, cd, ls, cat, echo, sudo. Type man \'commandName\' to view explanation of what the given command does")
}

function man(args: string){
    switch(args){
        case "man":
            createManPage(`
            NAME: <br/>
                man - an interface to the system reference manuals <br/>
            DESCRIPTION: <br/>
                man shows uses for each command specified <br/>`
            )
            break;
            
        default:
            createP(`No manual entry for ${args}`)
            break;
    }
}

function pwd(){
    createP(`${CurrDir.name}`)
}

function whoami(name: string){
    createP(name)
}

function cd(args: string){
    if(args == ".." && CurrDir.parent != null){
        CurrDir = CurrDir.parent
    } else { //TODO: Add support for non relative paths
        CurrDir.content.forEach((f) => {
            if(args == f.name || args == f.name + "/"){
                if(Array.isArray(f.content)){ //check if f is folder instead of file via checking whether content is an array as opposed to a string
                    CurrDir = f as folder;
                    return;
                }
            }
        })
        //createP(`cd: The directory "${args}" does not exist`) //TODO: 
    }
}

function ls(/*opts?: string, args?: string*/){
    CurrDir.content.forEach((f) => {
        if(Array.isArray(f.content)){
            createP(f.name + "/")
        } else {
            createP(f.name)
        }
    })
}

function cat(args: string){
    CurrDir.content.forEach((f) => {
        if(args == f.name){
            if(!Array.isArray(f.content)){ //check if f is folder instead of file via checking whether content is an array as opposed to a string
                createP(f.content)
                return;
            }
        }
    })
    //createP(`cat: ${args}: No such file or directory`) //TODO:
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

export { createP, CurrDir, /*checkIsOption,*/ help, man, pwd, whoami, cd, ls, cat, echo, clear, sudo }