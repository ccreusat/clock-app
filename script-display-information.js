(function () {
	"use strict";

	let isWaiting = true;
	const html = document.getElementsByTagName("html")[0];

	if (isWaiting) {
		html.classList.add("is-loading");
	}

	async function fetchTimeZone() {
		const worldTimeURL = "http://worldtimeapi.org/api/ip";
		await fetch(worldTimeURL)
			.then(response => response.json())
			.then(data => {
				const userCurrentData = data;
				const abbr = document.getElementById("abbr");
				const weekNumber = document.getElementById("weekNumber");
				const dayOfWeek = document.getElementById("dayOfWeek");
				const dayOfYear = document.getElementById("dayOfYear");

				abbr.innerHTML = userCurrentData.abbreviation;
				weekNumber.innerHTML = userCurrentData.week_number;
				dayOfWeek.innerHTML = userCurrentData.day_of_week;
				dayOfYear.innerHTML = userCurrentData.day_of_year;
				timezone.innerHTML = userCurrentData.timezone;
			})
			.then(() => {
				isWaiting = false;
				html.classList.add("not-loading");
				html.addEventListener("transitionend", () => {
					html.classList.remove("is-loading");
				});
			});
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
			});
	}

	fetchTimeZone();
	fetchCountryCity();
})();
