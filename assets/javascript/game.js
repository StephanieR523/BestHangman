var names = ["one", "two", "three"];
var lettersGuessed = [];
var currentGuess = "";
var maxGuesses = 6;
var won = 0;
var loss = 0;
var index = 0;

document.onkeyup = function (event) {

    currentGuess = event.key;
    alert(currentGuess)
    console.log(names[index].includes(currentGuess))

    if (names[index].includes(currentGuess)) {
        alert(names[index].indexOf(currentGuess))
    }

    
    // else {

    // }

    

    // }
    // for (i = 0; i < names[index].length; i++) {
    //     if (names[index].includes(currentGuess)) {
    //         alert("hit");
    //     }
    // }

}




// var letterMatch = letterMatch;
// var letterMismatch = letterMismatch;

