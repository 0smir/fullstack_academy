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
			itemList[i].classList.remove('even', 'odd', 'first');
			
			if (i % 2 == 0){

				itemList[i].classList.add('even');
			} 
			else{
				itemList[i].classList.add('odd');
			}
		}
		ul.firstElementChild.classList.add('first');
	}
	addColor();

	



	btnAddSkill.addEventListener("click", addItem);

	function addItem(){
		var center = Math.floor(itemList.length/2),
			newSkill = prompt("Write your new skill!", ''),
			position = prompt("Choose position of new skill? Start, center or end?", '');

		if (newSkill == null){
			console.log("не заполнено окно")
		} else if(newSkill == ' '){
			console.log("не заполнено окно, или пустая строка");	
		}
		else{
			var newItem = document.createElement('li');
			newItem.innerHTML = newSkill;
				if(position == null || position == "End" || position == "end"){
					ul.appendChild(newItem);
				} else if(position == "Start" || position == "start"){
					ul.insertBefore(newItem, ul.firstElementChild);
				}else if(position == "Center" || position == "center"){
					ul.insertBefore(newItem, itemList[center]);
				}
		}

		countItems(itemList);
		addColor();
	}
	



