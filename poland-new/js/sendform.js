$(document).ready(function(){

	$('#myForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data:$('#myForm').serialize(),
			success:function(){
				$('.result-form').find('span').addClass('succsess');	
			}
		});
	});


});