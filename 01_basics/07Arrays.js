const friends = new Array('Saurav', 'Rohit', 'Madhu', 'Shreyas', 'Jayesh', 'Harsh');
// console.log(friends)
const schoolFriends = ['Puneet', 'Tanuj', 'Himanshu']
// friends.push(schoolFriends)
console.log(friends)
// const allFriends = friends.concat(schoolFriends)
const allFriends = [...friends, ...schoolFriends]
// console.log(allFriends)
// console.log(allFriends[2])

// allFriends.unshift("Vivek") // add elements in the starting of array
// allFriends.shift() // removes element from the start
// // console.log(allFriends)

console.log(allFriends.includes("Rohit"))
// console.log(allFriends.indexOf("Rohit"))
// const sliceArray = allFriends.slice(2, 6) // seperate element starting from 2 to 6(not included)
// // console.log(allFriends)
// console.log(sliceArray)
// const spliceArray = allFriends.splice(2, 6) // seperate 6 elements starting from 2 index
// console.log(spliceArray)

// const friendsFromDiffArea = ['Saurav', 'Rohit', 'Madhu', ['Shreyas', 'Jayesh'], [['Puneet', 'Tanuj']]]
// console.log(friendsFromDiffArea.flat(2))
// console.log(Array.isArray(allFriends))
// console.log(Array.from("Pankaj"))
console.log(Array.from({ name: "Pankaj" }))
// console.log(Array.of('Pankaj', 'Rohit', 'Shreyas'))
// console.log(Array.from({ 0: "a", 1: "b", length: 2 }))







