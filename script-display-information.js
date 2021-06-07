(function () {
	"use strict";

	const html = document.getElementsByTagName("html")[0];
	const weekNumber = document.getElementById("weekNumber");
	const dayOfWeek = document.getElementById("dayOfWeek");
	const dayOfYear = document.getElementById("dayOfYear");
	const d = new Date();

	let isWaiting = true;

	if (isWaiting) {
		html.classList.add("is-loading");
	}

	function getDayOfYear(date) {
		return Math.floor(
			(date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
		);
	}

	function getNumberOfWeek(date) {
		let toDate = new Date(date.valueOf());
		let dayNumber = (date.getDay() + 6) % 7;
		toDate.setDate(toDate.getDate() - dayNumber + 3);
		let firstThursday = toDate.valueOf();
		toDate.setMonth(0, 1);
		if (toDate.getDay() !== 4) {
			toDate.setMonth(0, 1 + ((4 - toDate.getDay() + 7) % 7));
		}
		return 1 + Math.ceil((firstThursday - toDate) / 604800000);
	}

	async function fetchCountryCity() {
		const freeGeoURL = "https://freegeoip.app/json/";

		await fetch(freeGeoURL)
			.then(response => response.json())
			.then(data => {
				const locationData = data;
				const city = document.getElementById("city");
				const country = document.getElementById("country");

				city.innerHTML = locationData.city;
				country.innerHTML = locationData.country_code;
				timezone.innerHTML = locationData.time_zone;
				weekNumber.innerHTML = getNumberOfWeek(d);
				dayOfWeek.innerHTML = d.getDay();
				dayOfYear.innerHTML = getDayOfYear(d);
			})
			.then(() => {
				isWaiting = false;
				html.classList.add("not-loading");
				html.addEventListener("transitionend", () => {
					html.classList.remove("is-loading");
				});
			});
	}

	fetchCountryCity();
})();
