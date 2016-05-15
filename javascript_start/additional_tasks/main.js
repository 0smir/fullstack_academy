// $(document).ready(function(){


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

		

	function addColor(list){
		var list = itemList;
		itemList = Array.prototype.slice.call(itemList);
		console.log(itemList);

		itemList.forEach(function(item, index){

			console.log(item);
			
			if(index % 2 == 0){
				item.classList.add('odd');
			}else{
				item.classList.add('even');
			}
		});
	}
	addColor(itemList);
	

	ul.firstElementChild.classList.add('first');



	btnAddSkill.addEventListener("click", addItem);

	function addItem(){
		var newSkill = prompt("Write your new skill!", '');
		var newItem = document.createElement('li');
			newItem.innerHTML = newSkill;

		ul.appendChild(newItem);
		countItems(itemList);
		newList = ul.getElementsByTagName('li');
		addColor(newList);
	}
	



// });