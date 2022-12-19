$(window).on('load', function(){
	ww = $(window).innerWidth();

	setTimeout(function(){
		$('.loading2').addClass('is-active');
		setTimeout(function(){
			$('.lwrap').fadeOut(500);
		},800);
	},500);
});