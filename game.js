
var correctAnswer = ["map", "breath", "woman"];
var score = 0

alert('the hypnotoad has stollen your watch and your lunch money!');

var play = function() {


var userAnswer=prompt('What has rivers with no water, forests but no trees and cities with no buildings?');
console.log(userAnswer);

var checkAnswer = function(x) {
	if (userAnswer===correctAnswer[x]) {
	score = score + 1
	alert('congratulations! you earned a point! You now have ' + score + ' points!')
	return(score)
	} else {
		alert('WRONG! THE HYPNOTOAD IS DISPLEASED!');
	}
}	
checkAnswer(0);

userAnswer=prompt('What is light as a feather, but becomes harder to keep the longer you hold it?');
console.log(userAnswer);
checkAnswer(1);

userAnswer=prompt('The last man on earth sits alone in a room. The telephone rings, who is it?');
console.log(userAnswer);
checkAnswer(2);

var evaluate = function(x) {
	if (x>=2) {
		alert('ALAS! I shall return your watch and lunch money and surrender in defeat!');
	} else if (x=1) {
		alert('AH! It seems you got one out of three correct. Take back the lunch money, but I shall keep this watch as a souveneir of my victory!');
	} else if (x=0) {
		alert('YOU FAILED! YOU ARE NOW MY SLAVE!');
	};
};
evaluate(score);
var clear = function(x) {
	x=x*0
};
clear(x);
};