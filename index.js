var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = "images/dice" + randomnumber1 + ".png";
var dice2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img1").setAttribute("src",dice1);
document.querySelector(".img2").setAttribute("src",dice2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").textContent = " 🚩Player 1 Won!"
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").textContent = "Player 2 Won! 🚩"
}
else {
    document.querySelector("h1").textContent = "Draw!"
}

