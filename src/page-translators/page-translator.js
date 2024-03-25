import { translateMainMenu } from "../section-translators/main-menu";
import { translateHomePage } from "./home";
import { translateProjectPage } from "./project";
import { translateSetUpToolsPage } from "./set-up-tools";

export function translateCurrentPage(shouldTranslateMainMenu = false){
	let route = getCurrentRoute();
	
	if(shouldTranslateMainMenu){
		translateMainMenu();
	}

	switch(route){
		case '/1':
		case '/1/projects':
			translateHomePage();
		break;
		case '/1/projects/1': 
			translateProjectPage();
		break;
		case '/1/buckets/1/dock/edit': 
			translateSetUpToolsPage();
		break;
	}
}

export function listenForPageChangeAndTranslateCurrentPage(){
	window.bc_trans_route = null;

	setInterval(() => {
		let currentRoute = getCurrentRoute();

		if(window.bc_trans_route === null){
			console.log('primeira página');
			translateCurrentPage(true);

			window.bc_trans_route = currentRoute;
			return;
		}

		if(currentRoute != window.bc_trans_route){
			console.log('pagina alterada');
			translateCurrentPage(false);
		}

		window.bc_trans_route = currentRoute;
	}, 1000);
}

function getCurrentRoute(){
	let fullUrl = window.location.href;
	let url = fullUrl.replace('//', '');

	route = url.substring(url.indexOf('/'))
		.replaceAll(/\d+/g, '1')
		.replace(/\/$/, '')

	return route;
}