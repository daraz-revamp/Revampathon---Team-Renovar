// function showSideBar() {
//   document.getElementById("sidebar").style.display = "block";
// }

// function closeSideBar() {
//   document.getElementById("sidebar").style.display = "none";
// }

let counter = document.getElementById("item-counter");
counter.innerText = "0";

function toggleDropdown(a) {
  a.classList.toggle("active");
  if (a.classList.contains("active")) {
    a.innerText = "See All v";
  } else {
    a.innerText = "See All >";
  }
}

function showSideBar() {
  const sidebar = document.querySelector(".sidebar");
  const currentLeft = parseInt(getComputedStyle(sidebar).left, 10);

  sidebar.style.left = currentLeft === 0 ? "-350px" : "0";
}

function closeSideBar() {
  document.querySelector(".sidebar").style.left = "-350px";
}

function add_item() {
  counter.innerText = Number(counter.innerText) + 1;
}
