const Players = new Object()
const Members = {}

// console.log(Players)
// console.log(Members)

const family = {
    fullName: {
        firstName: "Pankaj",
        lastName: "Kumar"
    },
    age: 22,
} 
family.house = "Swarg";

// console.log(family.fullName?.nickname)
// console.log(family.fullName.firstName)

const friends = {
    fullName2: {
        firstName: "Tanuj",
        lastName: "Sangwan"
    },
    age2: 23,
} 

// const known = Object.assign({}, family, friends) //if same keys are found then it will keep on updating the values.
// console.log(known)

const known = { ...family, ...friends }
// console.log(known)

const data = [
    {
        fullName2: {
            firstName: "Tanuj",
            lastName: "Sangwan"
        },
        age2: 23,
    },
    {
        fullName2: {
            firstName: "Tanuj",
            lastName: "Sangwan"
        },
        age2: 24,
    },
    {
        fullName2: {
            firstName: "Tanuj",
            lastName: "Sangwan"
        },
        age2: 25,
    },
]
// console.log(data[0].age2)

// console.log(Object.keys(known))
// console.log(Object.values(known))
console.log(Object.entries(known))
console.log(known.hasOwnProperty('age'))



//++++++++++++++++++++++++++++++++++++

const movie = {
    name: "Gajni",
    releaseDate: "01/09/2004",
    director: "Rohit"
}

const { name: MovieName } = movie //destructuring this and MovieName is nickname that we want to give
console.log(MovieName)
console.log(movie.name);


//The below are the json formats, API is like another person that will do our work
// {
//     name: "Gajni",
//     releaseDate: "01/09/2004",
//     director: "Rohit"
// }

// [
//     {},
//     {},
//     {}
// ]

    
