function m(e) {
  return new Promise((t) => setTimeout(t, e));
}
function l(e, t) {
  var r = setInterval(() => {
    if (document.querySelector(e)) {
      setTimeout(t, 400), clearInterval(r);
      return;
    }
  }, 200);
}
function a(e) {
  return window.bc_trans_map[e] ?? e;
}
function n(e, t) {
  let r = e.innerHTML;
  for (i = 0; i < t.length; i++) {
    let c = t[i];
    r = r.replaceAll(c, a(c));
  }
  e.innerHTML = r;
}
function o(e, t) {
  document.querySelectorAll(e).forEach(
    (r) => n(r, t)
  );
}
function d() {
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
    "December"
  ];
}
function h() {
  document.querySelectorAll("#navigation_readings").forEach((e) => n(e, [
    "See previous notifications…",
    "Nothing new for you."
  ])), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => n(e, ["Previous notifications"])), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => n(e, ["New for you", "Mark all read"])), document.querySelectorAll("#navigation_readings section.readings--memories h3").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "Don’t Forget",
      a("Don't Forget")
    );
  }), document.querySelectorAll("#navigation_readings section h4").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Completed: ", a("Completed: ")).replace("Overdue: ", a("Overdue: ")).replace("Due soon: ", a("Due soon: ")).replace("Added: ", a("Added: ")).replace("Assigned you: ", a("Assigned you: ")).replace("@mentioned you in:", a("@mentioned you in:")).replace(/In (\d+) hours*: /, a("In $1 hour(s): "));
  }), document.querySelectorAll("#navigation_readings section.readings--reads footer").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "See all your previous notifications…",
      a("See all your previous notifications…")
    );
  });
}
function p() {
  o("#navigation_my_stuff", [
    "My Assignments",
    "My Bookmarks",
    "My Schedule",
    "My Drafts",
    "My Recent Activity",
    "My Boosts",
    "Recently visited",
    "Boosts For You",
    "Press",
    "for more recent history"
  ]);
}
function y() {
  o("#navigation_pings", [
    "Start a private chat with…",
    "Recent Pings"
  ]), document.querySelector("#circle_users").focus();
}
function f() {
  o("[data-menu-section=search] .expanded_content", [
    "Search for…",
    "Search Everything",
    "by Anyone",
    "Everywhere",
    "Card tables",
    "Chats",
    "Check-ins",
    "Client emails",
    "Comments",
    "Documents",
    "Events",
    "Files",
    "Folders",
    "Forwarded emails",
    "Messages",
    "To-dos"
  ]), document.querySelector("#search_q").focus();
}
function g(e, t) {
  var r = setInterval(() => {
    document.querySelector(e).classList.contains("loading") || (t(), m(400).then(() => {
      t(), clearInterval(r);
    }));
  }, 200);
}
function s(e, t) {
  document.querySelector(e).addEventListener("mousedown", (r) => {
    g(
      e,
      t
    );
  });
}
function v() {
  S(), w(), A(), M(), o(".nav__main .nav__item .nav__link", [
    "Home",
    "Lineup",
    "Pings",
    "Hey!",
    "Activity",
    "My Stuff",
    "Find"
  ]), o(".nav__main .nav__item .nav__link span", [
    "Me"
  ]);
}
function S() {
  s(
    '[data-load-target="#navigation_readings"]',
    h
  );
}
function w() {
  s(
    '[data-load-target="#navigation_my_stuff"]',
    p
  );
}
function A() {
  s(
    '[data-load-target="#navigation_pings"] a.nav__link',
    y
  );
}
function M() {
  s(
    'li[data-menu-section="search"] a.nav__link',
    f
  );
}
function b() {
  document.querySelectorAll(".schedule-day__dates").forEach(
    (e) => n(e, [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
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
      "Dec"
    ])
  ), document.querySelectorAll("table.calendar-grid__table thead th").forEach(
    (e) => n(e, [
      ...d(),
      ...arrayAbbrWeekdays()
    ])
  ), o(".schedule-day__events", [
    "Nothing’s on the schedule"
  ]);
}
function T() {
  document.querySelectorAll(".project-index__mystuff-header").forEach((e) => n(e, [
    "Your Assignments"
  ])), document.querySelectorAll(".project-index__assignments").forEach((e) => n(e, [
    "Up next –",
    "Stuff due soon and recently assigned",
    "see all"
  ]));
}
function E() {
  document.querySelectorAll(".panel-home__buttons").forEach((e) => n(e, ["Make a new project", "Invite people"])), document.querySelectorAll("header p").forEach(
    (e) => n(e, [
      "Pinned &amp; recent projects below",
      "View all in a list",
      "View templates",
      "Press",
      "anytime to jump"
    ])
  ), document.querySelectorAll("#home_project_cards").forEach((e) => n(e, ["Recently visited"])), document.querySelectorAll("section.project-index__mystuff").forEach(
    (e) => n(e, [
      "Your Schedule",
      "A few upcoming events",
      "see all"
    ])
  ), l(
    ".schedule-day:not(.schedule-day--placeholder)",
    b
  ), l(
    ".project-index__assignments ul li",
    T
  );
}
function j() {
  o(".action-sheet__content", [
    "Pin project",
    "Unpin project",
    "Switch to just following",
    "Edit project details",
    "Set up tools",
    "Set up people",
    "Save as a project template",
    "Archive or delete",
    "See items in the trash",
    "For developers",
    "Set up webhooks"
  ]), o(".panel--project header", [
    "Set up people",
    "just following"
  ]), o(".latest-activity__project-headline", [
    "Project Activity"
  ]), o(".latest-activity--project .date_divider", [
    "Today",
    "Yesterday",
    ...d()
  ]), o(".door-item", [
    "Open up"
  ]);
}
function u(e = !1) {
  let t = _();
  switch (e && v(), t) {
    case "/1":
    case "/1/projects":
      E();
      break;
    case "/1/projects/1":
      j();
      break;
  }
}
function q() {
  window.bc_trans_route = null, setInterval(() => {
    let e = _();
    if (window.bc_trans_route === null) {
      console.log("primeira página"), u(!0), window.bc_trans_route = e;
      return;
    }
    e != window.bc_trans_route && (console.log("pagina alterada"), u(!1)), window.bc_trans_route = e;
  }, 1e3);
}
function _() {
  let t = window.location.href.replace("//", "");
  return route = t.substring(t.indexOf("/")).replaceAll(/\d+/g, "1").replace(/\/$/, ""), route;
}
var L = "pt-BR";
window.bc_trans_map = null;
var x = chrome.runtime.getURL(`lang/${L}.json`);
(function() {
  fetch(x).then((e) => e.json()).then((e) => {
    window.bc_trans_map = e;
  }).then(() => {
    q();
  });
})();
