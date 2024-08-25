const initbody : HTMLElement | null = document.getElementById("init")
const systemd_services: Array<string> = [

]

function init(){
    const pelem = document.createElement("p");
    const t = document.createTextNode("Welcome to PanUx!");
    pelem.appendChild(t);
    initbody?.appendChild(pelem);

}

init();