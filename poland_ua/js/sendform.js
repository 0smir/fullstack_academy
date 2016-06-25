$(document).ready(function(){

	// $('#myForm').submit(function(e){
	// 	e.preventDefault();
	// 	$.ajax({
	// 		url:'https://formspree.io/o.v.smirnova1987@gmail.com',
	// 		type:'post',
	// 		data:$('#myForm').serialize(),
	// 		success:function(){
	// 			$('.result-form').find('span').addClass('succsess');
	// 		}
	// 	});
	// });

	$('#myForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data: {
				name: $('input[name="name"]').value(),
				tel: $('input[name="phone"]').value(),
				email: $('input[name="mail"]').value(),
				comment: $('input[name="comment"]').value()
			},
			dataType: 'json'
		}).error(function(jqXHR, status, error){
			alert('Uh oh, something went wrong. Please try again.');
		}). success(function(data, status, jqXHR) {
			alert('Thank you for your message. Kitty will get back to you soon.');
			// $('#myForm').find('[name="name"], #js-message').val('');
		});
	});



});