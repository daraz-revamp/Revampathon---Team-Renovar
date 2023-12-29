// function showSideBar() {
//   document.getElementById("sidebar").style.display = "block";
// }

// function closeSideBar() {
//   document.getElementById("sidebar").style.display = "none";
// }

const zero = "\u0966";
const one = "\u0967";
const two = "\u0968";
const three = "\u0969";
const four = "\u096A";
const five = "\u096B";
const six = "\u096C";
const seven = "\u096D";
const eight = "\u096E";
const nine = "\u096F";

function arabicToNepaliNumber(arabicNumber) {
  const arabicDigits = String(arabicNumber).split("");
  const nepaliDigits = arabicDigits.map((digit) => {
    switch (digit) {
      case "1":
        return one;
      case "2":
        return two;
      case "3":
        return three;
      case "4":
        return four;
      case "5":
        return five;
      case "6":
        return six;
      case "7":
        return seven;
      case "8":
        return eight;
      case "9":
        return nine;
      case "0":
        return zero;
      default:
        return digit;
    }
  });

  return nepaliDigits.join("");
}

let counter = document.getElementById("item-counter");
counter.innerText = arabicToNepaliNumber(
  sessionStorage.getItem("item_counter")
);

console.log(counter.innerText);

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
    counter.innerText = arabicToNepaliNumber(
      sessionStorage.getItem("item_counter")
    );
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

  let hour_np = arabicToNepaliNumber(hours);
  let min_np = arabicToNepaliNumber(minutes);
  let sec_np = arabicToNepaliNumber(seconds);

  document.getElementById(
    "counter"
  ).textContent = `${hour_np} घण्टा  : ${min_np} मिनेट : ${sec_np} सेकेन्ड`;

  if (timeDifference <= 0) {
    clearInterval(timer);
    document.getElementById("counter").textContent = "काउन्टडाउन समाप्त भयो";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateCounter(); // Initial call to avoid delay
const timer = setInterval(updateCounter, 1000);

// Accessiblity Bar
function toggleAccBar() {
  const accBar = document.querySelector(".acc-bar");
  const currentRight = parseInt(getComputedStyle(accBar).right, 10);

  accBar.style.right = currentRight === 0 ? "-250px" : "0";
}

//Tour script

let currentStep = 1;

function nextStep() {
  switch (currentStep) {
    case 1:
      alert("Step 1: This is your homepage.");
      break;
    case 2:
      alert("Step 2: Explore the navigation menu.");
      break;
    // Add more steps as needed

    default:
      closeTour();
  }

  currentStep++;
}

function closeTour() {
  document.getElementById("tourOverlay").style.display = "none";
}
