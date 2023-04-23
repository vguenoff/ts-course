let stringArray = ['one', 'hey', 'dave']
let guitars = ['strat', 'les paul', 5150]
let mixedData = ['EVH', 1984, true]

stringArray[0] = '42'
// @ts-expect-error
stringArray.push(42)

guitars[0] = 1984
guitars.unshift('Jim')

// stringArray = guitars //ts-expect-error
guitars = stringArray

let test = []
let bands: string[] = []
bands.push('van halen')
console.log(bands)

// Tuple
let myTuple: [string, number, boolean] = ['dave', 42, true]
// mixed is union type
let mixed = ['jhon', 1, false]
// mixed = myTuple
// myTuple = mixed
myTuple[1] = 3

// Objects
let myObject: object
myObject = []
console.log(typeof myObject)

myObject = bands
console.log(myObject)

const exampleObject = {
  prop1: 'Dave',
  prop2: true,
}

// exampleObject.prop1 = false // error

type Guitarist = {
  name?: string
  active?: boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5150, 'OU812'],
}

let jp: Guitarist = {
  name: 'Jimmy',
  albums: ['I', 'II', 'IV'],
}

function greetGuitarist(g: Guitarist) {
  if (g.name) {
    return `Hello ${g.name.toUpperCase()}`
  }

  return 'Hello!'
}

console.log(greetGuitarist(jp))

// Enums
enum Grades {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grades.D)
