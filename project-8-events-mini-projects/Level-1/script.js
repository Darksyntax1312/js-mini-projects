// Level 1 – Input

// 11. Show whatever the user types
// Input: Hello
// Output: Hello

// Solution
let input1 = document.querySelector("#input1");
let para1 = document.querySelector(".para1");
let para3 = document.querySelector(".para3");

input1.addEventListener("input", () => {
    para1.innerText = input1.value;
    para3.innerText = input1.value;
})



// 12. Count characters
// Solution
let input2 = document.querySelector("#input2");
let para2 = document.querySelector(".para2");

input2.addEventListener("input", () => {
    let characterCount = input2.value.length;
    para2.innerText = characterCount;
})



// 13. Clear input when button is clicked
// Solution
let button1 = document.querySelector(".btn1");

button1.onclick = () => {
    input2.value = "";
    para2.innerText = 0;
}



// 14. Copy input text to another paragraph
// Solution
let input3 = document.querySelector("#input3");
let para4 = document.querySelector(".para4");

input3.addEventListener("input", () => {
    para4.innerText = input3.value;
})



// 15. Show "Input is empty" when nothing is typed
// Solution
let input4 = document.querySelector("#input4");
let para5 = document.querySelector(".para5");

input4.addEventListener("input", () => {
    if (input4.value.length == 0) {
        para5.innerText = "Input is empty";
    } else {
        para5.innerText = input4.value;
    }
})
