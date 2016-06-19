$(document).ready(function(){
	$('#myBottomForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/pupsua@gmail.com',
			type:'post',
			data:$('#myBottomForm').serialize(),
			success:function(){
			}
		});
	});

});