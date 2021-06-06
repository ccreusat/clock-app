(function () {
	"use strict";

	dayjs().format();

	let now = dayjs();
	let hour = now.format("HH");

	function toggleClass(timeOfDay) {
		let bodyElement = document.body;

		bodyElement.removeAttribute("class");
		return bodyElement.classList.add(timeOfDay);
	}

	function displayGreetings() {
		let greeting = document.getElementById("greeting");

		if (hour >= "05" && hour <= "12") {
			greeting.innerHTML = "Good Morning";
		} else if (hour >= "12" && hour <= "18") {
			greeting.innerHTML = "Good Afternoon";
		} else {
			greeting.innerHTML = "Good Night";
		}
	}

	function switchDayNight() {
		if (hour >= "05" && hour <= "18") {
			toggleClass("day");
		} else {
			toggleClass("night");
		}
	}

	function displayTime() {
		let clock = document.getElementById("clock");
		let hour =
			dayjs().hour() < "10" ? "0" + dayjs().hour() : dayjs().hour();
		let minute =
			dayjs().minute() < "10" ? "0" + dayjs().minute() : dayjs().minute();
		let time = hour + ":" + minute;
		clock.innerHTML = time;
	}

	setInterval(displayTime, 6000);

	displayTime();
	switchDayNight();
	displayGreetings();
})();
