$(function(){
	
	$(".search__input").keyup(function(){
		_this = this;
    
		$.each($(".scheduleItem__flight"), function() {
			if($(this).text().toLowerCase().indexOf($(_this).val()
				.toLowerCase()) === -1) {
				$(this).closest('.scheduleItem').hide();
			} else {
				$(this).closest('.scheduleItem').show();
			};
		});
	});
});		

