function s(e) {
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
function n(e) {
  return window.bc_trans_map[e] ?? e;
}
function o(e, t) {
  let r = e.innerHTML;
  for (i = 0; i < t.length; i++) {
    let a = t[i];
    r = r.replace(a, n(a));
  }
  e.innerHTML = r;
}
function u(e, t) {
  document.querySelectorAll(e).forEach(
    (r) => o(r, t)
  );
}
function d() {
  document.querySelectorAll("#navigation_readings").forEach((e) => o(e, [
    "See previous notifications…",
    "Nothing new for you."
  ])), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => o(e, ["Previous notifications"])), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => o(e, ["New for you", "Mark all read"])), document.querySelectorAll("#navigation_readings section.readings--memories h3").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "Don’t Forget",
      n("Don't Forget")
    );
  }), document.querySelectorAll("#navigation_readings section h4").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Completed: ", n("Completed: ")).replace("Overdue: ", n("Overdue: ")).replace("Due soon: ", n("Due soon: ")).replace("Added: ", n("Added: ")).replace("Assigned you: ", n("Assigned you: ")).replace("@mentioned you in:", n("@mentioned you in:")).replace(/In (\d+) hours*: /, n("In $1 hour(s): "));
  }), document.querySelectorAll("#navigation_readings section.readings--reads footer").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "See all your previous notifications…",
      n("See all your previous notifications…")
    );
  });
}
function _() {
  u("#navigation_my_stuff", [
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
  console.log("bc_trans_pings_expanded_content"), u("#navigation_pings", [
    "Start a private chat with…",
    "Recent Pings"
  ]), document.querySelector("#circle_users").focus();
}
function y(e, t) {
  var r = setInterval(() => {
    document.querySelector(e).classList.contains("loading") || (t(), s(400).then(() => {
      t(), clearInterval(r);
    }));
  }, 200);
}
function c(e, t) {
  document.querySelector(e).addEventListener("mousedown", (r) => {
    y(
      e,
      t
    );
  });
}
let f = function() {
  p(), g(), h(), document.querySelector(".nav__main").querySelectorAll(".nav__item .nav__link").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Home", n("Home")).replace("Lineup", n("Lineup")).replace("Pings", n("Pings")).replace("Hey!", n("Hey!")).replace("Activity", n("Activity")).replace("My Stuff", n("My Stuff")).replace("Find", n("Find"));
  });
};
function p() {
  c(
    '[data-load-target="#navigation_readings"]',
    d
  );
}
function g() {
  c(
    '[data-load-target="#navigation_my_stuff"]',
    _
  );
}
function h() {
  c(
    '[data-load-target="#navigation_pings"] a.nav__link',
    m
  );
}
function v() {
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
  );
}
function S() {
  document.querySelectorAll(".project-index__mystuff-header").forEach((e) => o(e, [
    "Your Assignments"
  ])), document.querySelectorAll(".project-index__assignments").forEach((e) => o(e, [
    "Up next –",
    "see all"
  ]));
}
function M() {
  document.querySelectorAll(".panel-home__buttons").forEach((e) => o(e, ["Make a new project", "Invite people"])), document.querySelectorAll("header p").forEach(
    (e) => o(e, [
      "Pinned &amp; recent projects below",
      "View all in a list",
      "View templates",
      "Press",
      "anytime to jump"
    ])
  ), document.querySelectorAll("#home_project_cards").forEach((e) => o(e, ["Recently visited"])), document.querySelectorAll("section.project-index__mystuff").forEach(
    (e) => o(e, ["Your Schedule", "A few upcoming events", "see all"])
  ), l(
    ".schedule-day:not(.schedule-day--placeholder)",
    v
  ), l(
    ".project-index__assignments ul li",
    S
  );
}
var A = "pt-BR";
window.bc_trans_map = null;
var T = chrome.runtime.getURL(`lang/${A}.json`);
(function() {
  fetch(T).then((e) => e.json()).then((e) => {
    window.bc_trans_map = e;
  }).then(() => {
    f(), M();
  });
})();
