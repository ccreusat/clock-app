(function () {
	"use strict";

	const quoteButton = document.getElementById("quote-button");

	function getRandomNumber(max) {
		return Math.floor(Math.random() * max);
	}

	async function getRandomQuote() {
		const quoteURL = "https://mindjournal-app.herokuapp.com/";
		const query = () => `{
          quotes {
            text
            author {
              name
            }
          }
        }`;

		const options = {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: query(),
			}),
		};

		await fetch(quoteURL, options)
			.then(response => response.json())
			.then(({ data }) => {
				let quotes = data.quotes;
				let quotesLength = quotes.length;
				let randomNumber = getRandomNumber(quotesLength);
				let randomQuote = quotes[randomNumber];

				const quoteContainer = document.getElementById("quote");
				const quoteText = document.getElementById("quote-text");
				const quoteAuthor = document.getElementById("quote-author");

				quoteContainer.classList.add("quote-transition");

				quoteText.innerHTML = randomQuote.text;
				quoteAuthor.innerHTML = randomQuote.author.name;

				quoteContainer.addEventListener("animationend", () => {
					quoteContainer.classList.remove("quote-transition");
				});
			});
	}

	quoteButton.onclick = () => getRandomQuote();
})();
