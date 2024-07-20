// select Frage
const hideFrage = document.getElementById("qtt1");

// select table
const tables = document.querySelectorAll(".maintable table");
const hideLastTable = tables[tables.length - 1];

// Initial setup: hide Frage and last table
hideFrage.classList.add("hide");
hideLastTable.classList.add("hide");

// select last option
const qt0rs = document.querySelectorAll(".questiontable.q_single tbody tr");
const lastQt0r = qt0rs[qt0rs.length - 1];

// back button
const backBtn = document.getElementById("back_btn");
const nextBtn = document.getElementById("next_btn");

// Initial setup based on stored state
document.addEventListener("DOMContentLoaded", function () {
  const hideFrageState = localStorage.getItem("hideFrageState");
  const hideLastTableState = localStorage.getItem("hideLastTableState");
  const lastQt0rCheckedState = localStorage.getItem("lastQt0rCheckedState");

  // Hide Frage and last table if not shown
  if (hideFrageState !== "shown") {
    hideFrage.classList.add("hide");
  }

  if (hideLastTableState !== "shown") {
    hideLastTable.classList.add("hide");
  }

  // Add 'checked' class to lastQt0r if previously checked
  if (lastQt0rCheckedState === "checked") {
    lastQt0r.classList.add("checked");
  }
});

// Handle the click on any option to hide Frage
qt0rs.forEach((qt0r) => {
  if (qt0r !== lastQt0r) {
    qt0r.addEventListener("click", function () {
      hideFrage.classList.add("hide");
      hideLastTable.classList.add("hide"); // Add hide class when other options are clicked
      lastQt0r.classList.remove("checked"); // Remove checked class from lastQt0r

      // Save the state
      localStorage.setItem("hideFrageState", "hidden");
      localStorage.setItem("hideLastTableState", "hidden");
      localStorage.setItem("lastQt0rCheckedState", "unchecked");
    });
  }
});

// Handle the click on the back button if it exists
if (backBtn) {
  backBtn.addEventListener("click", function () {
    hideFrage.classList.remove("hide");
    hideLastTable.classList.toggle("hide");
    lastQt0r.classList.add("checked");

    // Save the state
    localStorage.setItem("hideFrageState", "shown");
    localStorage.setItem("hideLastTableState", hideLastTable.classList.contains("hide") ? "hidden" : "shown");
    localStorage.setItem("lastQt0rCheckedState", "checked");
  });
}

// Handle the click on the next button
nextBtn.addEventListener("click", function () {
  // Save the state
  localStorage.setItem("hideFrageState", hideFrage.classList.contains("hide") ? "hidden" : "shown");
  localStorage.setItem("hideLastTableState", hideLastTable.classList.contains("hide") ? "hidden" : "shown");
});

// Handle the click on the last option
lastQt0r.addEventListener("click", function () {
  hideFrage.classList.remove("hide");
  hideLastTable.classList.remove("hide");
  lastQt0r.classList.add("checked");

  // Save the state
  localStorage.setItem("hideFrageState", "shown");
  localStorage.setItem("hideLastTableState", "shown");
  localStorage.setItem("lastQt0rCheckedState", "checked");
});
