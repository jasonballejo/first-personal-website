/*
const h1 = document.createElement("h1");
h1.textContent = "Join my journey!";

document.querySelector("body").appendChild(h1); 
*/

function appearNormal() {
    document.getElementById('profile').src="Test.jpeg";
}

function description() {
    document.getElementById('profile').src="html-5.png";
}

document.getElementById('profile').addEventListener('mouseout', appearNormal);
document.getElementById('profile').addEventListener('mouseover', description);