import { __ , __element, execute_after_element_exists } from '../utils'

function bc_trans_schedule_widget() {
	//TODO: translate "Apr 14" to "14/04"

	document
		.querySelectorAll(".schedule-day__dates")
		.forEach((el) =>
			__element(el, [
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun",
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			])
		);

	document
		.querySelectorAll("table.calendar-grid__table thead th")
		.forEach((el) =>
			__element(el, [
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat",
				"Sun",
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			])
		);
}

export function translateHome(){
	document.querySelectorAll(".btn--primary").forEach((el) => {
		el.innerHTML = el.innerHTML
			.replace("Make a new project", __("Make a new project"))
			.replace("Invite people", __("Invite people"));
	});

	document
		.querySelectorAll("header p")
		.forEach((el) =>
			__element(el, [
				"Pinned &amp; recent projects below",
				"View all in a list",
				"View templates",
				"Press",
				"anytime to jump",
			])
		);

	document
		.querySelectorAll("#home_project_cards")
		.forEach((el) => __element(el, ["Recently visited"]));

	document
		.querySelectorAll("section.project-index__mystuff")
		.forEach((el) =>
			__element(el, [
				"Your Schedule",
				"A few upcoming events",
				"see all",
			])
		);

	execute_after_element_exists(
		".schedule-day:not(.schedule-day--placeholder)",
		bc_trans_schedule_widget
	);

	//TODO: add listener for navigation in the schedule widget, and reapply translations.
}