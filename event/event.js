//'use strict'
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



		function move(){
			var time = setInterval(run, 200);
			var divLength = 0,
				element = document.getElementsByClassName('road-inner')[0];
			function run(){
				if(divLength == 100){
					clearInterval(time);
				}else{
					divLength++;
					element.style.width = divLength + "%";
				}
			}
		}

	var divRoad = document.getElementsByClassName('button-aray'),
		buttonRun = document.getElementById('run');
	buttonRun.addEventListener("click", move, false);
	

	
});
	


	

