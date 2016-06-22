$(document).ready(function(){
	$('#myBottomForm').submit(function(e){
		e.preventDefault();
		$.ajax({
			url:'https://formspree.io/o.v.smirnova1987@gmail.com',
			type:'post',
			data:$('#myBottomForm').serialize(),
			success:function(){
			}
		});
	});

});