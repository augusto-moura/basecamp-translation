export function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

export function execute_after_element_exists(elementSelector, callback) {
	var checkElementExists = setInterval(() => {
		//console.log('check that element exists');
		let elementThatShouldExist = document.querySelector(elementSelector);
		if (elementThatShouldExist) {
			//console.log('element exists');
			setTimeout(callback, 400);
			clearInterval(checkElementExists);
			return;
		}
		//console.log('element doesnt exist');
	}, 200);
}

export function __(str) {
	return window.bc_trans_map[str] ?? str;
}

export function __element(element, stringsToTranslate) {
	let newHtml = element.innerHTML;

	for (i = 0; i < stringsToTranslate.length; i++) {
		let stringToTranslate = stringsToTranslate[i];
		newHtml = newHtml.replaceAll(stringToTranslate, __(stringToTranslate));
	}

	element.innerHTML = newHtml;
}

export function __selector(selector, stringsToTranslate) {
	document.querySelectorAll(selector)
		.forEach(
			element => __element(element, stringsToTranslate)
		);
}

export function __attributeFromSelector(selector, attribute, stringsToTranslate) {
	document.querySelectorAll(selector)
		.forEach(element => {
			if( ! element.hasAttribute(attribute)){
				return;
			}
			
			const currentAttrValue = element.getAttribute(attribute);
			let newAttrValue = currentAttrValue;

			for (i = 0; i < stringsToTranslate.length; i++) {
				let stringToTranslate = stringsToTranslate[i];
				newAttrValue = newAttrValue.replaceAll(stringToTranslate, __(stringToTranslate));
			}

			element.setAttribute(attribute, newAttrValue);
		});
}

export function waitSelectorToMatchOtherSelectorThenExecute(elementSelector, triggerSelector, fnCallback){
	var checkIfElementMatchesSelector = setInterval(() => {
		let elementWithLoading = document.querySelector(elementSelector);
		if( ! elementWithLoading){
			clearInterval(checkIfElementMatchesSelector);
			debugger;
			return;
		}

		if (elementWithLoading.matches(triggerSelector)) {
			fnCallback();

			delay(400).then(() => {
				fnCallback();
				clearInterval(checkIfElementMatchesSelector);
			});
		}
	}, 200);
}

export function arrayWeekdaysAndMonths(){
	return [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
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
	];
}

export function arrayAbbrWeekdays(){
	return [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun",
	];
}

export function arrayAbbrMonths(){
	return [
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
	];
}