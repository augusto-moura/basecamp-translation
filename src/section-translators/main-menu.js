import { __, __element, __selector, delay } from "../utils";

function bc_trans_hey_expanded_content() {
	document
		.querySelectorAll("#navigation_readings")
		.forEach((el) => __element(el, [
			"See previous notifications…",
			"Nothing new for you.",
		]));

	document.querySelectorAll("#navigation_readings section.readings--reads")
		.forEach((el) => __element(el, ["Previous notifications"]));

	document.querySelectorAll("#navigation_readings section.readings--unreads")
		.forEach((el) => __element(el, ["New for you", "Mark all read"]));

	document
		.querySelectorAll("#navigation_readings section.readings--memories h3")
		.forEach((el) => {
			el.innerHTML = el.innerHTML.replace(
				"Don’t Forget",
				__("Don't Forget")
			);
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
				.replace("@mentioned you in:", __("@mentioned you in:"))
				.replace(/In (\d+) hours*: /, __("In $1 hour(s): "));
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

function bc_trans_my_area_expanded_content() {
	__selector("#navigation_my_stuff", [
		"My Assignments",
		"My Bookmarks",
		"My Schedule",
		"My Drafts",
		"My Recent Activity",
		"My Boosts",
		"Recently visited",
		"Boosts For You",
		"Press",
		"for more recent history",
	]);
}

function bc_trans_pings_expanded_content() {
	console.log('bc_trans_pings_expanded_content');

	__selector("#navigation_pings", [
		"Start a private chat with…",
		"Recent Pings",
	]);

	document.querySelector('#circle_users').focus();
}

export function waitSelectorToLoadThenExecute(selectorWithLoading, fnCallback){
	var checkLoadingComplete = setInterval(() => {
		let elementWithLoading = document.querySelector(selectorWithLoading);
		if (!elementWithLoading.classList.contains("loading")) {
			fnCallback();

			delay(400).then(() => {
				fnCallback();
				clearInterval(checkLoadingComplete);
			});
		}
	}, 200);
}

export function addListenerToMenuItem(menuItemSelector, fnTranslateExpandedContent){
	document
		.querySelector(menuItemSelector)
		.addEventListener("mousedown", (event) => {
			waitSelectorToLoadThenExecute(
				menuItemSelector,
				fnTranslateExpandedContent
			);
		});
}

export let translateMainMenu = function () {
	addListenerToHeyMenuItem();
	addListenerToMyAreaMenuItem();
	addListenerToPingsMenuItem();

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
};

export function addListenerToHeyMenuItem() {
	addListenerToMenuItem(
		'[data-load-target="#navigation_readings"]',
		bc_trans_hey_expanded_content
	)
}
export function addListenerToMyAreaMenuItem() {
	addListenerToMenuItem(
		'[data-load-target="#navigation_my_stuff"]',
		bc_trans_my_area_expanded_content
	)
}
export function addListenerToPingsMenuItem() {
	addListenerToMenuItem(
		'[data-load-target="#navigation_pings"] a.nav__link',
		bc_trans_pings_expanded_content
	)
}
