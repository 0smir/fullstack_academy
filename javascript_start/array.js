$(document).ready(function(){
	var a = new Array();
	var a = [1, 2, 3, 4];

	a[1] = true;
	console.log(a);

	a[a.length] = 9;

	console.log(a);

	a.push(10);
	console.log(a);
	//console.log(a.length);


	for(i = 0; i < a.length; i++){
		console.log(a[i]);
	};

	function compareNumberic(a, b){
		if(a > b) return 1;
		if(a < b) return -1;
	}

	a.sort(compareNumberic)
	console.log(a);

	//add one more value to array

	
	a.push(11);
	console.log(a.length);
	console.log(a);

	//pop method

	var last = a.pop();
	console.log(last);

	var last = a.pop();
	console.log(last);
	console.log(a.length);

	//shift/unshift method

	var field = [22, 33, 44];

	field.unshift(55);
	console.log(field);
	field.unshift(11);
	console.log(field);
	
	var first = field.shift();
	console.log(first);
	console.log(field);
	field.shift();
	console.log(field);


	//split method

	var name = 'Ira, Mira, Juo, Wuko, Petro';
	var arrName = name.split(',');
	for(var i = 0; i < arrName.length; i++){
		document.write('Mail for: ' + arrName[i] + "<br/>");
	}


	// join method

	var allNames = ["Ira", "Mira", "Juo", "Wuko", "Petro"];
	console.log(allNames);
	var stringOfName = allNames.join(', ');
	document.write("Did you send mail to: " + stringOfName + "? </br>");

	//delete

	delete arrName[2];
	console.log(arrName);


	var arrOfNumber = [2, 4, 33, 87, 6, 9 ,0];

	function sortingMimMax(array){
		document.write("This is array:" + arrOfNumber + "<br/>");
		array.sort(compareNumberic);
		var min = array[0], max = array[array.length - 1];
		console.log(max);

		document.write("Min numder of array: " + min + "; <br/>" + "Max number of array: " + max + ". <br/><br/>");
	}

	sortingMimMax(arrOfNumber);

	arrOfNumber.pop();
	sortingMimMax(arrOfNumber);

});