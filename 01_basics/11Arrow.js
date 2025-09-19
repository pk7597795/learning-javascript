const user = {
    username: "Pankaj Kumar",
    age: 30,
    // greetings(){
    //     console.log(this);
    // }
    // greetings : function(){
    //     console.log(this.username);
    // }
    greetings : function(){
        console.log(this);
    }
}

user.greetings();
// user.username = "Saurav"
// user.greetings();

// console.log(this)// global object now is an empty object {}, but in browser it is Window

// function hero() {
//     let username = "Pankaj"
//     console.log(this.username); //this function se andr kaam nhi karega sirf object mein kaam krta h
// }
// hero()

// const hero = function() {
//     let username = "Pankaj"
//     console.log(this.username); //this function se andr kaam nhi karega sirf object mein kaam krta h
// }
// hero()

// const hero = () => {
//     let username = "Pankaj"
//     console.log(this.username); //this function se andr kaam nhi karega sirf object mein kaam krta h
// }
// hero()

// // const sum = (num1, num2) => (num1 + num2);
// const sum = (num1, num2) => ({ username: "Hitesh" }); // arrow functions sirf () ko consider krta h, aur {} use karenge toh return use karo
// console.log(sum(2, 4));



