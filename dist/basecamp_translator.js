function u(e) {
  return new Promise((r) => setTimeout(r, e));
}
function d(e, r) {
  var t = setInterval(() => {
    if (document.querySelector(e)) {
      r(), clearInterval(t);
      return;
    }
  }, 200);
}
function n(e) {
  return l[e] ?? e;
}
function a(e, r) {
  let t = e.innerHTML;
  for (i = 0; i < r.length; i++) {
    let o = r[i];
    t = t.replace(o, n(o));
  }
  e.innerHTML = t;
}
function s() {
  document.querySelector(".nav__main").querySelectorAll(".nav__item .nav__link").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Home", n("Home")).replace("Lineup", n("Lineup")).replace("Pings", n("Pings")).replace("Hey!", n("Hey!")).replace("Activity", n("Activity")).replace("My Stuff", n("My Stuff")).replace("Find", n("Find"));
  });
}
function m() {
  document.querySelectorAll(".btn--primary").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Make a new project", n("Make a new project")).replace("Invite people", n("Invite people"));
  }), document.querySelectorAll("header p").forEach((e) => a(e, [
    "Pinned &amp; recent projects below",
    "View all in a list",
    "View templates",
    "Press",
    "anytime to jump"
  ])), document.querySelectorAll("#home_project_cards").forEach((e) => a(e, [
    "Recently visited"
  ])), document.querySelectorAll("section.project-index__mystuff").forEach((e) => a(e, [
    "Your Schedule",
    "A few upcoming events",
    "see all"
  ])), d(
    ".schedule-day:not(.schedule-day--placeholder)",
    p
  );
}
function p() {
  document.querySelectorAll(".schedule-day__dates").forEach((e) => a(e, [
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
  ])), document.querySelectorAll("table.calendar-grid__table thead th").forEach((e) => a(e, [
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
  ]));
}
function c() {
  document.querySelectorAll("#navigation_readings section.readings--empty").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Nothing new for you.", n("Nothing new for you."));
  }), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Previous notifications", n("Previous notifications"));
  }), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("New for you", n("New for you")).replace("Mark all read", n("Mark all read"));
  }), document.querySelectorAll("#navigation_readings section h4").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Completed: ", n("Completed: ")).replace("Overdue: ", n("Overdue: ")).replace("Due soon: ", n("Due soon: ")).replace("Added: ", n("Added: ")).replace("Assigned you: ", n("Assigned you: ")).replace("@mentioned you in:", n("@mentioned you in:"));
  }), document.querySelectorAll("#navigation_readings section.readings--reads footer").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("See all your previous notifications…", n("See all your previous notifications…"));
  });
}
var _ = "pt-BR", l = null, y = chrome.runtime.getURL(`lang/${_}.json`);
(function() {
  fetch(y).then((e) => e.json()).then((e) => {
    l = e;
  }).then(() => {
    s(), m();
  }), document.querySelector('[data-load-target="#navigation_readings"]').addEventListener("mousedown", (e) => {
    var r = setInterval(() => {
      document.querySelector('[data-load-target="#navigation_readings"]').classList.contains("loading") || (c(), u(400).then(() => {
        c(), clearInterval(r);
      }));
    }, 200);
  });
})();
