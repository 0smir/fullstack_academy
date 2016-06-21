$(document).ready(function(){

	
	$('#modalForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/dimadob@mail.ru',
			type:'post',
			data:$('#modalForm').serialize(),
			success:function(){
			}
		});
	});

	
});