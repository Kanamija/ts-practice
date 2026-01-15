"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['Max', 'Anna'];
let store = {};
store.name = 'Max';
store.isInstructor = true;
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
