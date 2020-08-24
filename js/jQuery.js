$(function () {

	/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		appendDots: $('.reviews_arrow_btn'),
		appendArrows: $('.reviews_arrow_btn'),
		autoplay: true,
		autoplayspeed: 4000,
		speed: 2000
	});


	/* Slider2 */
	$('.slider2').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		dots: true,
		autoplayspeed: 4000,
		speed: 2000,
		responsive: [
			{
			breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
		},
			{
			breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
		},
			{
			breakpoint: 780,
				settings: {
					slidesToShow: 1
				}
		}
		]
	});

	/* Slider3 */
	$('.slider3').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplayspeed: 4000,
		speed: 2000,
		responsive: [
			{
			breakpoint: 1000,
				settings: {
					slidesToShow: 2
				}
		},
			
			{
			breakpoint: 780,
				settings: {
					slidesToShow: 1
				}
		},
			{
			breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
		}
		]
	});
	
	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;


		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);
	});
	
	/* Header menu */
    $("#burger_menu").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
       $("#menu_nav").toggleClass("active");
    });

});
