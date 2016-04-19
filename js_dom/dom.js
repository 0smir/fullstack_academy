

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
		nav.style.cssText = "width: 100%; min-height: 20px; display: flex; justify-content: space-around; padding: 0; margin: 10px auto;";

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



	nav.style.backgroundColor = caribianBlue;
	nav.style.padding = "5px";
	nav.style.borderRadius = "10px";
	nav.style.border = darckBorder;


		// add left asside
	var asideLeft = document.createElement("aside")
		asideLeft.id = "left-side"
		asideLeft.style.cssText = "width: 25%; border: 1px solid red;"
	document.getElementById("page-wrapper").appendChild(asideLeft);

	//add menu
	var menu = document.createElement("ul")
		menu.className = "left_menu"
		menu.style.cssText = " display: flex; flex-direction: column; justify-content: space-between; padding: 15px 0 0 0; margin: 0 auto;";

	menu.style.backgroundColor = caribianBlue;

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
		menuItem.innerHTML = "Распродажа"

		menu.appendChild(menuItem);



	document.getElementById("left-side").appendChild(menu);
	menu.getElementsByTagName("li");



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


	var navList = document.getElementsByClassName('main-nav')[0];
	var list = navList.getElementsByTagName('li');

	function styleOfNavItems(data){
		for(i = 0; i < data.length; i++){
			data[i].style.cssText = "text-align: center; color: #FFFFFF; border: 1px solid #343434; border-radius: 5px; padding: 15px 100px; list-style: none; background-color: #778899;";
		}
	}
	styleOfNavItems(list);
	


	var menuItemsList = document.getElementsByClassName("left_menu")[0].getElementsByTagName("li");

	function styleOfMenuItems(data){
		for(i = 0; i < data.length; i++){

			data[i].style.cssText = "margin-bottom: 15px; text-align: center; color: #FFFFFF; border: 1px solid #343434; border-radius: 5px; padding: 15px 100px; list-style: none; background-color: #778899;";
		}
	}
	styleOfMenuItems(menuItemsList);

	var asideRight = document.createElement("aside")
		asideRight.id = "right-side"
		asideRight.innerHTML = "GGGGGGGG"
		asideRight.style.cssText = "width: 24%; border: 1px solid red; background-color: #ccfcff;"
	document.getElementById("page-wrapper").appendChild(asideRight);

	var newsBlock = document.createElement("ul")
		newsBlock.className = "news";

	document.getElementById("right-side").appendChild(newsBlock);

	var newsItem = document.createElement("li")
		newsItem.id = "news-1"
		newsItem.style.cssText = "list-style-image: url(images/news1.png)"
		newsItem.innerHTML = "Кэтти Пэри и Джон Майер ищут дом";
	newsBlock.appendChild(newsItem);
	
	



	
	





});