function u(e) {
  return new Promise((n) => setTimeout(n, e));
}
function h(e, n) {
  var a = setInterval(() => {
    if (document.querySelector(e)) {
      setTimeout(n, 400), clearInterval(a);
      return;
    }
  }, 200);
}
function c(e) {
  return window.bc_trans_map[e] ?? e;
}
function r(e, n) {
  let a = e.innerHTML;
  for (i = 0; i < n.length; i++) {
    let o = n[i];
    a = a.replaceAll(o, c(o));
  }
  e.innerHTML = a;
}
function t(e, n) {
  document.querySelectorAll(e).forEach(
    (a) => r(a, n)
  );
}
function f(e, n, a) {
  document.querySelectorAll(e).forEach((o) => {
    if (!o.hasAttribute(n))
      return;
    let d = o.getAttribute(n);
    for (i = 0; i < a.length; i++) {
      let m = a[i];
      d = d.replaceAll(m, c(m));
    }
    o.setAttribute(n, d);
  });
}
function v(e, n, a) {
  var o = setInterval(() => {
    let s = document.querySelector(e);
    if (!s) {
      clearInterval(o);
      debugger;
      return;
    }
    s.matches(n) && (a(), u(400).then(() => {
      a(), clearInterval(o);
    }));
  }, 200);
}
function _() {
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
function b() {
  return [
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
  ];
}
function S() {
  document.querySelectorAll("#navigation_readings").forEach((e) => r(e, [
    "See previous notifications…",
    "Nothing new for you."
  ])), document.querySelectorAll("#navigation_readings section.readings--reads").forEach((e) => r(e, ["Previous notifications"])), document.querySelectorAll("#navigation_readings section.readings--unreads").forEach((e) => r(e, ["New for you", "Mark all read"])), document.querySelectorAll("#navigation_readings section.readings--memories h3").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "Don’t Forget",
      c("Don't Forget")
    );
  }), document.querySelectorAll("#navigation_readings section h4").forEach((e) => {
    e.innerHTML = e.innerHTML.replace("Completed: ", c("Completed: ")).replace("Overdue: ", c("Overdue: ")).replace("Due soon: ", c("Due soon: ")).replace("Added: ", c("Added: ")).replace("Assigned you: ", c("Assigned you: ")).replace("@mentioned you in:", c("@mentioned you in:")).replace(/In (\d+) hours*: /, c("In $1 hour(s): "));
  }), document.querySelectorAll("#navigation_readings section.readings--reads footer").forEach((e) => {
    e.innerHTML = e.innerHTML.replace(
      "See all your previous notifications…",
      c("See all your previous notifications…")
    );
  });
}
function A() {
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
function w() {
  t("#navigation_pings", [
    "Start a private chat with…",
    "Recent Pings"
  ]), document.querySelector("#circle_users").focus();
}
function k() {
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
function M(e, n) {
  var a = setInterval(() => {
    document.querySelector(e).classList.contains("loading") || (n(), u(400).then(() => {
      n(), clearInterval(a);
    }));
  }, 200);
}
function l(e, n) {
  document.querySelector(e).addEventListener("mousedown", (a) => {
    M(
      e,
      n
    );
  });
}
function T() {
  E(), j(), q(), L(), t(".nav__main .nav__item .nav__link", [
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
function E() {
  l(
    '[data-load-target="#navigation_readings"]',
    S
  );
}
function j() {
  l(
    '[data-load-target="#navigation_my_stuff"]',
    A
  );
}
function q() {
  l(
    '[data-load-target="#navigation_pings"] a.nav__link',
    w
  );
}
function L() {
  l(
    'li[data-menu-section="search"] a.nav__link',
    k
  );
}
function x() {
  t("header", [
    "Add a card"
  ]), t(".action-sheet__content .action-sheet__action", [
    "Rename this tool",
    "Get a public link",
    "View archived columns"
  ]), t(".action-sheet__content a.action-sheet__action--bookmark", [
    "Bookmark"
  ]), t(".kanban-triage__title, .kanban-column__header", [
    "Nobody's watching",
    "Watch this column",
    "Rename"
  ]), u(300).then(() => {
    t(".kanban-card__meta", [
      "By ",
      " on "
    ]), t(".kanban-card__meta .kanban-card__author time", [
      "hours ago",
      ..._(),
      ...b()
    ]);
  }), P();
}
function P() {
  document.querySelector("#new_card a").addEventListener("click", (e) => {
    v(
      "#modal bc-modal",
      "[opened=true]",
      g
    );
  });
}
function g() {
  t(".modal-sheet__header", [
    "Add a new card to "
  ]), t(".todos-form__field-label", [
    "Title",
    "Assign card",
    "Due on"
  ]), f(
    ".new-card-modal form, #modal form",
    "data-bridge-form-success-message",
    [
      "Card added"
    ]
  ), f(
    ".new-card-modal form input, .new-card-modal form trix-editor, #modal form input, #modal form trix-editor",
    "placeholder",
    [
      "Type a card title",
      "Type names to assign",
      "Select a due date",
      "Describe your card here"
    ]
  ), t(".new-card-modal form footer, #modal form footer", [
    "Save card",
    "Save and add another",
    "Cancel"
  ]);
}
function I() {
  document.querySelectorAll(".schedule-day__dates").forEach(
    (e) => r(e, [
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
    (e) => r(e, [
      ..._(),
      ...arrayAbbrWeekdays()
    ])
  ), t(".schedule-day__events", [
    "Nothing’s on the schedule"
  ]);
}
function C() {
  document.querySelectorAll(".project-index__mystuff-header").forEach((e) => r(e, [
    "Your Assignments"
  ])), document.querySelectorAll(".project-index__assignments").forEach((e) => r(e, [
    "Up next –",
    "Stuff due soon and recently assigned",
    "see all"
  ]));
}
function F() {
  document.querySelectorAll(".panel-home__buttons").forEach((e) => r(e, ["Make a new project", "Invite people"])), document.querySelectorAll("header p").forEach(
    (e) => r(e, [
      "Pinned &amp; recent projects below",
      "View all in a list",
      "View templates",
      "Press",
      "anytime to jump"
    ])
  ), document.querySelectorAll("#home_project_cards").forEach((e) => r(e, ["Recently visited"])), document.querySelectorAll("section.project-index__mystuff").forEach(
    (e) => r(e, [
      "Your Schedule",
      "A few upcoming events",
      "see all"
    ])
  ), h(
    ".schedule-day:not(.schedule-day--placeholder)",
    I
  ), h(
    ".project-index__assignments ul li",
    C
  );
}
function H() {
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
    ..._()
  ]), t(".door-item", [
    "Open up"
  ]);
}
function D() {
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
function p(e = !1) {
  let n = y();
  switch (e && T(), n) {
    case "/1":
    case "/1/projects":
      F();
      break;
    case "/1/projects/1":
      H();
      break;
    case "/1/buckets/1/dock/edit":
      D();
      break;
    case "/1/buckets/1/card_tables/1":
      x();
      break;
    case "/1/buckets/1/card_tables/lists/1/cards/new":
      g();
      break;
  }
}
function R() {
  window.bc_trans_route = null, setInterval(() => {
    let e = y();
    if (window.bc_trans_route === null) {
      console.log("primeira página"), p(!0), window.bc_trans_route = e;
      return;
    }
    e != window.bc_trans_route && (console.log("pagina alterada"), p(!1)), window.bc_trans_route = e;
  }, 1e3);
}
function y() {
  let n = window.location.href.replace("//", "");
  return route = n.substring(n.indexOf("/")).replaceAll(/\d+/g, "1").replace(/\/$/, ""), route;
}
var O = "pt-BR";
window.bc_trans_map = null;
var J = chrome.runtime.getURL(`lang/${O}.json`);
(function() {
  fetch(J).then((e) => e.json()).then((e) => {
    window.bc_trans_map = e;
  }).then(() => {
    R();
  });
})();
