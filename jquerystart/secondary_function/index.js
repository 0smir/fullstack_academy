$(document).ready(function(){

	$("li").each(function(index, element){
		console.log(index + ":" + $(this).text());
		if (index == 2){
			$(element).css({"background-color": "red"});
		}else if(index == 0){
			$(element).css({backgroundColor: "green"});
		}else if(index == 3){
			$(element).css({backgroundColor: "yellow"});
		}else {
			$(element).css({backgroundColor: "pink"});
		}

	});

	
});