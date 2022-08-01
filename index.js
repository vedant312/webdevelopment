var randomNumber1 = Math.ceil(Math.random()*6);
switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src" , "images/dice1.png")
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src" , "images/dice2.png")
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src" , "images/dice3.png")
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src" , "images/dice4.png")
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src" , "images/dice5.png")
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src" , "images/dice6.png")
        break;
    default:
        break;
}
//document.querySelector(".img1").setAttribute("src" , "images/dice2.png")
var randomNumber2 = Math.ceil(Math.random()*6);
switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src" , "images/dice1.png")
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src" , "images/dice2.png")
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src" , "images/dice3.png")
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src" , "images/dice4.png")
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src" , "images/dice5.png")
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src" , "images/dice6.png")
        break;
    default:
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1 WINS";
} 
else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player2 WINS";
}
else{
    document.querySelector("h1").textContent = "DRAW";
}
