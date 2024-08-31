"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = setState;
exports.getState = getState;
let state = ""; //state refers to the global state of the site, the stage where its at currently, whether that be init, namepasswd, or commands
function setState(newState) {
    state = newState;
}
function getState() {
    return state;
}
//# sourceMappingURL=state.js.map