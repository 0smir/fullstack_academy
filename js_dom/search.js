$(document).ready(function(){

	var address = document.getElementsByClassName('address')[0];
	var elements = address.getElementsByTagName('*');
		for(i = 0; i<elements.length; i++){
			console.log(elements[i].id);
		}

	var resultGet = document.getElementsByTagName('div');
	var resultQuery = document.querySelectorAll('div');
	console.log(resultGet);
	console.log(resultQuery);
	console.log(resultGet.length + " " + resultQuery.length);

	// document.body.innerHTML = ' ';
	// console.log(resultGet.length + " " + resultQuery.length);

	console.log(resultGet[3]);
	console.log(resultGet[55]);
	console.log(resultGet.length);


});