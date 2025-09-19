// numbers = ['one', 'two', 'three', 'four', 'five']
// for (const num in numbers) {
//     console.log(`${num} : ${numbers[num]}`)
// }


//-------------------Object are iterable in for in loop--------------------//

// numbers = {
//     num1: '1',
//     num2: '2',
//     num3: '3',
//     num4: '4',
// }
// for (const key in numbers) {
//     // console.log(key)
//     console.log(numbers[key])
// }



//-------------------for in loop does not work on Maps-----------------------------------//
//--------------------because maps are not iterable------------------------//
// const numbers = new Map()
// numbers.set('num1', '1')
// numbers.set('num2', '2')
// numbers.set('num3', '3')
// numbers.set('num4', '4')
// numbers.set('num5', '5')


// // for (const num in numbers) {
// //     console.log(num)
// // }
// for (const [key, value] in numbers) {
//     console.log(key, " :- ", value)
// }