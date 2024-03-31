import { __, __attributeFromSelector, __element, __selector, arrayAbbrMonths, arrayWeekdaysAndMonths, delay, waitSelectorToMatchOtherSelectorThenExecute } from "../utils";

export function translateCardTablePage() {
	__selector('header', [
		'Add a card',
	]);
	
	__selector('.action-sheet__content .action-sheet__action', [
		'Rename this tool',
		'Get a public link',
		'View archived columns',
	]);

	__selector('.action-sheet__content a.action-sheet__action--bookmark', [
		'Bookmark',
	]);

	__selector('.kanban-triage__title, .kanban-column__header', [
		"Nobody's watching",
		"Watch this column",
		"Rename",
	]);

	delay(300).then(() => {
		__selector('.kanban-card__meta', [
			"By ",
			" on ",
		]);

		__selector('.kanban-card__meta .kanban-card__author time', [
			"hours ago",
			...arrayWeekdaysAndMonths(),
			...arrayAbbrMonths(),
		]);
	})

	addListenerToAddNewCardButton();
	
}

function addListenerToAddNewCardButton(){
	document.querySelector('#new_card a')
		.addEventListener("click", (event) => {
			waitSelectorToMatchOtherSelectorThenExecute(
				'#modal bc-modal',
				'[opened=true]',
				translateNewCardModal
			);
		});
}

export function translateNewCardModal(){
	__selector('.modal-sheet__header', [
		"Add a new card to ",
	]);
	__selector('.todos-form__field-label', [
		"Title",
		"Assign card",
		"Due on",
	]);
	
	__attributeFromSelector('.new-card-modal form, #modal form',
		'data-bridge-form-success-message', 
		[
			'Card added',
		]
	)

	__attributeFromSelector(
		'.new-card-modal form input, .new-card-modal form trix-editor, #modal form input, #modal form trix-editor', 
		'placeholder', 
		[
			"Type a card title",
			"Type names to assign",
			"Select a due date",
			"Describe your card here",
		]
	)

	__selector('.new-card-modal form footer, #modal form footer', [
		"Save card",
		"Save and add another",
		"Cancel",
	]);
}
