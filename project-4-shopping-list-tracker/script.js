let items = [];
let lastfruit;

while (true) {
    let user = prompt("Add/View/Remove/Exit:");
    if (user == "add" || user == "Add") {
        items.push(prompt("Enter your item"));
        console.log(items);
    }
    else if (user == "view" || user == "View") {
        console.log("Your list:", items);
    }
    else if (user == "remove" || user == "Remove") {
        lastfruit = items.pop();
        console.log("removed item :- ", lastfruit);
        console.log("New list", items);
    }
    else if (user == "exit" || user == "Exit") {
        break
    }
}
