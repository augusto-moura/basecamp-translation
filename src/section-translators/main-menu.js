import { __, delay } from "../utils";

function bc_trans_hey_expanded_content() {
	document
		.querySelectorAll("#navigation_readings section.readings--empty")
		.forEach((el) => {
			el.innerHTML = el.innerHTML.replace(
				"Nothing new for you.",
				__("Nothing new for you.")
			);
		});

	document
		.querySelectorAll("#navigation_readings section.readings--reads")
		.forEach((el) => {
			el.innerHTML = el.innerHTML.replace(
				"Previous notifications",
				__("Previous notifications")
			);
		});

	document
		.querySelectorAll("#navigation_readings section.readings--unreads")
		.forEach((el) => {
			el.innerHTML = el.innerHTML
				.replace("New for you", __("New for you"))
				.replace("Mark all read", __("Mark all read"))
		});

	document
		.querySelectorAll("#navigation_readings section.readings--memories h3")
		.forEach((el) => {
			el.innerHTML = el.innerHTML
				.replace("Don’t Forget", __("Don't Forget"));
		});

	document
		.querySelectorAll("#navigation_readings section h4")
		.forEach((el) => {
			el.innerHTML = el.innerHTML
				.replace("Completed: ", __("Completed: "))
				.replace("Overdue: ", __("Overdue: "))
				.replace("Due soon: ", __("Due soon: "))
				.replace("Added: ", __("Added: "))
				.replace("Assigned you: ", __("Assigned you: "))
				.replace("@mentioned you in:", __("@mentioned you in:"));
		});

	document
		.querySelectorAll("#navigation_readings section.readings--reads footer")
		.forEach((el) => {
			el.innerHTML = el.innerHTML.replace(
				"See all your previous notifications…",
				__("See all your previous notifications…")
			);
		});
}

export let translateMainMenu = function() {
	addListenerToHeyMenuItem();

	document
		.querySelector(".nav__main")
		.querySelectorAll(".nav__item .nav__link")
		.forEach((el) => {
			el.innerHTML = el.innerHTML
				.replace("Home", __("Home"))
				.replace("Lineup", __("Lineup"))
				.replace("Pings", __("Pings"))
				.replace("Hey!", __("Hey!"))
				.replace("Activity", __("Activity"))
				.replace("My Stuff", __("My Stuff"))
				.replace("Find", __("Find"));
		});
}

export function addListenerToHeyMenuItem () {
	document
	.querySelector('[data-load-target="#navigation_readings"]')
	.addEventListener("mousedown", (event) => {
		var checkLoadingComplete = setInterval(() => {
			let elementWithLoading = document.querySelector(
				'[data-load-target="#navigation_readings"]'
			);
			if (!elementWithLoading.classList.contains("loading")) {
				bc_trans_hey_expanded_content();

				delay(400).then(() => {
					bc_trans_hey_expanded_content();
					clearInterval(checkLoadingComplete);
				});
			}
		}, 200);
	});
}