$(document).ready(function(){

	function Car(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}

	var myNissan = new Car("Nissan", "300ZX", 1992);
	var myMazda = new Car("Mazda", "Miata", 1990);

	console.log(myNissan);
	document.write(myNissan.make + " " + myNissan.model + " " + myNissan.year + "<br/>");
	document.write(myMazda.make + " " + myMazda.model + " " + myMazda.year + "<br/>");

	function Person(name, age, sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	var jenya = new Person("Jenya", 25, "W");
	var igor = new Person("Igor", 24, "M");
	var andrey = new Person("Andrey", 23, "M");

	document.write(jenya.name + " " + jenya.age + "<br/>");
	document.write(andrey.name + " " + andrey.age + "<br/>");

});