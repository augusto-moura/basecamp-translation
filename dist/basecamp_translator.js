function u(e) {
  return new Promise((n) => setTimeout(n, e));
}
function l(e, n) {
  var o = setInterval(() => {
    if (document.querySelector(e)) {
      setTimeout(n, 400), clearInterval(o);
      return;
    }
  }, 200);
}
function a(e) {
  return window.bc_trans_map[e] ?? e;
}
function t(e, n) {
  let o = e.innerHTML;
  for (i = 0; i < n.length; i++) {
    let c = n[i];
    o = o.replace(c, a(c));
  }
  e.innerHTML = o;
}
function r(e, n) {
  document.querySelectorAll(e).forEach(
    (o) => t(o, n)
  );
}
function d() {
  document.querySelectorAll("#navigation_readings").forEach((e) => t(e, [
    "See previous notifications…",
    "Nothing new for you."
  ])), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => t(e, ["Previous notifications"])), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => t(e, ["New for you", "Mark all read"])), document.querySelectorAll("#navigation_readings section.readings--memories h3").forEach((e) => {
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
function _() {
  r("#navigation_my_stuff", [
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
function m() {
  r("#navigation_pings", [
    "Start a private chat with…",
    "Recent Pings"
  ]), document.querySelector("#circle_users").focus();
}
function h() {
  r("[data-menu-section=search] .expanded_content", [
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
function f(e, n) {
  var o = setInterval(() => {
    document.querySelector(e).classList.contains("loading") || (n(), u(400).then(() => {
      n(), clearInterval(o);
    }));
  }, 200);
}
function s(e, n) {
  document.querySelector(e).addEventListener("mousedown", (o) => {
    f(
      e,
      n
    );
  });
}
let p = function() {
  y(), g(), v(), S(), r(".nav__main .nav__item .nav__link", [
    "Home",
    "Lineup",
    "Pings",
    "Hey!",
    "Activity",
    "My Stuff",
    "Find"
  ]), r(".nav__main .nav__item .nav__link span", [
    "Me"
  ]);
};
function y() {
  s(
    '[data-load-target="#navigation_readings"]',
    d
  );
}
function g() {
  s(
    '[data-load-target="#navigation_my_stuff"]',
    _
  );
}
function v() {
  s(
    '[data-load-target="#navigation_pings"] a.nav__link',
    m
  );
}
function S() {
  s(
    'li[data-menu-section="search"] a.nav__link',
    h
  );
}
function M() {
  document.querySelectorAll(".schedule-day__dates").forEach(
    (e) => t(e, [
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
    (e) => t(e, [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
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
    ])
  ), r(".schedule-day__events", [
    "Nothing’s on the schedule"
  ]);
}
function A() {
  document.querySelectorAll(".project-index__mystuff-header").forEach((e) => t(e, [
    "Your Assignments"
  ])), document.querySelectorAll(".project-index__assignments").forEach((e) => t(e, [
    "Up next –",
    "Stuff due soon and recently assigned",
    "see all"
  ]));
}
function w() {
  document.querySelectorAll(".panel-home__buttons").forEach((e) => t(e, ["Make a new project", "Invite people"])), document.querySelectorAll("header p").forEach(
    (e) => t(e, [
      "Pinned &amp; recent projects below",
      "View all in a list",
      "View templates",
      "Press",
      "anytime to jump"
    ])
  ), document.querySelectorAll("#home_project_cards").forEach((e) => t(e, ["Recently visited"])), document.querySelectorAll("section.project-index__mystuff").forEach(
    (e) => t(e, [
      "Your Schedule",
      "A few upcoming events",
      "see all"
    ])
  ), l(
    ".schedule-day:not(.schedule-day--placeholder)",
    M
  ), l(
    ".project-index__assignments ul li",
    A
  );
}
function b() {
  r(".action-sheet__content", [
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
  ]);
}
function E() {
  let n = window.location.href.replace("//", "");
  switch (n = n.substring(n.indexOf("/")).replaceAll(/\d+/g, "1").replace(/\/$/, ""), p(), n) {
    case "/1":
    case "/1/projects":
      w();
      break;
    case "/1/projects/1":
      b();
      break;
  }
}
var T = "pt-BR";
window.bc_trans_map = null;
var q = chrome.runtime.getURL(`lang/${T}.json`);
(function() {
  fetch(q).then((e) => e.json()).then((e) => {
    window.bc_trans_map = e;
  }).then(() => {
    E();
  });
})();
