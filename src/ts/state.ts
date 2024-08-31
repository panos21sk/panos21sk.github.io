let state: string = ""; //state refers to the global state of the site, the stage where its at currently, whether that be init, namepasswd, or commands

function setState(newState: string){
    state = newState;
}

function getState(){
    return state;
}

export { setState, getState }