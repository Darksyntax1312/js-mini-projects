let usermarks = prompt("Enter your result");

if (usermarks < 0) {
    console.log("❌ Invalid! Marks cannot be negative");
}
else if (usermarks > 100) {
    console.log("❌ Invalid! Marks cannot exceed 100");
}
else if (usermarks <= 100 && usermarks >= 90) {
    console.log("Your grade is A+");
    console.log("🌟 Excellent! Outstanding performance!");
}
else if (usermarks < 90 && usermarks >= 80) {
    console.log("Your grade is A");
    console.log("🎉 Great job! Very good performance!");
}
else if (usermarks < 80 && usermarks >= 70) {
    console.log("Your grade is B");
    console.log("👍 Good work! Keep it up!");
}
else if (usermarks < 70 && usermarks >= 60) {
    console.log("Your grade is C");
    console.log("📖 Fair. Need more effort!");
}
else if (usermarks < 60 && usermarks >= 50) {
    console.log("Your grade is D");
    console.log("⚠️ Below average. Work harder!");
}
else if (usermarks < 50 && usermarks >= 0) {
    console.log("Your grade is F");
    console.log("❌ Fail. Need improvement!");
}
