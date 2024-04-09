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

let firstOperando;
let sum;
// SAVE NUMBER AND APPLY ITS INNERHTML OPERATOR
function operatorsClicked () {
    // console.log(this);
    firstOperando = parseInt(screen.innerHTML);
    console.log(firstOperando, typeof firstOperando);
    screen.innerHTML = this.innerHTML;
    // // salvo operatore cliccato in una variabile
    if (this.innerHTML === "+"){
        operator = "+";
    } else if (this.innerHTML === "-"){
        operator = "-";
    } else if (this.innerHTML === "x"){
        operator = "x";
    } else if (this.innerHTML === "÷"){
        operator = "÷";
    } 
    console.log(operator);
} 

// GIVE RESULT
function equalClicked (){
    // console.log(this);
    let secondOperando = parseInt(screen.innerHTML);
    console.log(secondOperando, typeof secondOperando);

    let result;
    if (operator === "+") {
        result = parseInt(firstOperando + secondOperando)
    } else if (operator === "-") {
        result = parseInt(firstOperando - secondOperando)
    } else if (operator === "x") {
        result = parseInt(firstOperando * secondOperando)
    } else if (operator === "÷") {
        result = parseInt(firstOperando / secondOperando)
    }

    if (operator === "÷" && secondOperando === 0) {
        result = "ERROR"
    }
    screen.innerHTML = result
    console.log(result);
};

// RESET THE SCREEN
function resetClicked (){
    // console.log(this);
    let resetValue = this.innerHTML
    // console.log(resetValue);
    screen.innerHTML = ""
    operator = ""
};
