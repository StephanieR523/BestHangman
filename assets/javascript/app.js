var names = ["one", "two", "three"];
var lettersGuessed = [];
var currentGuess = "";
var maxGuesses = 6;
var won = 0;
var loss = 0;
var index = 0;
var stateOfHangman = 0; 
//state of hangman tracking how many letters incorrectly guess, if 6 hangman is built
var hiddenName; 
window.onload = function(event){
    initialize ();  
}




function initialize(){
    var i;
    hiddenName = ""
        for (i = 0; i < names[index].length; i++) {
            hiddenName = hiddenName + "_";
        }
document.getElementById("NameGuess").innerHTML = hiddenName;
}

document.onkeyup = function (event) {

    currentGuess = event.key;
    
 //   alert(currentGuess)
    console.log(names[index].includes(currentGuess))
 
    var i;
   // hiddenName = ""
        for (i = 0; i < names[index].length; i++) {
            
            
            if (names[index].includes(currentGuess)){

                var currentName = names[index];
                for (var indexOfName = 0; indexOfName < currentName.length; indexOfName++){
                    if (currentName[indexOfName] === currentGuess){
                        hiddenName[indexOfName] = currentGuess; 
                    }
                }
            
                
              //  alert(names[index].indexOf(currentGuess))
           
            }
            //else {
              //  hiddenName = hiddenName + " _ ";
           // }     
        }
        document.getElementById("NameGuess").innerHTML = hiddenName;

  //  if (names[index].includes(currentGuess)) {
    //    alert(names[index].indexOf(currentGuess))
    //}

    //need to loop through each character in the name beingguessed
        //set hiddden name to = hiddenName + "_"
        


    
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

