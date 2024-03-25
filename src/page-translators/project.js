import { __, __element, __selector, arrayWeekdaysAndMonths, execute_after_element_exists } from "../utils";

export function translateProjectPage() {
	__selector('.action-sheet__content', [
		'Pin project',
		'Unpin project',
		'Switch to just following',
		'Edit project details',
		'Set up tools',
		'Set up people',
		'Save as a project template',
		'Archive or delete',
		'See items in the trash',
		'For developers',
		'Set up webhooks',
	]);

	__selector('.panel--project header', [
		'Set up people',
		'just following',
	])

	__selector('.latest-activity__project-headline', [
		'Project Activity',
	])

	__selector('.latest-activity--project .date_divider', [
		'Today',
		'Yesterday',
		...arrayWeekdaysAndMonths()
	]);

	__selector('.door-item', [
		'Open up',
	]);

}
