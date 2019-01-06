function update() {
	var date = new Date();

	var hours = date.getHours();
	if (hours < 10) hours = "0" + hours;
	document.getElementsByClassName('clock__hour')[0].innerHTML = hours;

	var minutes = date.getMinutes();
	if (minutes < 10) minutes = "0" + minutes;
	document.getElementsByClassName('clock__min')[0].innerHTML = minutes;
}
update();
setInterval(update, 1000);
