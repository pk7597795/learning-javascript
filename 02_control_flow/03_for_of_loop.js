// numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num)
// }


//-------------------Object are not iterable in for of loop--------------------//

// numbers = {
//     num1: '1',
//     num2: '2',
//     num3: '3',
//     num4: '4',
// }
// for (const [key, value] of numbers) {
//     console.log(key, value)
// }



//-------------------Maps-----------------------------------//
const numbers = new Map()
numbers.set('num1', '1')
numbers.set('num2', '2')
numbers.set('num3', '3')
numbers.set('num4', '4')
numbers.set('num5', '5')

console.log(numbers)

for (const num of numbers) {
    console.log(num)
}
for (const [key, value] of numbers) {
    console.log(key, " :- ", value)
}

