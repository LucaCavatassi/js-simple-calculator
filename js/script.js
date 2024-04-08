// PICK ELEMENTS FROM DOM
// numbers
const numbers = document.getElementsByClassName("buttonsgrey");
// console.log(numbers);

// result
const resultButton = document.getElementById("equal");
// console.log(resultButton);

// screen
let screen = document.getElementById("numberDisplay");
// console.log(screen);

// operators
const operators = document.getElementsByClassName("buttonsgreen")
console.log(operators);

// reset
const reset = document.getElementById("reset")
// console.log(reset);


// ASSIGN WITH FOR CYCLE EACH ELEMENT EVENT LISTENER
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", buttonClicked);
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", operatorsClicked);
}
// ASSIGN "EQUAL" EVENT LISTENER
resultButton.addEventListener("click", equalClicked); 

// ASSIGN "C" EVENT LISTENER
reset.addEventListener("click", resetClicked);