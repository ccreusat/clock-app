# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   View the current time and location information based on their IP address
-   View additional information about the date and time in the expanded state
-   Be shown the correct greeting and background image based on the time of day they're visiting the site
-   Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![](https://ccreusat-clock-app.vercel.app/assets/screenshot.png)

### Links

-   Solution URL: [Solution page](https://www.frontendmentor.io/solutions/clock-app-with-javascript-dayjs-own-backend-quotes-api-WYww7nH8A)
-   Live Site URL: [Live site](https://ccreusat-clock-app.vercel.app)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Dayjs (to display time )
-   [React](https://reactjs.org/) - JS library (Version WIP)

### What I learned

One API that the challenge asked to use was really slow and without HTTPS connection. I didn't use it.
Instead, I created functions to get the day of year and week number.

```js
function getDayOfYear(date) {
	return Math.floor(
		(date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
	);
}
```

```js
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
```

### Continued development

I'm working on a REACT version of this Clock challenge.

### Useful resources

-   [30secondsofcode](https://www.30secondsofcode.org/js/s/day-of-year) -Helped me to find out the day of year function.
-   [Stackoverflow](https://stackoverflow.com/) - Who doesn't know stackoverflow ? Helped me to find the getNumberOfWeek function :)

## Author

-   Website - [Clement Creusat](https://github.com/ccreusat)
-   Frontend Mentor - [@ccreusat](https://www.frontendmentor.io/profile/ccreusat)
