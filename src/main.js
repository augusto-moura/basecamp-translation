import { translateCurrentPage } from "./page-translators/page-translator.js";

//TODO: listen to history API

var bc_trans_locale = "pt-BR";
window.bc_trans_map = null;
var bc_trans_map_url = chrome.runtime.getURL(`lang/${bc_trans_locale}.json`);

(function () {
	fetch(bc_trans_map_url)
		.then((response) => response.json())
		.then((trans_map_obj) => {
			window.bc_trans_map = trans_map_obj;
		})
		.then(() => {
			translateCurrentPage();
		});
})();
