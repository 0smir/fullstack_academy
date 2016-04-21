$(document).ready(function(){

	var listMark1 = document.getElementsByClassName('marck1')[0];
		console.log(listMark1);
	var	item = listMark1.getElementsByTagName('li');
		console.log(item);
	function addNumber(item){
		for(var i=0; i<item.length; i++){
			item[i].id = "item" + i;
			item[i].classList.remove("item");
		}
	}
	addNumber(item);


	var slider = document.getElementsByClassName('slider')[0];
	var sliderItem = slider.getElementsByTagName('li');
	var buttonLeft = document.getElementsByClassName('left')[0];
	var buttonRight = document.getElementsByClassName('right')[0];
	var sliderWrapper = document.getElementsByClassName('wrapper')[0];
	var count = 1;
	var width = 604;
	var position = 0;

	// add for  inspection of bugs
	// console.log(sliderItem.length);
	// for(i = 0; i < sliderItem.length; i++){
	// 	console.log(sliderItem.length);
	// }


	function moveLeft(){
		position = Math.min(position + width * count, 0);
		console.log(position);
		slider.style.marginLeft = position + "px"; 

	};

	function moveRight(){
		position = Math.max(position - width * count, -width * (sliderItem.length - count));
		console.log(position);
		slider.style.marginLeft = position + "px";

	};

	buttonLeft.addEventListener("click", moveLeft, false);
	buttonRight.addEventListener("click", moveRight, false);


});	