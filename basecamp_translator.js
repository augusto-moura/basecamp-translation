
function bc_trans(str)
{
	return bc_trans_map[str] ?? str;
}

function bc_trans_main_menu()
{
	document.querySelector(".nav__main").querySelectorAll(".nav__item .nav__link")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Home", bc_trans("Home"));
			el.innerHTML = el.innerHTML.replace("Lineup", bc_trans("Lineup"));
			el.innerHTML = el.innerHTML.replace("Pings", bc_trans("Pings"));
			el.innerHTML = el.innerHTML.replace("Hey!", bc_trans("Hey!"));
			el.innerHTML = el.innerHTML.replace("Activity", bc_trans("Activity"));
			el.innerHTML = el.innerHTML.replace("My Stuff", bc_trans("My Stuff"));
			el.innerHTML = el.innerHTML.replace("Find", bc_trans("Find"));
		});
}

function bc_trans_home()
{
	document.querySelectorAll(".btn--primary")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Make a new project", bc_trans("Make a new project"));
			el.innerHTML = el.innerHTML.replace("Invite people", bc_trans("Invite people"));
		});
			
	document.querySelectorAll("header p")
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Pinned &amp; recent projects below", bc_trans("Pinned &amp; recent projects below"));
			el.innerHTML = el.innerHTML.replace("View all in a list", bc_trans("Invite people"));
			el.innerHTML = el.innerHTML.replace("Press", bc_trans("Press"));
			el.innerHTML = el.innerHTML.replace("anytime to jump", bc_trans("anytime to jump"));
			
		});
}	

//TODO: listen to history API

var bc_trans_locale = 'pt-BR';
var bc_trans_map = null;
var bc_trans_map_url = chrome.runtime.getURL(`lang/${bc_trans_locale}.json`)

(function () {
	
	fetch(bc_trans_map_url)
		.then(response => response.json())
		.then(trans_map_obj => {
			bc_trans_map = trans_map_obj;
		})
		.then(() => {
			bc_trans_main_menu();
			bc_trans_home();	
		})
	;
	
})()