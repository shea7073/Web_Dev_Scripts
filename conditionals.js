let age = prompt("How old are you?");

/*if(age < 18){
	console.log("Sorry you cannot come in");
}

else if(age > 18 && age < 21){
	console.log("You may enter but you cannot drink!");
}

else if(age >= 21){
	console.log("Yes you may enter");
}

else {}*/

if(age < 0){
	console.log("ERROR: YOU'RE LYING");
}

else if(age == 21){
	console.log("Happy Birthday!!");
}

else{}

if(age%2 == 1){
	console.log("Your age is odd!");
}

if(age% Math.sqrt(age) === 0){
	console.log("Perfect Square");
	}