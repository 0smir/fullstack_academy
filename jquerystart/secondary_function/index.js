$(document).ready(function(){

	$("li").each(function(index, element){
		console.log(index + ":" + $(this).text());
		if (index == 2){
			$(element).css({"background-color": "red"});
		}

	});

	//$("li")[0].css({"background-color": "red"});
});