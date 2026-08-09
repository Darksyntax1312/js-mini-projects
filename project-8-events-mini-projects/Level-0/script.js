// Events level 0 questions

// 1. Click button → Change heading text

// Solution
let heading1 = document.querySelector(".heading");
console.log(heading1);

let button1 = document.querySelector(".btn1");
button1.onclick = () => {
    heading1.style.color = "Blue";
    heading1.innerHTML = "<i>This is the changed text when i clicked the button.</i>";
}



// 2. Click button → Change paragraph color

// Solution
let para1 = document.querySelector(".para");
console.log(para1.innerText);

let button2 = document.querySelector(".btn2");

button2.onclick = () => {
    para1.style.color = "red";
}



// 3. Click button → Increase a number by 1

// Solution
let number = 0;

let newdiv1 = document.createElement("div");
newdiv1.innerText = number;
button2.after(newdiv1);

let button3 = document.querySelector(".btn3");

button3.onclick = () => {
    newdiv1.innerText = ++number;
}



// 4. Click button → Decrease a number by 1

// Solution
let button4 = document.querySelector(".btn4");

button4.onclick = () => {
    newdiv1.innerText = --number;
}



// 5. Click button → Reset number to 0

// Solution
let button5 = document.querySelector(".btn5");

button5.onclick = () => {
    newdiv1.innerText = 0;
    number = 0;
}



// 6. Click button → Hide a paragraph

// Solution
let para2 = document.querySelector(".para-2");
console.log(para2.innerText);

let button6 = document.querySelector(".btn6");

button6.onclick = () => {
    para2.style.display = "none";
}



// 7. Click button → Show a paragraph

// Solution
let button7 = document.querySelector(".btn7");

button7.onclick = () => {
    para2.style.display = "block";
}



// 8. Click button → Toggle paragraph visibility

// Solution
let visibility = "appear";
let newpara2 = document.querySelector(".para-3");
let button8 = document.querySelector(".btn8");

button8.onclick = () => {
    if (visibility === "appear") {
        newpara2.style.display = "none";
        visibility = "hidden";
    } else if (visibility === "hidden") {
        newpara2.style.display = "block";
        visibility = "appear";
    }
}



// 9. Click button → Change image

// Solution
let image = document.querySelector(".image");
console.log(image.src);

let button9 = document.querySelector(".btn9");

button9.onclick = () => {
    image.src = "Assets/intro-img_2.png";
}



// 10. Click button → Change page background color

// Solution
let button10 = document.querySelector(".btn10");
button10.onclick = () => {
    document.body.style.backgroundColor = "black";
}



// 11. Self made question: Making a switch to go back to light mode

// Solution
let button11 = document.querySelector(".btn11");
button11.onclick = () => {
    document.body.style.backgroundColor = "white";
}
