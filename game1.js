alert("HELLO");

//secret #

let secret = 69;

let guess = prompt("Guess a number!");

alert(guess);

guess = Number(guess);

if(guess === secret){
	alert("Good Job!");
}

else if(guess > secret){
	alert('Too High');
}

else{
	alert("Too Low");
}