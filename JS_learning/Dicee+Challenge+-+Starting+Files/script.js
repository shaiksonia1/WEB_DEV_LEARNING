var randomNumber1 = Math.floor(Math.random()*6)+1
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImages = "images/" + randomImage1 



var images = document.querySelectorAll("img")[0].setAttribute("src", randomImages);


var randomNumber2 = Math.floor(Math.random()*6)+1
var randomImages2 = "images/dice" + randomNumber2  + ".png"
var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "😎Player 1 Wins";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🥳Player 2 Wins"
}
else if(randomNumber1 ===randomNumber2){
    document.querySelector("h1").innerHTML = "😐match Draws"
}
else {
    document.querySelector(h1).innerHTML = "something went wrong"
}