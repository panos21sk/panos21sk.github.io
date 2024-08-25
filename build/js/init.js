"use strict";
const initbody = document.getElementById("init");
const systemd_services = [
    "a"
];
function init() {
    const pelem = document.createElement("p");
    const t = document.createTextNode("Welcome to PanUx!");
    pelem.appendChild(t);
    initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(pelem);
    console.log("func-exec");
}
init();
//# sourceMappingURL=init.js.map