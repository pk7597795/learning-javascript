
// function loginUserMessage(username = "Raman") {
//     if (username === undefined)//!undefined 
//     {
//         console.log("Please enter a username")
//     }
//     return `${username} have logged in`;
// }
// console.log(loginUserMessage("Pankaj"))
// console.log(loginUserMessage())   // here we get undefined


//++++++++++++++++++++++++++++++++++++++++++ Rest Operator

// function getCartValue(...item1)// this is rest operator 
// {
//     return item1;
// }

// console.log(getCartValue(400, 600, 800, 1000));

function getCartValue(newObject)
{
    return newObject.name;
}

const user = {
    name: "Pankaj Kumar",
    value: 300,
}

console.log(getCartValue(user))

// function getCartValue(itemPrices)
// {
//     return itemPrices[1];
// }

// const cartValue = [200, 300, 500, 2000, 500]

// console.log(getCartValue(cartValue))





