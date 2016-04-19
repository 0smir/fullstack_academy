$(document).ready(function(){



	var divLogo = document.getElementById('logo'),
		linkVK = divLogo.getElementsByTagName('A')[0];

	console.log(linkVK);
	console.log(divLogo);

	divLogo.onmouseover = function showVk(){
		linkVK.style.cssText = "display: block;";
	};

	divLogo.onmouseout = function hideVk(){
		linkVK.style.cssText = "display: none;";
	};

	
});
	


	

