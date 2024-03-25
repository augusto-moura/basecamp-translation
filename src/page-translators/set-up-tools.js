import { __, __element, __selector, arrayWeekdaysAndMonths, execute_after_element_exists } from "../utils";

export function translateSetUpToolsPage() {
	__selector('h1', [
		'Set up tools for this project',
	]);

	__selector('.panel--project-change-tools', [
		'Open a Door to an external service like GitHub, Slack, Trello, etc...',
	]);

	__selector('turbo-frame.card', [
		'Open a Door to an external service like GitHub, Slack, Trello, etc...',
	]);

	__selector('turbo-frame.card .break', [
		'Rename',
	]);

	__selector('turbo-frame.card .dock-toggle__copy-footer', [
		'Add another',
		'Edit door',
	]);

	__selector('turbo-frame.card .dock-toggle__delete-button', [
		'Delete',
	]);

	__selector('.when-no-cards', [
		"Tools you aren’t using",
		"You’ll still receive to-do reminders and notifications about upcoming events, even if the tools are hidden.",
	]);

	__selector('footer', [
		"All set, take me back to the project",
	]);
}
