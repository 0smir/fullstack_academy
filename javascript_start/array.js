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



});