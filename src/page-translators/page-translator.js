import { translateMainMenu } from "../section-translators/main-menu";
import { translateHomePage } from "./home";
import { translateProjectPage } from "./project";

export function translateCurrentPage(){
	let fullUrl = window.location.href;
	let url = fullUrl.replace('//', '');

	url = url.substring(url.indexOf('/'))
		.replaceAll(/\d+/g, '1')
		.replace(/\/$/, '')
	
	translateMainMenu();

	switch(url){
		case '/1':
		case '/1/projects':
			translateHomePage();
		break;
		case '/1/projects/1': 
			translateProjectPage();
		break;
	}
}