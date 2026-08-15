//  29 – Show alert with name

// Solution

let greetBtn = document.querySelector(".btn-greet");

greetBtn.onclick = () => {
    alert("Hello, John! 👋");
}


// 30 – Enable/Disable button

// Solution

let toggleBtn = document.querySelector(".btn-toggle");
let submitBtn = document.querySelector(".btn-submit");

submitBtn.disabled = true;

toggleBtn.onclick = () => {
    if (submitBtn.disabled === true) {
        submitBtn.disabled = false;
        toggleBtn.innerText = "🔒 Disable";
    } else {
        submitBtn.disabled = true;
        toggleBtn.innerText = "🔓 Enable";
    }
}
