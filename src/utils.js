export function delay(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

export function execute_after_element_exists(elementSelector, callback) {
	var checkElementExists = setInterval(() => {
		//console.log('check that element exists');
		let elementThatShouldExist = document.querySelector(elementSelector);
		if (elementThatShouldExist) {
			//console.log('element exists');
			callback();
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
		newHtml = newHtml.replace(stringToTranslate, __(stringToTranslate));
	}

	element.innerHTML = newHtml;
}
