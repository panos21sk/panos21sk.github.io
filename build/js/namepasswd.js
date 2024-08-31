"use strict";
const nameInput = document.getElementById("name");
const passwdInput = document.getElementById("passwd");
const passwdInputTextArea = passwdInput === null || passwdInput === void 0 ? void 0 : passwdInput.lastElementChild;
nameInput === null || nameInput === void 0 ? void 0 : nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log(nameInput.value);
        if (nameInput.value != "") {
            var name = nameInput.value;
        }
        else {
            var name = "";
        }
        if (name != "") {
            if (passwdInput != null) {
                passwdInput.style.visibility = "visible";
            }
            console.log("making passwd visible");
            passwdInputTextArea.focus(); //#Check if working
        }
    }
});
//# sourceMappingURL=namepasswd.js.map