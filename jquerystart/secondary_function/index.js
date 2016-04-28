$(document).ready(function(){

	$("ul").find("li").each(function(index, element){
		console.log(index + ":" + $(this).text());
		if (index == 2){
			$(element).css({"background-color": "red"});
		}else if(index == 0){
			$(element).css({backgroundColor: "green"});
		}else if(index == 3){
			$(element).css({backgroundColor: "yellow"});
		}else 	{
			$(element).css({backgroundColor: "pink"});
		}

	});

	var olItems = $("ol").find("li")
	$.grep(olItems, function(element, index){
		//console.log(element);
		if(index ==2){
			console.log(element);
			$(element).find("span").css({"color": "cyan"});
		}

	});

	
});