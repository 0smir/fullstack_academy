$(document).ready(function(){

	
	$('#modalForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data: $('#modalForm').serialize(),
			dataType: 'json'
		}).error(function(jqXHR, status, error){
			$("#modalForForm").find(".error").fadeIn(100).delay(5000).fadeOut(5000);
		}).success(function(data, status, jqXHR) {
			$('#modalForm').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
			$("#modalForForm").find(".success").fadeIn(100).delay(5000).fadeOut(5000);
		});
	});

	
});