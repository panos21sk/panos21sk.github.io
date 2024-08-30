const nameInput = document.getElementById("name");
const passwdInput = document.getElementById("passwd")

nameInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let name: string | null = (<HTMLInputElement>nameInput).value;
    }
});