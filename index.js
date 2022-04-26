// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    targetText()
    console.log("The DOM has loaded");
});

function targetText() {
    document.getElementById('text');
    text.textContent = "This is really cool!"
}
