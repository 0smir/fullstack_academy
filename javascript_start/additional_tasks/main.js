'use strict'


	var ul = document.getElementById("list"),
		itemList = ul.getElementsByTagName('li'),
		btnAddSkill = document.getElementById('addSkill'),
		oddElement = ul.querySelectorAll("li:nth-child(odd)"),
		evenElement = ul.querySelectorAll("li:nth-child(even)");



	function countItems(data){
		var listLength = data.length;
		document.getElementById("skill-count").innerHTML = listLength + " ";
	}
	countItems(itemList);

		

	function addColor(){
		for(var i = 0; i < itemList.length; i++){
		
			if ( i == 0 || i % 2 == 0){

				itemList[i].classList.add('even');
			} else{
				itemList[i].classList.add('odd');
			}
		}
	}
	addColor();

	ul.firstElementChild.classList.add('first');



	btnAddSkill.addEventListener("click", addItem);

	function addItem(){
		var newSkill = prompt("Write your new skill!", '');
		if (newSkill == null){
			console.log("не заполнено окно")
		} else if(newSkill == ' '){
			console.log("не заполнено окно, или пустая строка");	
		}
		else{
			var newItem = document.createElement('li');
			newItem.innerHTML = newSkill;
			ul.appendChild(newItem);
		}

		countItems(itemList);
		addColor();
	}
	



