let userbill = prompt("Enter your bill amount");
let tiprc = prompt("Enter the tip percentage");

if (isNaN(userbill) || isNaN(tiprc)) {
    console.log("❌ Invalid! Please enter numbers only");
}
else {
    userbill = Number(userbill);
    tiprc = Number(tiprc);

    if (userbill <= 0) {
        console.log("❌ Invalid! Bill amount must be greater than 0");
    }
    else if (tiprc != 10 && tiprc != 15 && tiprc != 20) {
        console.log("❌ Invalid! Please choose 10, 15, or 20 percent");
    }
    else {
        function newbill(userbill) {
            return (userbill * tiprc) / 100;
        }

        console.log("Your total bill is:", userbill);
        console.log("Tip percentage chosen:", tiprc, "%");
        console.log("Tip amount in dollars:", newbill(userbill), "$");
        console.log("Your total bill including tip is:", userbill + newbill(userbill));
    }
}
