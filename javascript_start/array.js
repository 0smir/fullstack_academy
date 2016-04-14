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






});