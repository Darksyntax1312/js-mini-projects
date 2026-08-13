//  Level 4 – Two Concepts Together

// 22. Button changes its own text
// Before: Click Me
// After: Clicked!

// 23. Button changes its own color

// Solution of problem 22 & 23
let button1 = document.querySelector(".btn1");

button1.onclick = () => {
    button1.innerText = "Clicked ✅";
    button1.style.color = "green";
    button1.style.backgroundColor = "beige";
}



// 24. Click button → Add one list item
// 25. Click button → Remove last list item

// Solution of question 24 and 25
let newlist = document.querySelector(".list");
let button2 = document.querySelector(".btn2");

button2.onclick = () => {
    let lists = document.createElement("li");
    lists.innerText = "New item";
    newlist.append(lists);
}

let button3 = document.querySelector(".btn3");

button3.onclick = () => {
    let removeitem = newlist.lastElementChild;
    if (removeitem) {
        removeitem.remove();
    } else {
        alert("Nothing to remove!");
    }
}



// 26. Toggle Light/Dark Mode

// Solution
let mode = "Light";
let button4 = document.querySelector(".btn4");

button4.onclick = () => {
    if (mode === "Light") {
        document.body.style.backgroundColor = "black";
        mode = "Dark";
        button4.innerText = "Light Mode";
    } else if (mode === "Dark") {
        document.body.style.backgroundColor = "white";
        mode = "Light";
        button4.innerText = "Dark Mode";
    }
}



// 27. Show/Hide Password

// Solution
let visibility = "Showing";
let input1 = document.querySelector("#password");
let button5 = document.querySelector(".btn5");

button5.onclick = () => {
    if (visibility === "Showing") {
        input1.type = "password";
        visibility = "Hidden";
        button5.innerText = "Show";
    } else if (visibility === "Hidden") {
        input1.type = "text";
        visibility = "Showing";
        button5.innerText = "Hide";
    }
}



// 28. Change font size with two buttons

// Solution
let height = 16;
let div1 = document.querySelector(".div1");
let button6 = document.querySelector(".btn6");
let button7 = document.querySelector(".btn7");

button6.onclick = () => {
    height = height + 10;
    div1.style.fontSize = height + "px";
}

button7.onclick = () => {
    if (height > 10) {
        height = height - 10;
        div1.style.fontSize = height + "px";
    } else {
        alert("Font size cannot be smaller!");
    }
}
