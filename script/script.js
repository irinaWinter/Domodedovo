$(function(){
	$('.Hamburger').click(function(){
		$('.dropDownMenu').slideToggle();
		$('.Hamburger__line').toggleClass('Hamburger__line_theme_black');
	});
});