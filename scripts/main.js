let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = function() {
	let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cappuccino.png") {
      myImage.setAttribute("src","images/cappuccino2.png");
    } else {
      myImage.setAttribute("src","images/cappuccino.png");
    }
}

myButton.onclick = function () {
	setUserName();
}

let storedName = localStorage.getItem("name");
if (!storedName) {
	setUserName()
} else {
	myHeading.textContent = "Cappuccinos are cool, " + storedName;
}

function setUserName() {
	let myName = prompt("Please enter your name.");

	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = "Cappuccinos are cool, " + myName;
	}
}