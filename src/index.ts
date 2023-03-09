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

interface PersonInterface { 
    id: number
    name: string 
    register(): string
}

const add: MatFunc = (x: number, y: number): number => x + y
const sub: MatFunc = (x: number, y: number): number => x - y


//Classes

class Person implements Person{
    id: number 
    name: String

    constructor(id: number, name: string){
        this.id = id
        this.name = name 
    }

    register( ){
        return `${this.name}`
    }
}

const brad = new Person(1, 'Brad')


class Employee extends Person{ 
    position: string


    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', "Developper")

console.log(emp.register)

//Generics 

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

numArray.push('hello')