"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    cb('Job done!');
}
performJob(log);
let user = {
    name: 'Max',
    age: 39,
    greet(msg) {
        console.log(msg);
        return this.name;
    }
};
console.log(user);
