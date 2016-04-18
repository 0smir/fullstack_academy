$(document).ready(function(){
	var blue = '#00bfff';
	var	columbiaBlue = '#9bddff';
	var lightSlateGrey = '#778899';
	var white = '#FFFFFF';
	var darckBorder = '1px solid #343434',
		caribianBlue = '#ccfcff';
	
	
	//document.getElementById('page-wrapper').style.width = "200px";

	document.getElementById('page-wrapper').style.cssText="display: flex; flex-wrap: wrap; width: 100%; min-height: 100px; border: 1px solid #00bfff;";
	document.getElementById('page-wrapper').style.backgroundColor = white;

//add nav
	var nav = document.createElement('ul')
		nav.className = "main-nav"
		nav.style.cssText = "width: 95%; min-height: 20px; display: flex; justify-content: space-around; padding: 0; margin: 10px auto;";

	document.getElementById('page-wrapper').appendChild(nav);

	var navItem = document.createElement('li')
		navItem.id = "nav-item1"
		navItem.innerHTML = "О нас";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.id = "nav-item2"
		navItem.innerHTML = "Услуги";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.id = "nav-item3"
		navItem.innerHTML = "События";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.id = "nav-item4"
		navItem.innerHTML = "Каталог";
	nav.appendChild(navItem);

	//console.log(nav.getElementsByTagName("li"));
	


	var navList = document.getElementsByClassName('main-nav')[0];
		console.log(navList);
	var list = navList.getElementsByTagName('li');
	//console.log(list);
	function addColor(data){
		for(i = 0; i < data.length; i++){
			data[i].style.cssText = "width: 20%; text-align: center; color: #FFFFFF; border: 1px solid #343434; border-radius: 5px; padding: 15px; list-style: none; background-color: #778899;";
		}
	}
	addColor(list);

	nav.style.backgroundColor = caribianBlue;
	nav.style.padding = "5px";
	nav.style.borderRadius = "10px";
	nav.style.border = darckBorder;


		// add left asside
	var aside = document.createElement("aside")
		aside.id = "left-side"
		aside.style.cssText = "width: 25%; border: 1px solid red;"
	document.getElementById("page-wrapper").appendChild(aside);

	//add menu
	var menu = document.createElement("ul")
		menu.className = "left-menu"
		menu.style.cssText = "";

	var menuItem = document.createElement("li")
		menuItem.innerHTML = "Новинки";

		menu.appendChild(menuItem);

	var menuItem = document.createElement("li")
		menuItem.innerHTML = "Для женщин";

		menu.appendChild(menuItem);

	var menuItem = document.createElement("li")
		menuItem.innerHTML = "Для мужчин";

		menu.appendChild(menuItem);

	var menuItem = document.createElement("li")
		menuItem.innerHTML = "Для детей";
		
		menu.appendChild(menuItem);

	var menuItem = document.createElement("li")
		menuItem.innerHTML = "Распродажа";
		menu.appendChild(menuItem);


	document.getElementById("left-side").appendChild(menu);

	//main content

	var mainContent = document.createElement("div")
		mainContent.id = "content"
		mainContent.style.cssText = "width: 50%; display: flex; flex-direction: column; border: 1px solid red;"
	document.getElementById("page-wrapper").appendChild(mainContent);
	


	//add slider
	var slider = document.createElement('div')
		slider.id = "slider";
	document.getElementById("content").appendChild(slider);

	var sliderList = document.createElement("ul")
		sliderList.className = "slide-wrapper";

	document.getElementById('slider').appendChild(sliderList);
	document.getElementById('slider').style.cssText = "height: 400px; width: 90%; margin: 10px auto;"
	document.getElementById('slider').style.border = darckBorder;

	


	var sliderItem = document.createElement("li")
		sliderItem.className = "itemFirst"
		sliderItem.innerHTML = "<img src='images/1.jpg'>"

	sliderList.appendChild(sliderItem);
	sliderList.style.cssText = "height: 100%; padding: 0; margin: 0 auto; display: flex; overflow: hidden;"
	//


	
	



	
	





});