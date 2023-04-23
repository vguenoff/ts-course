// implicit defining a dtring
let myName = 'Vasil'
// explicit defining a dtring; ts is no longer inferring
let myName2: string = 'Vasil'
// @ts-expect-error
myName2 = 42
