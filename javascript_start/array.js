$(document).ready(function(){
	var a = new Array();
	var a = [1, 2, 3, 4];

	a[1] = true;
	console.log(a);

	a[a.length] = 9;

	console.log(a);

	a.push(10);
	console.log(a);

	a[11] = 11;
	console.log(a.length);


});