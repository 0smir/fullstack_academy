$(document).ready(function(){
	$(".main").find(".one").on("click", function(){
		$(this).animate({height: "150px", width: "150px", backgroundColor:'rgba(255, 145, 175, 0.1)'}, 3000);
	});
	
	

	$(".main").find(".two").on("dblclick", function move(element){
		$(this).transition({marginLeft: "250px", transform: "scale(4)", duration: 3000 });
	});

	$(".hide").on("click", function hideBlock(){
		$(".three").hide(3000);
	});

	$(".show").on("click", function showBlock(){
		$(".three").show(3000);
	});

	$(".joke").on("click", function ok(){
		$(".three").hide(300, function(){
			$(".three").show(300, ok());
		});
	});
	

});