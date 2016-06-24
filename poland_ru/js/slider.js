$(document).ready(function(){

	$('.slider-wraper').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
  		autoplaySpeed: 8000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 8000
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 8000
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 8000,
					arrows: false
				}
			}
		]
	});

});