const nameInput = document.getElementById("name");
const passwdInput = document.getElementById("passwd")
const passwdInputTextArea = passwdInput?.lastElementChild;

nameInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log( (<HTMLInputElement>nameInput).value )
        if((<HTMLInputElement>nameInput).value != ""){
            var name: string = (<HTMLInputElement>nameInput).value;
        }
        else{
            var name: string = ""
        }


        if(name != ""){
            passwdInput?.removeAttribute("hidden")
            console.log("making passwd visible")
            passwdInputTextArea?.setAttribute("autofocus", ""); //#Check if working
        }
    }

});