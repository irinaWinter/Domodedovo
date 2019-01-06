$(function(){
	$('.Hamburger').click(function(){
		$('.dropDownMenu').slideToggle();
		$('.Hamburger__line_theme_white').toggleClass('Hamburger__line_theme_black');
		$('.flightDisplay').toggleClass('hideScroll');	
	});

});