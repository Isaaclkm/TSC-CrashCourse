"use strict";
// Basic Types 
let id = 5;
let company = 'Ive 4th gen leaders';
let isFact = true;
let a = 'Damm right!';
a = true;
let ids = [1, 2, 3, 4];
let arr = [1, true, 'Hello'];
//Tuple
let person = [1, 'Dora', true];
//Tuple array 
let members;
members = [
    [18, 'won'],
    [18, 'won'],
    [18, 'won']
];
//Union 
let pid = 22;
pid = '22';
//Enum 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion 
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions 
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const users = {
    id: 1,
    name: 'John'
};
