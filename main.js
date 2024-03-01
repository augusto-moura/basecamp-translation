
function bc_trans_delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }
  
  function bc_execute_after_element_exists(elementSelector, callback)
  {
	  var checkElementExists = setInterval(() => {
		  //console.log('check that element exists');
		  let elementThatShouldExist = document.querySelector(elementSelector);
		  if( elementThatShouldExist ){
			  //console.log('element exists');
			  callback();
			  clearInterval(checkElementExists);
			  return;
		  }
		  //console.log('element doesnt exist');
		  
	  }, 200);
  }
  
  function bc_trans(str)
  {
	  return bc_trans_map[str] ?? str;
  }
  
  function bc_trans_element(element, stringsToTranslate)
  {
	  let newHtml = element.innerHTML;
	  
	  for(i = 0; i < stringsToTranslate.length; i++){
		  let stringToTranslate = stringsToTranslate[i];
		  newHtml = newHtml.replace(stringToTranslate, bc_trans(stringToTranslate));
	  }
	  
	  element.innerHTML = newHtml;
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
		  .forEach(el => bc_trans_element(el, [
			  "Pinned &amp; recent projects below",
			  "View all in a list",
			  "View templates",
			  "Press",
			  "anytime to jump",
		  ]));
		  
	  document.querySelectorAll("#home_project_cards")
		  .forEach(el => bc_trans_element(el, [
			  "Recently visited",
		  ]));
	  
	  document.querySelectorAll("section.project-index__mystuff")
		  .forEach(el => bc_trans_element(el, [
			  "Your Schedule",
			  "A few upcoming events",
			  "see all",
		  ]));
	  
	  bc_execute_after_element_exists(
		  ".schedule-day:not(.schedule-day--placeholder)", 
		  bc_trans_schedule_widget
	  );
	  
	  //TODO: add listener for navigation in the schedule widget, and reapply translations.
	  
  }
  
  function bc_trans_schedule_widget()
  {
	  //TODO: translate "Apr 14" to "14/04"
	  
	  document.querySelectorAll(".schedule-day__dates")
		  .forEach(el => bc_trans_element(el, [
			  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
			  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", 
		  ]));
		  
	  document.querySelectorAll("table.calendar-grid__table thead th")
		  .forEach(el => bc_trans_element(el, [
			  "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
			  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
		  ]));	
  }
  
  function bc_trans_hey_expanded_content()
  {
	  document.querySelectorAll('#navigation_readings section.readings--empty')
		  .forEach(el => {
			  el.innerHTML = el.innerHTML.replace("Nothing new for you.", bc_trans("Nothing new for you."));
		  });
		  
	  document.querySelectorAll('#navigation_readings section.readings--reads')
		  .forEach(el => {
			  el.innerHTML = el.innerHTML
				  .replace("Previous notifications", bc_trans("Previous notifications"))
			  ;
		  });
		  
	  document.querySelectorAll('#navigation_readings section.readings--unreads')
		  .forEach(el => {
			  el.innerHTML = el.innerHTML
				  .replace("New for you", bc_trans("New for you"))
				  .replace("Mark all read", bc_trans("Mark all read"))
			  ;
		  });
		  
	  document.querySelectorAll('#navigation_readings section h4')
		  .forEach(el => {
			  el.innerHTML = el.innerHTML
				  .replace("Completed: ", bc_trans("Completed: "))
				  .replace('Overdue: ', bc_trans("Overdue: "))
				  .replace('Due soon: ', bc_trans("Due soon: "))
				  .replace('Added: ', bc_trans("Added: "))
				  .replace('Assigned you: ', bc_trans("Assigned you: "))
				  .replace('@mentioned you in:', bc_trans("@mentioned you in:"))
				  
			  ;
		  });
	  
	  document.querySelectorAll('#navigation_readings section.readings--reads footer')
		  .forEach(el => {
			  el.innerHTML = el.innerHTML
				  .replace("See all your previous notifications…", bc_trans("See all your previous notifications…"))
			  ;
		  });
  }
  
  //TODO: listen to history API
  
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
					  
					  bc_trans_delay(400).then(() => {
						  bc_trans_hey_expanded_content() ;
						  clearInterval(checkLoadingComplete);
					  });
					  
				  }
				  
			  }, 200);
			  
		  })
	  ;
  })()