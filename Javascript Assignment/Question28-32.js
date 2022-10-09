

// Question no 28
// var age = 55;
// if (age < 2) {
//     console.log("Person is a baby");
// }
// if (age < 2 && age < 4) {
//     console.log("Person is a toddler");
// } if (age > 4 && age < 13) {
//     console.log("Person is a kid");
// }
// if (age > 13 && age < 20) {
//     console.log("Person is a teenager");
// }
// if (age > 20 && age < 65) {
//     console.log("Person is a adult");
// }

// Question no 29
// var fruits = ["Apple", "Mango", "Grapes"];
// for (var i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Apple") {
//         console.log("I like Apple")
//     }
//     if (fruits[i] === "Banana") {
//         console.log("I like Banana")
//     }
//     if (fruits[i] === "Lichi") {
//         console.log("I like Lichi")
//     }
//     if (fruits[i] === "Mango") {
//         console.log("I like Mango")
//     }
//     if (fruits[i] === "Grapes") {
//         console.log("I like Grapes")
//     }
// }

// Question 30
// var greeting = ["Manaheel", "Muzammil", "Admin", "Adina", "Tahira"]
// for (var i = 0; i < greeting.length; i++) {
//     if (greeting[i] === "Admin") {
//         console.log("Hello Admin, would you like to see a status report")
//     }
//     else {
//         console.log("Hello  " + greeting[i] + "  ,thank you for logging in again")
//     }
// }

// Question no 31
// var greeting = [];
// if (greeting.length === 0) {
//     console.log("We need to find some users!")
// }
// else {
//     for (var i = 0; i < greeting.length; i++) {
//         if (greeting[i] === "Admin") {
//             console.log("Hello Admin, would you like to see a status report")
//         }
//     }
// }

// QUESTION NO 32
// var current_users = ["Manaheel", "Noorain", "Muzammil", "Sehar"];
// var new_users = ["Muzammil", "Sehar", "Tahira", "Komal"];
// for (var i = 0; i < new_users.length; i++) {
//     for (var j = 0; j < current_users.length; j++) {
//         if (current_users[j] === new_users[i]) {
//             console.log("username has already been used")
//         }
//         else {
//             console.log("username is available")
//         }
//     }
// }