// PICK ELEMENTS FROM DOM
const numbers = document.getElementsByClassName("buttonsgrey")
console.log(numbers);
const resultButton = document.getElementById("equal")
console.log(resultButton);

// ASSIGN WITH FOR CYCLE EACH ELEMENT EVENT LISTENER
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", buttonClicked);
}
function buttonClicked (){
    console.log("Number clicked");
};

// ASSIG "EQUAL" EVENT LISTENER
resultButton.addEventListener("click", function(){
    console.log("Equal clicked");
})