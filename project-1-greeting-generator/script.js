// PROJECT 1: GREETING GENERATOR

let username = prompt("Enter your name");
let time = 19;

if (time < 12) {
    console.log("Good Morning, " + username + "!");
} else if (time <= 18) {
    console.log("Good Afternoon, " + username + "!");
} else if (time <= 19) {
    console.log("Good Evening, " + username + "!");
} else if (time <= 24) {
    console.log("Good Night, " + username + "!");
} else {
    console.log("Error: Invalid time format");
}
