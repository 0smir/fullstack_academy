$(document).ready(function(){

	$('#myForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data: $('#myForm').serialize(),
			dataType: 'json'
		}).error(function(jqXHR, status, error){
				$(".error").fadeIn(100).delay(5000).fadeOut(5000);
		}).success(function(data, status, jqXHR) {
				$('#myForm').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
				$(".success").fadeIn(100, function () {
				$(".success").fadeOut(5000);
			});
		});
	});



});