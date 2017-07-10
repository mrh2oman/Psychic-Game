
var pics = ["assets/images/Psych.jpg", "assets/images/Psych1.jpg","assets/images/Psych2.jpg",
"assets/images/Psych3.jpg", "assets/images/Psych5.jpg", "assets/images/Psych6.jpg"];





window.onload = function psychPic() {
	var randomPic =Math.floor(Math.random()*pics.length);
		document.getElementById("images").src = pics[randomPic];
}


var GetOut = "Get out of the console log you cheater";
console.log(GetOut);

wins = 0;
losses = 0;
livesLeft = 10;
guessedLetters = [];
playerGuess = null;

var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = alphabetLetters[Math.floor(Math.random()*alphabetLetters.length)];

document.onkeydown = function(event) {

var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();





if (guessedLetters.indexOf(playerGuess) < 0 && alphabetLetters.indexOf(playerGuess) >= 0){
	guessedLetters[guessedLetters.length]=playerGuess;
	livesLeft--;
}

if (computerGuess === playerGuess){
	wins++;
	alert("You choose the correct letter. The computer choose " + computerGuess);
	livesLeft = 10;
	guessedLetters = [];
	computerGuess = alphabetLetters[Math.floor(Math.random()*alphabetLetters.length)];
}

if (livesLeft === 0) {
	losses++;
	alert("You did not choose the correct letter. The computer choose " + computerGuess);
	livesLeft = 10;
	guessedLetters =[];
	computerGuess = alphabetLetters[Math.floor(Math.random()*alphabetLetters.length)];
}

var html = "<p><h4> Wins: " + wins + "<p><h4> Losses: " + losses + "</h4></p>" + "<p><h4> Lives Left: " +
livesLeft + "</h4></p>" + "<p><h4> Already Guessed Letters: " + guessedLetters + "</h4></p>";
document.getElementBy
document.querySelector("#game").innerHTML = html;


console.log(computerGuess + playerGuess);
}