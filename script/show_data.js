function showData() {
	for (var i = 0; i < flights.length; i++) {
		var item = '<div class="scheduleItem">' +
						'<div class="scheduleItem__time scheduleExplanation__tablecell_time">' + 
							flights[i].time +
						'</div>' +
						'<div class="scheduleItem__expectedTime scheduleExplanation__tablecell_expectedTime">' + 
							flights[i].expectedTime +
						'</div>' +
						'<div class="scheduleItem__city scheduleExplanation__tablecell_city">' +
							flights[i].city +
						'</div>' +
						'<div class="scheduleItem__aviacompany scheduleExplanation__tablecell_aviacompany">' +
							flights[i].aviacompany +
						'</div>' +
						'<div class="scheduleItem__flight scheduleExplanation__tablecell_flight">' +
							flights[i].flight +
						'</div>' +	
						'<div class="scheduleItem__terminal scheduleExplanation__tablecell_terminal">' +
							flights[i].terminal +
						'</div>' +
						'<div class="scheduleItem__flightStatus scheduleExplanation__tablecell_flightStatus">' +
							flights[i].status +
						'</div>'
				   '</div>';
		$('.schedule').append(item);
	};
}
showData();	