$(document).ready(function(){
	$(".main").find(".one").on("click", function(){
		$(this).animate({height: "150px", width: "150px", backgroundColor:'rgba(255, 145, 175, 0.1)'}, 3000);
	});
	
	

	$(".main").find(".two").on("dblclick", function move(element){
		$(this).transition({marginLeft: "250px", transform: "scale(4)", duration: 3000 });
	});

});