function loveCalculator(){
    var gfName =prompt("enter gf name")
    var bfName= prompt("enter bf name")
    var calculator = Math.random()
    calculator = calculator *100
    calculator  = Math.floor(calculator)+1
    console.log(calculator)

    if (calculator >70){
        alert("your love score is" + calculator+ "%" + "you love each other you are made in heaven couple.")

    }
    else{
        alert("your love score is " + calculator+ "%" + "you have to check your love with your significant")
    }

    

    
}
console.log(loveCalculator());