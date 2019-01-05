$(function(){
	function sortData() {
		var sort = $('.flightFilter__select').val();
		if (sort === "Вылет") {
			$.each($('.scheduleItem__flightStatus'), function() {
				if($(this).text() === 'Идет регистрация' ||
				   $(this).text() === 'Регистрация заканчивается' ||
				   $(this).text() === 'Посадка' ||
				   $(this).text() === 'Задержан' ) {
					$(this).closest('.scheduleItem').show();
				} else {
					$(this).closest('.scheduleItem').hide();
				}
			});
		} else if (sort === "Прилет") {
			$.each($('.scheduleItem__flightStatus'), function() {
				if ($(this).text() === 'Закончена выдача багажа' ||
					$(this).text() === 'Выдача багажа' ||
					$(this).text() == $(this).text().match(/(([а-я])+\s*)+\d+:\d+/gi)) {
						$(this).closest('.scheduleItem').show();
				} else {
					$(this).closest('.scheduleItem').hide();
				}
			});
		} else {
			$.each($('.scheduleItem__flightStatus'), function() {
				if($(this).text() === 'Задержан') {
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