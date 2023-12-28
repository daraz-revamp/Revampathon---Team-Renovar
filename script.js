// function showSideBar() {
//   document.getElementById("sidebar").style.display = "block";
// }

// function closeSideBar() {
//   document.getElementById("sidebar").style.display = "none";
// }

let counter = document.getElementById("item-counter");
counter.innerText = sessionStorage.getItem("item_counter");

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
let a2c_buttons = document.querySelectorAll(".add-to-cart");
let temp = 0;
console.log(a2c_buttons);
a2c_buttons.forEach(function (item) {
  item.addEventListener("click", () => {
    console.log("kwek");
    temp = Number(sessionStorage.getItem("item_counter"));
    temp += 1;
    sessionStorage.setItem("item_counter", temp);
    counter.innerText = sessionStorage.getItem("item_counter");
  });
});

// CAROUSEL SCRIPT

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;

function updateCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  const translateValue = -currentIndex * 100 + "%";
  carouselInner.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Counter Script

const targetDate = new Date();
targetDate.setHours(targetDate.getHours() + 2); // Example: 2 hours from now

function updateCounter() {
  const currentDate = new Date();
  const timeDifference = new Date(targetDate - currentDate);

  const hours = formatTime(timeDifference.getUTCHours());
  const minutes = formatTime(timeDifference.getUTCMinutes());
  const seconds = formatTime(timeDifference.getUTCSeconds());

  document.getElementById(
    "counter"
  ).textContent = `${hours}h : ${minutes}m : ${seconds}s`;

  if (timeDifference <= 0) {
    clearInterval(timer);
    document.getElementById("counter").textContent = "Countdown Expired";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateCounter(); // Initial call to avoid delay
const timer = setInterval(updateCounter, 1000);
