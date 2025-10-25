let stringArr = ['one', 'hey', 'Anatoliy']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedDate = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Anatoliy', 42, true]

let mixed = ['Anatoliy', 1, false]

myTuple[1] = 44

// Objects
let myObj: object

myObj = []

console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Anatoliy',
    prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name?: string
    active: boolean
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
    // name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
}

const greetGuitarist = (guirist: Guitarist) => {
    if (guirist.name) {
        return `Hello ${guirist.name.toUpperCase()}!`
    }
    return `Hello!`
}

console.log(greetGuitarist(jp))

// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
