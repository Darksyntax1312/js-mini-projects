let usernum = prompt("Enter your number");

for (let i = 1; i <= usernum; i++) {
    if (i % 2 == 0) {
        console.log(i, "is an even number")
    }
    else {
        console.log(i, "is an odd number")
    }
}
