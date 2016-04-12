$(document).ready(function(){
	
	//example of JSON format
	var jsonObject = [
		{
			"id": 2,
			"name": "An ice sculpture",
			"proce": 12.50,
			"tags": ["cold", "ice"],
			"dimensions":{
				"langth": 7.0,
				"width": 12.0,
				"height": 10.0
			}
		},
		{
			"id": 3,
			"name": "A blue mouse",
			"price": 25.50,
			"dimensions": {
				"langth": 3.1,
				"width": 1.0,
				"height": 1.0
			},
			"warehouseLocation":{
				"latitude": 54.4,
				"longitude": -32.7
			}
		}
	]

	//JSON method stringify
	var str = JSON.stringify(jsonObject);
	document.write(str + "<br/>");

	//JSON method parse
	var newJsonObj = JSON.parse(str);
	document.write(typeof(newJsonObj) + "<br/>");


// Creating an example of JSON (one more)

	var session = {
		'screens': [],
		'state': true

	};


	session.screens.push({'name': 'screenA', 'width': 450, 'height': 250});
	session.screens.push({'name': 'screenB', 'width': 650, 'height': 350});
	session.screens.push({'name': 'screenC', 'width': 750, 'height': 120});
	session.screens.push({'name': 'screenD', 'width': 250, 'height': 60});


	//Converting the JSON string with JSON.stringify()  
	//then saving with localStorage in the name of session  
	localStorage.setItem('session', JSON.stringify(session));
	
	var restoredSession = JSON.parse(localStorage.getItem('session'));

	console.log(restoredSession);

});