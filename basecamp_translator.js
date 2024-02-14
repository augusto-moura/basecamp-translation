
function bc_trans(str)
{
	return bc_trans_map[str] ?? str;
}

function bc_trans_main_menu()
{
	document.querySelector(".nav__main").querySelectorAll(".nav__item .nav__link")
		.forEach(el => {
			el.innerHTML = el.innerHTML
				.replace("Home", bc_trans("Home"))
				.replace("Lineup", bc_trans("Lineup"))
				.replace("Pings", bc_trans("Pings"))
				.replace("Hey!", bc_trans("Hey!"))
				.replace("Activity", bc_trans("Activity"))
				.replace("My Stuff", bc_trans("My Stuff"))
				.replace("Find", bc_trans("Find"))
			;
		});
}

function bc_trans_home()
{
	document.querySelectorAll(".btn--primary")
		.forEach(el => {
			el.innerHTML = el.innerHTML
				.replace("Make a new project", bc_trans("Make a new project"))
				.replace("Invite people", bc_trans("Invite people"))
			;
		});
			
	document.querySelectorAll("header p")
		.forEach(el => {
			el.innerHTML = el.innerHTML
				.replace("Pinned &amp; recent projects below", bc_trans("Pinned &amp; recent projects below"))
				.replace("View all in a list", bc_trans("View all in a list"))
				.replace("View templates", bc_trans("View templates"))
				.replace("Press", bc_trans("Press"))
				.replace("anytime to jump", bc_trans("anytime to jump"))
			;
		});
}	

function bc_trans_hey_expanded_content()
{
	document.querySelectorAll('#navigation_readings section.readings--empty')
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Nothing new for you.", bc_trans("Nothing new for you."));
		});
		
	document.querySelectorAll('#navigation_readings section.readings--reads h3')
		.forEach(el => {
			el.innerHTML = el.innerHTML.replace("Previous notifications", bc_trans("Previous notifications"));
		});
		
	document.querySelectorAll('#navigation_readings section.readings--reads h4')
		.forEach(el => {
			el.innerHTML = el.innerHTML
				.replace("Completed: ", bc_trans("Completed: "))
				.replace('Overdue: ', bc_trans("Overdue: "))
				.replace('Added: ', bc_trans("Added: "))
				.replace('Assigned you: ', bc_trans("Assigned you: "))
			;
		});
	
	document.querySelectorAll('#navigation_readings section.readings--reads footer')
		.forEach(el => {
			el.innerHTML = el.innerHTML
				.replace("See all your previous notifications…", bc_trans("See all your previous notifications…"))
			;
		});
}

var bc_trans_locale = 'pt-BR';
var bc_trans_map = null;
var bc_trans_map_url = chrome.runtime.getURL(`lang/${bc_trans_locale}.json`);

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
	
	document.querySelector("[data-load-target=\"#navigation_readings\"]")
		.addEventListener('mousedown', (event) => {
			var checkLoadingComplete = setInterval(() => {
				let elementWithLoading = document.querySelector("[data-load-target=\"#navigation_readings\"]");
				if( ! elementWithLoading.classList.contains('loading') ){
					bc_trans_hey_expanded_content() ;
					clearInterval(checkLoadingComplete);
				}
				
			}, 200);
			
		})
	;
})()