// PRINT NUMBER IN THE SCREEN
function buttonClicked (){
    console.log(this);
    let buttonNumber = this.innerHTML;
    console.log(buttonNumber);
    screen.innerHTML += this.innerHTML;
};

// GIVE RESULT
function equalClicked (){
    console.log(this);
    let equalValue =  this.innerHTML
    console.log(equalValue);
};

// RESET THE SCREEN
function resetClicked (){
    console.log(this);
    let resetValue =  this.innerHTML
    console.log(resetValue);
    screen.innerHTML = ""
};

// SAVE NUMBER AND APPLY ITS INNERHTML OPERATOR
function operatorsClicked () {
    console.log(this);
    let firstOperando = screen.innerHTML 
}