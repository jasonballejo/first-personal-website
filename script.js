function appearNormal() {
    document.getElementById('profile').src="Test.jpeg";
}

function description() {
    document.getElementById('profile').src="html-5.png";
}

document.getElementById('profile').addEventListener('mouseout', appearNormal);
document.getElementById('profile').addEventListener('mouseover', description);