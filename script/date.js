$(function(){
	$(document).ready(function(){
		$.get(
			'http://data.fixer.io/api/latest',
			{'access_key': '9103b63f-ab4f-4cf0-a7f2-125f47ca72ab'},
			function(response){
				$('.valuta').html((response.rates.RUB).toFixed(2) +
					(response.rates.USD).toFixed(2));
			});
	});
});