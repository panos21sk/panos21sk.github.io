"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const initbody = document.getElementById("init");
const systemd_services = new Map();
//0: starting service, 1: OK success code, started -- GoTo ln 78
systemd_services.set("Reached target Remote File Systems.", 1);
systemd_services.set("Listening on Delayed Shutdown Socket.", 1);
systemd_services.set("Listening on /dev/initctl Compatibility Named Pipe.", 1);
systemd_services.set("Reached target Encrypted Volumes.", 1);
systemd_services.set("Listening on udev Kernel Socket..", 1);
systemd_services.set("Listening on udev Control Socket.", 1);
systemd_services.set("Set up automount Arbitrary Executable File Formats F...utomount Point.", 1);
systemd_services.set("Expecting device dev-disk-by\\x2diiod-6038ea52\\x2d80a..ce4c9.device...", 0);
systemd_services.set("Listening on Journal Socket", 1);
systemd_services.set("Starting File System Check on Root Device...", 0);
systemd_services.set("Starting udev Kernel Device Manager", 0);
systemd_services.set("Mounting Debug File System...", 0);
systemd_services.set("Starting Journal Service...", 0);
systemd_services.set("Started Journal Service.", 0);
systemd_services.set("Starting Apply Kernel Variables...", 0);
systemd_services.set("Startomg udev Coldplug all Devices...", 0);
systemd_services.set("Mounting Huge Pages File System...", 0);
systemd_services.set("Mounting POSIX Message Queue File System...", 0);
systemd_services.set("Starting Setup Virtual Console...", 0);
systemd_services.set("Starting Set Up Additional Binary Formats...", 0);
systemd_services.set("Started Apply Kernel Variables.", 1);
systemd_services.set("Started udev Kernel Device Manager.", 1);
systemd_services.set("Mounting Arbitrary Executable File Formats file System...", 0);
systemd_services.set("Started udev Coldplug all Devices.", 1);
systemd_services.set("Mounted POSIX Message Queue File System.", 1);
systemd_services.set("Mounted Debug File System.", 1);
systemd_services.set("Mounted Huge Pages File System.", 1);
systemd_services.set("Mounted Arbitrary Executable File Formats File System.", 1);
systemd_services.set("Started Set Up Additional Binary Formats.", 1);
systemd_services.set("Started Setup Virtual Console.", 1);
systemd_services.set("", 0);
systemd_services.set("Started File System Check on Root Device.", 1);
systemd_services.set("Starting Remount Root and Kernel File Systems...", 0);
systemd_services.set("Started Remount Boot and Kernel File Systems...", 1);
systemd_services.set("Reached target Local File Systems (Pre).", 1);
systemd_services.set("Mounting Temporary Directory...", 0);
systemd_services.set("Starting Load Random Seed...", 0);
systemd_services.set("Mounted Temporary Directory.", 1);
systemd_services.set("Reached Target Local File Systems.", 1);
systemd_services.set("Starting Recreate Volatile Files and Directories...", 0);
systemd_services.set("Found Device HARDDISK", 1);
systemd_services.set("Activating swap /dev/sda2...", 0);
systemd_services.set("Started Load Random Seed", 1);
systemd_services.set("Activated swap /dev/sda2.", 1);
systemd_services.set("Reached target Swap.", 1);
systemd_services.set("Started Recreate Voaltile Files and Directories.", 1);
systemd_services.set("Reached target System Initialization.", 1);
systemd_services.set("Starting Restore Sound Card State...", 0);
systemd_services.set("Listening on SSH Socket for Per-Connection Servers.", 1);
systemd_services.set("Listening on Avahi mDNS/DNS-SD Stacl Activation Socket.", 1);
systemd_services.set("Listening on D-Bus System Message Bus Socket.", 1);
systemd_services.set("Reached target Sockets.", 1);
systemd_services.set("Reacjed target Basic System.", 1);
systemd_services.set("Starting Netowrk Manager...", 0);
systemd_services.set("Starting Network Time Service...", 0);
systemd_services.set("Starting Command Scheduler...", 0);
systemd_services.set("Started Command Scheduler.", 1);
systemd_services.set("Starting Login Service...", 0);
systemd_services.set("Starting Avahi mDNS/DNS-SD Stack...", 0);
systemd_services.set("Starting Permit User Sessions...", 0);
systemd_services.set("Starting D-Bus System Message Bus...", 0);
systemd_services.set("Started Resore Sound Card State.", 1);
systemd_services.set("Started Network Time Service.", 1);
systemd_services.set("Started target Network TIme Protocol.", 1);
systemd_services.set("Started Permit User Sessions.", 1);
systemd_services.set("Starting Serial Getty on ttyS0...", 0);
systemd_services.set("Started Serial Getty on ttyS0.", 1);
systemd_services.set("Starting Getty on tty1...", 0);
systemd_services.set("Started Getty on tty1", 1);
systemd_services.set("Reached target Login Prompts.", 1);
systemd_services.set("Started D-Bus Sustem Message Bus.", 1);
systemd_services.set("Started Avahi mDNS/DNS-SD Stack.", 1);
systemd_services.set("Started Login Service.", 1);
systemd_services.set("Started Network Manager.", 1);
systemd_services.set("Reached target Multi-User.", 1);
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("func-exec"); //!
        //iterate through each systemd service in map
        for (let [k, v] of systemd_services) {
            let pelem = document.createElement("p");
            if (v == 0) {
                pelem.innerHTML = "      " + k;
            }
            else if (v == 1) {
                pelem.innerHTML = "[ <span style=\"color:#3adb3a\">OK</span> ]" + k;
            }
            yield new Promise(r => setTimeout(r, parseInt(Math.random().toFixed(2)) * 1000)); //ms
            initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(pelem);
        }
        yield new Promise(r => setTimeout(r, 750)); //ms
        console.log("clear"); //!
        while (initbody === null || initbody === void 0 ? void 0 : initbody.firstChild) {
            initbody.removeChild(initbody === null || initbody === void 0 ? void 0 : initbody.lastChild); // the ! means that initbody.lastChild is never null
        }
        for (let i = 0; i < 2; i++) {
            let pelem = document.createElement("p");
            switch (i) {
                case 0:
                    pelem.innerHTML = "PanUx 1.0";
                    break;
                case 1:
                    pelem.innerHTML = "Kenrel 6.10.5-arch1-1 on an x86_64(ttyS0)";
                    break;
                case 2:
                    pelem.innerHTML = "";
                    break;
            }
            initbody === null || initbody === void 0 ? void 0 : initbody.appendChild(pelem);
        }
    });
}
init();
//# sourceMappingURL=init.js.map