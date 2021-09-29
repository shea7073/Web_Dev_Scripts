var button = document.querySelector("button");
var body = document.querySelector("body");

var isPink = false;

button.addEventListener("click", function(){ 
		if(isPink == false){
			body.style.background = "pink";
			isPink = true;
		}
		else{ 
			body.style.background = "white";
			isPink = false;
			}
		
		})