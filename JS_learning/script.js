var name = prompt("what is your name?");
var firstChar = name.slice(0,1);
var upperCase = firstChar.toUpperCase();
var restName = name.slice(1,name.length);
restName = restName.toLowerCase();
var captiliazed = (upperCase + restName);
alert("Hello " + captiliazed)


// dogAge to humanAge calculation

var dogAge = prompt("enter your dog age");
var humanAge = ((dogAge - 2) * 4 )+21
alert(humanAge)

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    var numberOfBottles = Math.floor(money/1.5)
    console.log(numberOfBottles + "bottles of milk")   
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  getMilk(5);

//   if 1 one bottle is 1.5rs
//   and i gave 5rs and 5/1.5 = 3 bottles

