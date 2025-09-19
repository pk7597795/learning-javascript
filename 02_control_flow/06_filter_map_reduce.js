books = [
    {
        bookName: "JungleBook",
        releaseYear: 2017,
        price: 200
    },
    {
        bookName: "Pirana's",
        releaseYear: 2019,
        price: 300
    },
    {
        bookName: "Harry Potter",
        releaseYear: 2000,
        price: 400
    },
    {
        bookName: "Mario",
        releaseYear: 1999,
        price: 500
    },
    {
        bookName: "Apes",
        releaseYear: 1980,
        price: 600
    }
]

//filter method is just used to filter and not used to modify anything, if we modify anything it will not return anything
// const filteredBooks = books.filter((bk) => {
//     return bk.releaseYear > 2000
// })
// console.log(filteredBooks)


//map method is used to modify the data
// const updatedBooks = books.map((bk) => {
//     bk.releaseYear += 1000;
//     return bk
// })
// console.log(updatedBooks)

//if multiple methods are applied then it always start from left to right
const totalCost = books.reduce((acc, bk) => {
    return acc + bk.price;
}, 1000)
console.log(totalCost);
