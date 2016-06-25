$(document).ready(function(){

	$('#myForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data: $('#myForm').serialize(),
			dataType: 'json'
		}).error(function(jqXHR, status, error){
			$(".results:last-of-type").addClass('error');
			$(".results:first-of-type").removeClass('error').delay(5000);
		}). success(function(data, status, jqXHR) {
			$('#myForm').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
			$(".results:first-of-type").addClass('success').delay(5000);
			$(".results:first-of-type").removeClass('success');
		});
	});



});