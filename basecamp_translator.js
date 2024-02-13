/*
function basecamp_translator_translate(translationsMap){
	
}
*/

//TODO: listen to history API
//TODO: check URL and translate only the necessary strings
//TODO: structure project with support for other languages

(function () {
	document.querySelector(".nav__main").querySelectorAll(".nav__item .nav__link")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Home", "Início");
			el.innerHTML = el.innerHTML.replace("Lineup", "Alinhar");
			el.innerHTML = el.innerHTML.replace("Pings", "Chats");
			el.innerHTML = el.innerHTML.replace("Hey!", "Notificações");
			el.innerHTML = el.innerHTML.replace("Activity", "Atividade");
			el.innerHTML = el.innerHTML.replace("My Stuff", "Minha área");
			el.innerHTML = el.innerHTML.replace("Find", "Encontrar");
		});
	document.querySelectorAll(".btn--primary")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Make a new project", "Iniciar novo projeto");
			el.innerHTML = el.innerHTML.replace("Invite people", "Convidar pessoas");
		});
			
	document.querySelectorAll("header p")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Pinned &amp; recent projects below", "Projetos fixados e recentes abaixo");
			el.innerHTML = el.innerHTML.replace("View all in a list", "Visualizar todos em uma lista");
			el.innerHTML = el.innerHTML.replace("Press", "Pressione");
			el.innerHTML = el.innerHTML.replace("anytime to jump", "a qualquer momento para saltar");
			
		});
		
	
})()