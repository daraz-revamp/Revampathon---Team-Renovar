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

// Accessiblity Bar
function toggleAccBar() {
  const accBar = document.querySelector(".acc-bar");
  const currentRight = parseInt(getComputedStyle(accBar).right, 10);

  accBar.style.right = currentRight === 0 ? "-250px" : "0";
}

//Tour script

let current_Step = 1;

function nextStep() {
  switch (current_Step) {
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

  current_Step++;
}

function closeTour() {
  document.getElementById("tourOverlay").style.display = "none";
}

//Saturation Level Toggle

let saturationLevel = 0; // 0: Normal, 1: -25%, 2: -60%, 3: -100%
const saturationButton = document.getElementById("saturationButton");
const txtresizeButton = document.getElementById("acc-txtresize");
const navMain = document.getElementById("nav-main");
const navSec = document.getElementById("nav-sec");
const accBarButton = document.getElementById("acc-bar-button");
const accBar = document.getElementById("acc-bar");
const bodymain = document.getElementById("main");

// Level divs

saturationButton.addEventListener("click", () => {
  saturationLevel = (saturationLevel + 1) % 4;
  let label = "sat";
  updateSaturation();
  updateLevelDivs(label);
});

function updateSaturation() {
  const saturationValue = 100 - saturationLevel * 25;
  console.log(navMain);
  navMain.style.filter = `saturate(${saturationValue}%)`;
  navSec.style.filter = `saturate(${saturationValue}%)`;
  accBarButton.style.filter = `saturate(${saturationValue}%)`;
  accBar.style.filter = `saturate(${saturationValue}%)`;
  bodymain.style.filter = `saturate(${saturationValue}%)`;
}

function updateLevelDivs(label) {
  // Reset all level divs to white
  const lvl1 = document.getElementById(`${label}-lvl-1`);
  const lvl2 = document.getElementById(`${label}-lvl-2`);
  const lvl3 = document.getElementById(`${label}-lvl-3`);
  lvl1.style.backgroundColor = "white";
  lvl2.style.backgroundColor = "white";
  lvl3.style.backgroundColor = "white";

  // Update the background color based on the current saturation level
  if (saturationLevel >= 1) {
    lvl1.style.backgroundColor = "#2272a8";
  }
  if (saturationLevel >= 2) {
    lvl2.style.backgroundColor = "#2272a8";
  }
  if (saturationLevel === 3) {
    lvl3.style.backgroundColor = "#2272a8";
  }
}

txtresizeButton.addEventListener("click", () => {
  let label = "res";
  updateTextResizeLevelDivs();
  console.log(label);
});

let textResizeLevel = 0;
const textResizeButton = document.getElementById("acc-txtresize");
const allElements = document.querySelectorAll("*"); // Select all elements on the webpage

// Level divs for text resize
const resLvl1 = document.getElementById("res-lvl-1");
const resLvl2 = document.getElementById("res-lvl-2");
const resLvl3 = document.getElementById("res-lvl-3");

textResizeButton.addEventListener("click", () => {
  textResizeLevel = (textResizeLevel + 1) % 4;

  updateTextResize();

  //   updateCursorSize();

  updateTextResizeLevelDivs();
});

function updateTextResize() {
  const textSizeIncrement = textResizeLevel === 0 ? 0 : textResizeLevel * 1.2;

  allElements.forEach((element) => {
    const currentSize = window
      .getComputedStyle(element, null)
      .getPropertyValue("font-size");
    const newSize =
      textResizeLevel === 0
        ? ""
        : `calc(${currentSize} + ${textSizeIncrement}px)`;
    element.style.fontSize = newSize;
  });
}

function updateTextResizeLevelDivs() {
  // Reset all level divs to white
  resLvl1.style.backgroundColor = "white";
  resLvl2.style.backgroundColor = "white";
  resLvl3.style.backgroundColor = "white";

  // Update the background color based on the current text resize level
  if (textResizeLevel >= 1) {
    resLvl1.style.backgroundColor = "#2272a8";
  }
  if (textResizeLevel >= 2) {
    resLvl2.style.backgroundColor = "#2272a8";
  }
  if (textResizeLevel === 3) {
    resLvl3.style.backgroundColor = "#2272a8";
  }

  // Revert text size on the 4th click
  if (textResizeLevel === 0) {
    allElements.forEach((element) => {
      element.style.fontSize = ""; // Reset to original size
    });
  }
}

// Link Highlight

let linkHighlightActive = false; // Flag to track the state
const linkHighlightButton = document.getElementById("acc-link");
const linkLevel = document.getElementById("link-lvl");
const clickableElements = document.querySelectorAll("a, button");
const a2c_all = document.querySelectorAll("add-to-cart");

linkHighlightButton.addEventListener("click", () => {
  // Toggle the link highlight state
  linkHighlightActive = !linkHighlightActive;

  // Update link highlight level
  updateLinkHighlight();

  // Update link level div's background color
  updateLinkHighlightLevelDiv();
});

function updateLinkHighlight() {
  // Add or remove the 'link-highlight' class to clickable elements, excluding elements with the class 'add-to-cart'
  clickableElements.forEach((element) => {
    if (!element.classList.contains("add-to-cart")) {
      if (linkHighlightActive) {
        element.classList.add("link-highlight");
      } else {
        element.classList.remove("link-highlight");
      }
    }
  });
}

function updateLinkHighlightLevelDiv() {
  // Update the background color based on the current link highlight state
  linkLevel.style.backgroundColor = linkHighlightActive ? "#2272a8" : "white";
}

// Text Spacing Script

let textSpacingLevel = 0; // 0: Normal, 1: Increased spacing level 1, 2: Increased spacing level 2
const textSpacingButton = document.getElementById("acc-txtspace");
const textSpacingLevelDivs = [
  document.getElementById("spc-lvl-1"),
  document.getElementById("spc-lvl-2"),
  document.getElementById("spc-lvl-3"),
];
const navig_main = document.getElementById("container");
const sec_cont = document.getElementById("sec");

textSpacingButton.addEventListener("click", () => {
  // Increment text spacing level
  textSpacingLevel = (textSpacingLevel + 1) % 4; // Modulo 4 for four levels

  // Update text spacing for all elements
  updateTextSpacing();

  // Update level divs' background colors
  updateTextSpacingLevelDivs();
});

function updateTextSpacing() {
  const spacingIncrement = textSpacingLevel * 2;

  // Update text spacing for all elements
  document.body.style.letterSpacing = `${spacingIncrement}px`;
  navig_main.style.letterSpacing = `${spacingIncrement}px`;
  sec_cont.style.letterSpacing = `${spacingIncrement}px`;
}

function updateTextSpacingLevelDivs() {
  // Reset all level divs to white
  textSpacingLevelDivs.forEach((levelDiv) => {
    levelDiv.style.backgroundColor = "white";
  });

  // Update the background color based on the current text spacing level
  if (textSpacingLevel >= 1) {
    textSpacingLevelDivs[0].style.backgroundColor = "#2272a8";
  }
  if (textSpacingLevel >= 2) {
    textSpacingLevelDivs[1].style.backgroundColor = "#2272a8";
  }
  if (textSpacingLevel === 3) {
    textSpacingLevelDivs[2].style.backgroundColor = "#2272a8";
  }

  if (textSpacingLevel === 0) {
    document.body.style.letterSpacing = "";
  }
}
