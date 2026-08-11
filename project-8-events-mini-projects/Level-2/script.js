// 🟠 Level 2 – Mouse
// 16. Hover over a box → Change its color

// Solution

let div1 = document.querySelector(".box");
console.log(div1);

div1.onmouseover = () => {
    div1.style.backgroundColor = "blue";
}
div1.onmouseout = () => {
    div1.style.backgroundColor = "white";
}

// 17. Hover over an image → Add a border

// Solution

let image = document.querySelector("img");
image.style.paddingTop = "20px";

image.onmouseover = () => {
    image.style.border = "2px solid red";
}

image.onmouseout = () => {
    image.style.border = "";
}
// 18. Move mouse → Show X and Y coordinates

// Solution

let div2 = document.querySelector(".mouse-x");
div2.innerText = "0";
div2.style.fontSize = "30px"; 

let div3 = document.querySelector(".mouse-y");
div3.innerText = "0";
div3.style.fontSize = "30px"

document.addEventListener("mousemove" , (event) =>{
    div2.innerText = `Controller X is moving :- ${event.clientX}`;
    div3.innerText = `Controller Y is moving :- ${event.clientY}`;
})
