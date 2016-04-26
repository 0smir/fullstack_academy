$(document).ready(function(){

	var red = "#f08080";
	var pink = "#ffe4e1";
	var orange = "#ff5a36";

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

	var citiesList = document.getElementById('cities');
	var childThird = citiesList.getElementsByTagName('li')[2];

	var newItem = document.createElement('li')
		newItem.id = 'item5'
		newItem.innerHTML = "Одесса"
		newItem.style.backgroundColor = red;

	citiesList.insertBefore(newItem, childThird);

	var newItem = document.createElement('li')
		newItem.id = 'item5'
		newItem.innerHTML = "Ужгород"
		newItem.style.backgroundColor = pink;

	citiesList.insertBefore(newItem, citiesList.firstChild);

	var newItem = document.createElement('li')
		newItem.id = 'item5'
		newItem.innerHTML = "Полтава"
		newItem.style.backgroundColor = orange;
	citiesList.insertBefore(newItem, citiesList.children[2]);




});