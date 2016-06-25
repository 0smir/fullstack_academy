$(document).ready(function(){


	var succsessText = 'Дані успішно відправлені. Дякую за звернення у візовий центр &laquo; VISA-SVIT &raquo;',
		errorText = 'Увага! Виникла помилка. Будь ласка, спробуйте ще раз!';

	$('#myForm').submit(function(event){
		event.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data: $('#myForm').serialize(),
			dataType: 'json'
		}).error(function(jqXHR, status, error){
			document.getElementsByClassName('results').innerHTML= errorText;
		}). success(function(data, status, jqXHR) {
			$(".results").addClass('success');
			document.getElementsByClassName('results').innerHTML= succsessText;

			$('#myForm').find('input[name="name"], input[name="phone"], input[name="mail"], textarea[name="comment"]').val('');
		});
	});



});