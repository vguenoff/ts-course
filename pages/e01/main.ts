// implicit defining a dtring
let myName = 'Vasil'
// explicit defining a dtring; ts is no longer inferring
let myName2: string = 'Vasil'
// @ts-expect-error
myName2 = 42

let meaningOfLife: number
let isLoading: boolean
let album: string | number

meaningOfLife = 42
isLoading = true
album = 5150

// return type is inferred
const sum = (a: number, b: number) => {
  return a + b
}

let postId: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g
