const initbody : HTMLElement | null = document.getElementById("init")
const systemd_services: Array<string> = [
"a"
]

function init(){
    const pelem : HTMLElement = document.createElement("p");
    const t = document.createTextNode("Welcome to PanUx!");
    pelem.appendChild(t);
    initbody?.appendChild(pelem);
    console.log("func-exec");
}

init();