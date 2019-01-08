$(function(){
	function sortData() {
		var sort = $('.flightFilter__select').val();
		if (sort === "Вылет") {
			$.each($('.scheduleItem__flightStatus'), function() {
				if($(this).text() === 'Отправлен' ||
				   $(this).text() === 'Ожидается' ||
				   $(this).text() === 'Отменен' ||
				   $(this).text() === 'Опаздывает' ) {
					$(this).closest('.scheduleItem').show();
				} else {
					$(this).closest('.scheduleItem').hide();
				}
			});
		} else if (sort === "Прилет") {
			$.each($('.scheduleItem__flightStatus'), function() {
				if ($(this).text() === 'Прибыл' ||
					$(this).text() === 'Задерживается' ||
					$(this).text() == $(this).text().match(/(([а-я])+\s*)+\d+:\d+/gi)) {
						$(this).closest('.scheduleItem').show();
				} else {
					$(this).closest('.scheduleItem').hide();
				}
			});
		} else {
			$.each($('.scheduleItem__flightStatus'), function() {
				if($(this).text() === 'Задерживается') {
					$(this).closest('.scheduleItem').show();

				} else {
					$(this).closest('.scheduleItem').hide();
				}
			});
		}
	}
	sortData();
	$('.flightFilter__select').on("change", sortData);
});	