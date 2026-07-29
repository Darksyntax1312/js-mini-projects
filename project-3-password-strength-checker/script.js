let userpass = prompt("Enter your password")


if (userpass.length < 6) {
       alert("❌ Password too short! Must be at least 6 characters")
}
else if (userpass == "Password" || userpass == "123456" || userpass == "password123" || userpass == "admin" || userpass == "letmein" || userpass == "PASSWORD") {
       alert("❌ Password is too common! Choose something more unique")
}
else {
       alert("✅ Password accepted! Strong enough")
}
