// PRINT NUMBER IN THE SCREEN
function buttonClicked (){
    let buttonNumber = this.innerHTML;
    if (screen.innerHTML === "0" || screen.innerHTML === "+" || screen.innerHTML === "-" || screen.innerHTML === "x" || screen.innerHTML === "÷"){
        screen.innerHTML = "";
    }
    // console.log(this);
    // console.log(buttonNumber);
    screen.innerHTML += buttonNumber;
};

// SAVE NUMBER AND APPLY ITS INNERHTML OPERATOR
function operatorsClicked () {
    // console.log(this);
    let firstOperando = parseInt(screen.innerHTML);
    console.log(firstOperando, typeof firstOperando);
    screen.innerHTML = this.innerHTML;

    // salvo operatore cliccato in una variabile
    let operator
    if (this.innerHTML === "+"){
        operator = "+";
    } else if (this.innerHTML === "-"){
        operator = "-";
    } else if (this.innerHTML === "x"){
        operator = "x";
    } else if (this.innerHTML === "÷"){
        operator = "÷";
    } 
    
} 

// GIVE RESULT
function equalClicked (){
    // console.log(this);
    let secondOperando = parseInt(screen.innerHTML);
    console.log(secondOperando, typeof secondOperando);

    let result;
    if (operator = "+") {
        result = firstOperando + secondOperando
    } else if (operator = "-") {
        result = firstOperando - secondOperando
    } else if (operator = "x") {
        result = firstOperando * secondOperando
    } else if (operator = "÷") {
        result = firstOperando / secondOperando
    }

    screen.innerHTML = result
};

// RESET THE SCREEN
function resetClicked (){
    // console.log(this);
    let resetValue =  this.innerHTML
    console.log(resetValue);
    screen.innerHTML = ""
};



// Se l'inner html di screen è + allora firstOperando + secondOperando