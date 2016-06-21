$(document).ready(function(){
	$('#myBottomForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/dimadob@mail.ru',
			type:'post',
			data:$('#myBottomForm').serialize(),
			success:function(){
			}
		});
	});

});