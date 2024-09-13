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
    //helpManElem.style.width = '96vw'
    helpManElem.style.backgroundColor = "#AAAAAA"
    helpManElem.style.color = "#000000"
    helpManElem.innerHTML = `
        <p style="margin-top:auto; margin-bottom: auto;">Click and press q to exit. (Warning: If you're on mobile, refresh the page. This is not supposed to work on mobile to stay faithful to the source)</p>
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
                &emsp; man - an interface to the system reference manuals <br/>
            DESCRIPTION: <br/>
                &emsp; man shows description and usage for the command specified passed in<br/>`
            )
            break;

        case "help":
            createManPage(`
                NAME: <br/>
                    &emsp; help <br/>
                DESCRIPTION: <br/>
                    &emsp; Displays a helper that lists out all available commands, along with signifying the importance and demonstrating the usage of man pages<br/>`
                )
            break;

        case "pwd":
            createManPage(`
                NAME: <br/>
                    &emsp; pwd - Print Working Directory<br/>
                DESCRIPTION: <br/>
                    &emsp; Displays the name of the directory that is used as reference for relative file paths.<br/>`
                )
            break;
            
        case "whoami":
            createManPage(`
                NAME: <br/>
                    &emsp; whoami<br/>
                DESCRIPTION: <br/>
                    &emsp; Displays the name of your user.<br/>`
                )
            break;
            
        case "cd":
            createManPage(`
                NAME: <br/>
                    &emsp; cd - Change Directory<br/>
                DESCRIPTION: <br/>
                    &emsp; Change the current working directory to be used as reference for relative file paths.<br/>`
                )
            break;
            
        case "ls":
            createManPage(`
                NAME: <br/>
                    &emsp; ls - List<br/>
                DESCRIPTION: <br/>
                    &emsp; Displays contents of current working directory. Subdirectories end with a "/", files do not end with a "/".<br/>`
                )
            break;
            
        case "cat":
            createManPage(`
                NAME: <br/>
                    &emsp; cat - concatnate file contents to standard output<br/>
                DESCRIPTION: <br/>
                    &emsp; Displays text content of file.<br/>`
                )
            break;
            
        case "echo":
            createManPage(`
                NAME: <br/>
                    &emsp; echo - print<br/>
                DESCRIPTION: <br/>
                    &emsp; Displays whatever is passed in.<br/>`
                )
            break;
            
        case "sudo":
            createManPage(`
                NAME: <br/>
                    &emsp; sudo - superuser do<br/>
                DESCRIPTION: <br/>
                    &emsp; Runs command as superuser, elevates privilages. User must be in sudoers file and the root user's password must be known for use.<br/>`
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
    if(!CurrDir.content.some(f => args === f.name || args === f.name + "/" || args == "..")){
        createP(`cd: The directory \'${args}\' does not exist`);
        return;
    }

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
    if(!CurrDir.content.some(f => args === f.name)){
        createP(`cat: ${args}: No such file or directory`);
        return;
    }
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