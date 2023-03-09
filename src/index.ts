// Basic Types 
let id: number = 5
let company: string = 'Ive 4th gen leaders'
let isFact: boolean = true
let a: any = 'Damm right!'

a = true

let ids: number[] = [1, 2, 3, 4]
let arr: any[] =[1, true, 'Hello']

//Tuple
let person: [number, string, boolean] = [1, 'Dora', true] 

//Tuple array 
let members: [number, string][]

members = [
    [18, 'won'],
    [18, 'won'],
    [18, 'won']
]

//Union 
let pid: string | number = 22

pid = '22'


//Enum 
enum Direction1 {
    Up, 
    Down, 
    Left,
    right
}

// Objects 
type User = {
    id: number, 
    name: string
}
const user: User ={
    id: 1, 
    name: 'John'
}

//Type Assertion 
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions 
function addNum(x: number, y: number): number{
    return x + y
}

function log(message: string | number):void {
    console.log(message)
}

//Interfaces 
interface Userinterface {
    readonly id: number, 
    name: string
    age?: number
}
const users: Userinterface ={
    id: 1, 
    name: 'John'
}

interface MatFunc{
    (x: number, y: number): number 
}

