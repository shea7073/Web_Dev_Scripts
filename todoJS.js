window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var note = ["hello"];


	var answer = prompt("What would you like to do?");

	while(answer !== "quit"){

		if(answer === "new"){
  		var addition = prompt("what would you like to add?");
  		note.push(addition);
  				}

  		else if(answer === "list"){
  			for(i = 0; i < note.length; i++){
  				console.log(i + ": " + note[i]);
  				}
  			}

  		else if(answer === "delete"){
  			let choice = prompt("which to delete (index)?")
  			// if(choice == "first"){
  			// 	note.shift();
  			// }

  			// else if(choice === "last"){
  			// 	note.pop();
  			// }

  			note.splice(choice,1);
  		}

  		else{
  			alert("BAD INPUT");
 					 }

 		var answer = prompt("What would you like to do?");			 
	}

	console.log("Goodbye");

	///splice method can be used to remove a specific number of elements in an array
  
}, 500);