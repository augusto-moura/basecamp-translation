import { __, __element, __selector, execute_after_element_exists } from "../utils";

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
}
