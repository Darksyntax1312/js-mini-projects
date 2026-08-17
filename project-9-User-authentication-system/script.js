function checkPassword(username, password) {

    return new Promise((resolve, reject) => {
        console.log("🔐 Logging in...");

    setTimeout(()=> {
        if (username === "admin123" && password === "12345") {
            resolve({ user: "Admin", token: "abc123" })
        }
        else {
            reject("Invalid username or password ❌")
        }
    },5000);
    })
}

checkPassword("admin123","12345")
.then((login)=>{
console.log( "✅ Welcome " + login.user);
console.log("🔑 Token:", login.token);
})
.catch((failed)=>{
    console.log(failed);
})
