// 🔵 Level 3 – Keyboard

// 19. Show which key was pressed
// 20. Press Enter → Show "Submitted"
// 21. Press Escape → Hide a message

// Solution

let div1 = document.querySelector(".pressed");

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        div1.innerText = "Submitted";
        console.log("Your content is submitted successfully ✅");
    } else if (event.key === "Escape") {
        div1.innerText = "Message hidden";
    } else {
        div1.innerText = event.key;
    }
})
