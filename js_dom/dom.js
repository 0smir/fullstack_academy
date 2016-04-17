$(document).ready(function(){
	var blue = '#00bfff';
	var	columbiaBlue = '#9bddff';
	var lightSlateGrey = '#778899';

	
	//document.getElementById('page-wrapper').style.width = "200px";

	document.getElementById('page-wrapper').style.cssText="width: 100%; min-height: 100px; border: 1px solid #00bfff;";
	document.getElementById('page-wrapper').style.backgroundColor = columbiaBlue;

//add nav
	var nav = document.createElement('ul')
		nav.className = "main-nav"
		nav.style.cssText = "width: 95%; min-height: 20px; background-color: #778899; padding: 0; margin: 10px auto;";

	document.getElementById('page-wrapper').appendChild(nav);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item1";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item2";
	nav.appendChild(navItem);

	var navItem = document.createElement('li')
		navItem.style.cssText = "display: inline-flex;"
		navItem.id = "nav-item3";
	nav.appendChild(navItem);






});