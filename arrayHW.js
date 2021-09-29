function printReverse(){
	let array1 = [1,2,3,4];
	let newArray = [];
	let length = array1.length;
	for(i = length-1; i > -1; i--){
		newArray.push(array1[i]);
	}

	return newArray;
}

function isUniform(){
	let string1 = [1,1,1,1,1];
	let string2 = [2,1,4,2,2];
	let string3 = [55,55,55,55];

	let choice = prompt("which string do we test?");

	stringLength = string3.length;

	sameOrNot = true;

	for(j = 0; j<stringLength-1; j++){
		if(string3[0] != string3[j+1]){
			sameOrNot = false;
			break;
		
		}
	}
	return sameOrNot;
}


function sumArray(){
	let sumArray1 = [1,2,3];
	let sumArray2 = [10,3,10,4];
	let sumArray3 = [-5,100];

	let count = 0;

	for(i = 0; i<sumArray1.length; i++){
		count+= sumArray1[i];
	}
return count;
}



function max(){
	set1 = [1,2,3];
	set2 = [10,3,10,4];
	set3 = [-5,100];

	let high = set3[0];

	for(i = 0; i < set3.length; i++){
		if(set3[i]>high){
			high = set3[i];
		}
	}
	return high;

}