// console.log("This is working");

const wordToGuess = "banana";

const wordToGuessArray = wordToGuess.split("");
let blankWordArray = [];
console.log(wordToGuessArray);
var wordToGuessDiv = $("#word-to-guess");
let userGuesses = [];


let gameStats = {
    numberOfGuesses: 5,
    numberOfIncorrectGuesses: 0,
    numberOfWins: 0,
    numberOfLosses: 0
};

for(var i = 0; i < wordToGuessArray.length; i++){
    blankWordArray.push("___ ");
    wordToGuessDiv.append(blankWordArray[i]);
}

function displayBlanksOnScreen(){
    wordToGuessDiv.empty();
    for(var i = 0; i < wordToGuessArray.length; i++){
        wordToGuessDiv.append(blankWordArray[i]);
    }

}

function wordIncludesKey(keyUserPressed){
    for(var i = 0; i < wordToGuessArray.length; i++){
        if(keyUserPressed === wordToGuessArray[i]){
            blankWordArray[i] = keyUserPressed;
            displayBlanksOnScreen();
        }
    }
}

function determineWin(){
    if(!blankWordArray.includes("___ ")){
        alert("You did it! You guessed my word!");
        gameStats.numberOfWins++;
        resetGame();
    }
}

function determineLoss(){
    console.log(gameStats);
    if(gameStats.numberOfGuesses === gameStats.numberOfIncorrectGuesses){
        alert("You lost!");
        gameStats.numberOfLosses++;
        resetGame();
    }
}

function resetGame(){
    gameStats.numberOfIncorrectGuesses = 0;
    displayBlanksOnScreen();
    $("#user-guesses").empty();
}

$(document).keyup(function(event) {
    let key = event.key;
    // userGuesses.push(key);
    $("#user-guesses").append(" " + key + " ");
    if(wordToGuessArray.includes(key)){
        wordIncludesKey(key);
        determineWin();
    }else{
        console.log("Something bad will happen here.");
        gameStats.numberOfIncorrectGuesses++;
        alert("You have guessed wrong " + gameStats.numberOfIncorrectGuesses + " times!");
        determineLoss();    
    }
});