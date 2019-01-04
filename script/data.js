var flights = [ 
	// Вылетающие
	{
		flight: "ЮТ 904",
		status: "Идет регистрация",
		city: "Саратов",
		time: "20:00",
		aviacompany: "Ютейр",
		terminal: "А",
	},
	{
		flight: "ДР 263",
		status: "Идет регистрация",
		city: "Калининград (Храброво)",
		time: "14:55",
		aviacompany: "Победа",
		terminal: "А",
	},
	{
		flight: "РГ 221",
		status: "Идет регистрация",
		city: "Ульяновск (Баратаевка)",
		time: "15:05",
		aviacompany: "Руслайн",
		terminal: "А",
	},
	{
		flight: "ZF 7743",
		status: "Идет регистрация",
		city: "Нягань (Камрань)",
		time: "15:10",
		aviacompany: "Azur Air",
		terminal: "А",
	},
	{
		flight: "ФВ 5503",
		status: "Идет регистрация",
		city: "Сочи",
		time: "15:20",
		aviacompany: "Россия",
		terminal: "А",
	},
	// Прилетающие
	{
		flight: "ЮТ 172",
		status: "Ожидается в 13:19",
		city: "Ульяновск (Баратаевка)",
		time: "13:20",
		aviacompany: "Ютейр",
		terminal: "А",
	},	
	{
		flight: "ZF 7730",
		status: "Ожидается в 13:59",
		city: "Гоа (Даболим)",
		time: "13:25",
		aviacompany: "Azur Air",
		terminal: "А",
	},
	{
		flight: "ЮТ 4146",
		status: "Ожидается в 14:11",
		city: "Киров",
		time: "13:30",
		aviacompany: "Ютейр",
		terminal: "А",
	},
	{
		flight: "ФВ 6013",
		status: "Ожидается в 13:18",
		city: "Санкт-Петербург (Пулково)",
		time: "13:30",
		aviacompany: "Россия",
		terminal: "А",
	},
	{
		flight: "ЕК 2310",
		status: "Ожидается в 13:44",
		city: "Киров",
		time: "13:40",
		aviacompany: "Emirates",
		terminal: "А",
	},
	// Задержанные
	{
		flight: "ЮТ 445",
		status: "Задержан",
		city: "Когалым",
		time: "13:40",
		aviacompany: "Ютейр",
		terminal: "А",
	},
	{
		flight: "ЮТ 333",
		status: "Задержан",
		city: "Нарьян-Мар",
		time: "15:00",
		aviacompany: "Ютейр",
		terminal: "А",
	},
	{
		flight: "ЮТ 557",
		status: "Задержан",
		city: "Махачкала",
		time: "18:00",
		aviacompany: "Ютейр",
		terminal: "А",
	}
];
function showData() {
	for (var i = 0; i < flights.length; i++) {
		var item = '<div class="scheduleItem">' +
						'<div class="scheduleItem__time scheduleExplanation__tablecell_time">' + 
							flights[i].time +
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

