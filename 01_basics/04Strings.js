let myEmail = "pankaj-zb.kumar@ubs.com"
let myAge = 22
let myName = "Pankaj"
// console.log(`My name is ${myName} and I am ${myAge} years old. I work in a company and my Email id is ${myEmail} `)

let myBio = `My name is ${myName} and I am ${myAge} years old. I work in a company and my Email id is ${myEmail} `

// console.log(myBio.__proto__)
// console.log(myBio.length)
// console.log(myBio.charAt(3));
// console.log(myBio.indexOf('aman'));


// function getAllIndexOf(str, pattern) {
//     indexes = []
//     let index = str.indexOf(pattern)
//     while (index != -1) {
//         indexes.push(index)
//         index = str.indexOf(pattern, index+1)
//     }
//     return indexes
// }

// console.log(getAllIndexOf(myBio, "y"))

console.log(myBio.slice(4, 9))
console.log(myBio.slice(-4, -1))

// console.log(myBio.substring(0, 89))

// console.log(myBio.toUpperCase())
// console.log(myBio.replaceAll('y', 'Y'))

// console.log(myName.trim())
// console.log(myBio.split(""))
// console.log(myBio.search("Pankaj"))
// console.log(myBio.indexOf("Pankaj"))



