$(document).ready(function(){
	$("[data-modal='show']").on("click", function (){
		var modalName = $(this).attr("data-modal-name");

		$("[data-modal-name=" + modalName + "]").css({"display": "block"});
	});

	$('[data-modal="close"]').on("click", function(){
		var modalName = $(this).attr("data-modal-name");
		$("[data-modal-name=" + modalName + "]").css({"display": "none"});
	
	});
});