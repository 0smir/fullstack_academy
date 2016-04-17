$(document).ready(function(){
	var blue = '#00bfff';
	var	columbiaBlue = '#9bddff';
	var lightSlateGrey = '#778899';
	var white = '#FFFFFF';

	
	//document.getElementById('page-wrapper').style.width = "200px";

	document.getElementById('page-wrapper').style.cssText="width: 100%; min-height: 100px; border: 1px solid #00bfff;";
	document.getElementById('page-wrapper').style.backgroundColor = columbiaBlue;

//add nav
	var nav = document.createElement('ul')
		nav.className = "main-nav"
		nav.style.cssText = "width: 95%; min-height: 20px; display: flex; justify-content: space-around; background-color: #778899; padding: 0; margin: 10px auto;";

	document.getElementById('page-wrapper').appendChild(nav);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item1"
		navItem.innerHTML = "О нас";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item2"
		navItem.innerHTML = "Услуги";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item3"
		navItem.innerHTML = "События";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item4"
		navItem.innerHTML = "Каталог";
	nav.appendChild(navItem);

	//console.log(nav.getElementsByTagName("li"));
	
	var navList = document.getElementsByClassName('main-nav')[0];
		console.log(navList);
	var list = navList.getElementsByTagName('li');
	console.log(list);
	function addColor(data){
		for(i = 0; i < data.length; i++){
			data[i].style.color = white;
		}

	}
	addColor(list);

	
	





});