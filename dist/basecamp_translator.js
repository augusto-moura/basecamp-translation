function m(e) {
  return new Promise((n) => setTimeout(n, e));
}
function s(e, n) {
  var r = setInterval(() => {
    if (document.querySelector(e)) {
      setTimeout(n, 400), clearInterval(r);
      return;
    }
  }, 200);
}
function a(e) {
  return window.bc_trans_map[e] ?? e;
}
function o(e, n) {
  let r = e.innerHTML;
  for (i = 0; i < n.length; i++) {
    let c = n[i];
    r = r.replaceAll(c, a(c));
  }
  e.innerHTML = r;
}
function t(e, n) {
  document.querySelectorAll(e).forEach(
    (r) => o(r, n)
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
function p() {
  document.querySelectorAll("#navigation_readings").forEach((e) => o(e, [
    "See previous notifications…",
    "Nothing new for you."
  ])), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => o(e, ["Previous notifications"])), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => o(e, ["New for you", "Mark all read"])), document.querySelectorAll("#navigation_readings section.readings--memories h3").forEach((e) => {
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
function h() {
  t("#navigation_my_stuff", [
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
function f() {
  t("#navigation_pings", [
    "Start a private chat with…",
    "Recent Pings"
  ]), document.querySelector("#circle_users").focus();
}
function y() {
  t("[data-menu-section=search] .expanded_content", [
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
function g(e, n) {
  var r = setInterval(() => {
    document.querySelector(e).classList.contains("loading") || (n(), m(400).then(() => {
      n(), clearInterval(r);
    }));
  }, 200);
}
function l(e, n) {
  document.querySelector(e).addEventListener("mousedown", (r) => {
    g(
      e,
      n
    );
  });
}
function v() {
  S(), b(), w(), A(), t(".nav__main .nav__item .nav__link", [
    "Home",
    "Lineup",
    "Pings",
    "Hey!",
    "Activity",
    "My Stuff",
    "Find"
  ]), t(".nav__main .nav__item .nav__link span", [
    "Me"
  ]);
}
function S() {
  l(
    '[data-load-target="#navigation_readings"]',
    p
  );
}
function b() {
  l(
    '[data-load-target="#navigation_my_stuff"]',
    h
  );
}
function w() {
  l(
    '[data-load-target="#navigation_pings"] a.nav__link',
    f
  );
}
function A() {
  l(
    'li[data-menu-section="search"] a.nav__link',
    y
  );
}
function M() {
  document.querySelectorAll(".schedule-day__dates").forEach(
    (e) => o(e, [
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
    (e) => o(e, [
      ...d(),
      ...arrayAbbrWeekdays()
    ])
  ), t(".schedule-day__events", [
    "Nothing’s on the schedule"
  ]);
}
function T() {
  document.querySelectorAll(".project-index__mystuff-header").forEach((e) => o(e, [
    "Your Assignments"
  ])), document.querySelectorAll(".project-index__assignments").forEach((e) => o(e, [
    "Up next –",
    "Stuff due soon and recently assigned",
    "see all"
  ]));
}
function k() {
  document.querySelectorAll(".panel-home__buttons").forEach((e) => o(e, ["Make a new project", "Invite people"])), document.querySelectorAll("header p").forEach(
    (e) => o(e, [
      "Pinned &amp; recent projects below",
      "View all in a list",
      "View templates",
      "Press",
      "anytime to jump"
    ])
  ), document.querySelectorAll("#home_project_cards").forEach((e) => o(e, ["Recently visited"])), document.querySelectorAll("section.project-index__mystuff").forEach(
    (e) => o(e, [
      "Your Schedule",
      "A few upcoming events",
      "see all"
    ])
  ), s(
    ".schedule-day:not(.schedule-day--placeholder)",
    M
  ), s(
    ".project-index__assignments ul li",
    T
  );
}
function j() {
  t(".action-sheet__content", [
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
  ]), t(".panel--project header", [
    "Set up people",
    "just following"
  ]), t(".latest-activity__project-headline", [
    "Project Activity"
  ]), t(".latest-activity--project .date_divider", [
    "Today",
    "Yesterday",
    ...d()
  ]), t(".door-item", [
    "Open up"
  ]);
}
function E() {
  t("h1", [
    "Set up tools for this project"
  ]), t(".panel--project-change-tools", [
    "Open a Door to an external service like GitHub, Slack, Trello, etc..."
  ]), t("turbo-frame.card", [
    "Open a Door to an external service like GitHub, Slack, Trello, etc..."
  ]), t("turbo-frame.card .break", [
    "Rename"
  ]), t("turbo-frame.card .dock-toggle__copy-footer", [
    "Add another",
    "Edit door"
  ]), t("turbo-frame.card .dock-toggle__delete-button", [
    "Delete"
  ]), t(".when-no-cards", [
    "Tools you aren’t using",
    "You’ll still receive to-do reminders and notifications about upcoming events, even if the tools are hidden."
  ]), t("footer", [
    "All set, take me back to the project"
  ]);
}
function u(e = !1) {
  let n = _();
  switch (e && v(), n) {
    case "/1":
    case "/1/projects":
      k();
      break;
    case "/1/projects/1":
      j();
      break;
    case "/1/buckets/1/dock/edit":
      E();
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
  let n = window.location.href.replace("//", "");
  return route = n.substring(n.indexOf("/")).replaceAll(/\d+/g, "1").replace(/\/$/, ""), route;
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
