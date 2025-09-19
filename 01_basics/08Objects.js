//Singleton
// Object.create


//String Literals
const mySym = Symbol("123")
// const mySym = "123"
const student = {
    name: "Pankaj",
    [mySym]: "Variable are used as key like this otherwise it will be treated as a string and not as varible and in this case as symbol",
    class: "7th",
    result: false,
    marks: [20, 34, 63],
}

// console.log(student)

student.email = "yadavsukh@gmail.com"
console.log(student)
// console.log(student."name")
// console.log(student.name)
// console.log(student["name"])

// console.log(student[mySym])
// console.log(student["123"])

// Object.freeze(student) //after this no changes will be made to student object
// student.lastName = "Kumar" //now this change will not be implemented in this object
// console.log(student.lastName)
// student.work = function () {
    // console.log(`Student is learning about this thing and he ${this.result}`)
// }
// console.log(student.work)  //this code will give the reference value of this function
// console.log(student.work())
// student.work()
// student["work"]() //student["work"] this will find the refernce point but we have to also initiokiaze

