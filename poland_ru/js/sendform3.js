$(document).ready(function(){

	$('#myBottomForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data:$('#myBottomForm').serialize(),
			dataType: 'json'
		}).error(function(jqXHR, status, error){
			$("#poland_11").find(".error").fadeIn(100).delay(5000).fadeOut(5000);
		}).success(function(data, status, jqXHR) {
			$('#myBottomForm').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
			$("#poland_11").find(".success").fadeIn(100).delay(5000).fadeOut(5000);
		});
	});

});