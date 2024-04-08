// PRINT NUMBER IN THE SCREEN
function buttonClicked (){
    let buttonNumber = this.innerHTML;
    if (screen.innerHTML === "0" || screen.innerHTML === "+" || screen.innerHTML === "-" || screen.innerHTML === "×" || screen.innerHTML === "÷"){
        screen.innerHTML = "";
    }
    // console.log(this);
    // console.log(buttonNumber);
    screen.innerHTML += buttonNumber;
};

// GIVE RESULT
function equalClicked (){
    // console.log(this);
    let equalValue =  this.innerHTML
    console.log(equalValue);
};

// RESET THE SCREEN
function resetClicked (){
    // console.log(this);
    let resetValue =  this.innerHTML
    console.log(resetValue);
    screen.innerHTML = ""
};

// SAVE NUMBER AND APPLY ITS INNERHTML OPERATOR
function operatorsClicked () {
    // console.log(this);
    let firstOperando = parseInt(screen.innerHTML);
    console.log(firstOperando);
    screen.innerHTML = this.innerHTML;
}

// Se l'inner html di screen è + allora firstOperando + secondOperando