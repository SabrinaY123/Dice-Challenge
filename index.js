var randomNumber1 = 6;


function generateRandomNumber() {
    randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1*6) + 1;

    if (randomNumber1 === 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 2 wins";
    }
    
    if (randomNumber1 === 2) {
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
    
    if (randomNumber1 === 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 2 wins";
    }
    
    if (randomNumber1 === 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
    
    if (randomNumber1 === 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 2 wins";
    }
    
    if (randomNumber1 === 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png")
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
}


generateRandomNumber();