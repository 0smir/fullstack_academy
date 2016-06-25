$(document).ready(function(){


	var succsessText = 'Дані успішно відправлені. Дякую за звернення у візовий центр &laquo; VISA-SVIT &raquo;',
		errorText = 'Увага! Виникла помилка:' + xhr.responseCode + '. Будь ласка, спробуйте ще раз!';

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
			document.getElementsByClassName('results').innerHTML= succsessText;
			$(".results").addClass('success');
			$('#myForm').find('input[name="name"], input[name="phone"], input[name="mail"], input[name="comment"]').val('');
		});
	});



});