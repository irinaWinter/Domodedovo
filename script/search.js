$(function(){
	function search() {
		_this = this;
		$.each($('.scheduleItem__flight:visible'), function() {
			if($(this).text().toLowerCase().indexOf($(_this).val()
				.toLowerCase()) == -1) {
				$(this).closest('.scheduleItem').hide();

			} else {
				$(this).closest('.scheduleItem').show();
			};
		});
	}
	$('.search__input').keyup(search);
});		