/**
 * Template Name: Append
 * Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
 * Updated: Mar 17 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

// changed
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// (function() {
//   "use strict";

/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}

/**
 * Scroll top button
 */
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);

/**
 * Apply .scrolled class to the body as the page is scrolled down
 */
function toggleScrolled() {
  const selectBody = document.querySelector("body");
  const selectHeader = document.querySelector("#header");
  if (
    !selectHeader.classList.contains("scroll-up-sticky") &&
    !selectHeader.classList.contains("sticky-top") &&
    !selectHeader.classList.contains("fixed-top")
  )
    return;
  window.scrollY > 100
    ? selectBody.classList.add("scrolled")
    : selectBody.classList.remove("scrolled");
}

document.addEventListener("scroll", toggleScrolled);
window.addEventListener("load", toggleScrolled);

/**
 * Scroll up sticky header to headers with .scroll-up-sticky class
 */
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const selectHeader = document.querySelector("#header");
  if (!selectHeader.classList.contains("scroll-up-sticky")) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
    selectHeader.style.setProperty("position", "sticky", "important");
    selectHeader.style.top = `-${header.offsetHeight + 50}px`;
  } else if (scrollTop > selectHeader.offsetHeight) {
    selectHeader.style.setProperty("position", "sticky", "important");
    selectHeader.style.top = "0";
  } else {
    selectHeader.style.removeProperty("top");
    selectHeader.style.removeProperty("position");
  }
  lastScrollTop = scrollTop;
});

/**
 * Mobile nav toggle
 */
const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

function mobileNavToogle() {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  mobileNavToggleBtn.classList.toggle("bi-list");
  mobileNavToggleBtn.classList.toggle("bi-x");
}
mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll("#navmenu a").forEach((navmenu) => {
  navmenu.addEventListener("click", () => {
    if (document.querySelector(".mobile-nav-active")) {
      mobileNavToogle();
    }
  });
});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll(".navmenu .has-dropdown i").forEach((navmenu) => {
  navmenu.addEventListener("click", function (e) {
    if (document.querySelector(".mobile-nav-active")) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    }
  });
});

/**
 * Correct scrolling position upon page load for URLs containing hash links.
 */
window.addEventListener("load", function (e) {
  if (window.location.hash) {
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: "smooth",
        });
      }, 100);
    }
  }
});

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: ".glightbox",
});

/**
 * Initiate Pure Counter
 */
new PureCounter();

/**
 * Init isotope layout and filters
 */
document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
  let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
  let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
  let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

  let initIsotope;
  imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
    initIsotope = new Isotope(isotopeItem.querySelector(".isotope-container"), {
      itemSelector: ".isotope-item",
      layoutMode: layout,
      filter: filter,
      sortBy: sort,
    });
  });

  isotopeItem
    .querySelectorAll(".isotope-filters li")
    .forEach(function (filters) {
      filters.addEventListener(
        "click",
        function () {
          isotopeItem
            .querySelector(".isotope-filters .filter-active")
            .classList.remove("filter-active");
          this.classList.add("filter-active");
          initIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          if (typeof aosInit === "function") {
            aosInit();
          }
        },
        false
      );
    });
});

/**
 * Frequently Asked Questions Toggle
 */
document
  .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
  .forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
      faqItem.parentNode.classList.toggle("faq-active");
    });
  });

/**
 * Init swiper sliders
 */
function initSwiper() {
  document.querySelectorAll(".swiper").forEach(function (swiper) {
    let config = JSON.parse(
      swiper.querySelector(".swiper-config").innerHTML.trim()
    );
    new Swiper(swiper, config);
  });
}
window.addEventListener("load", initSwiper);

/**
 * Animation on scroll function and init
 */
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

// new js

//changed
// document.addEventListener("DOMContentLoaded", function () {
//   const appSettings = {
//     databaseURL:
//       "https://super-senior-b7b12-default-rtdb.europe-west1.firebasedatabase.app/",
//   };
//   const app = initializeApp(appSettings);
//   const database = getDatabase(app);
//   const youtbueInDB = ref(database, "youtube");

  const textInput = document.querySelector(".form-control"); // Assuming you have an input field with class "form-control"
  console.log(textInput)
  const uploadButton = document.querySelector(".btn-primary");
const profile = "abc";
uploadButton.addEventListener("click", () => {
  function displayvideo(textInput) {
    const videooo = document.querySelector(".final-solution");
    videooo.innerHTML += `              
    <div class="profile">
                  <div class="profile-header">
                      <img src="https://media.istockphoto.com/id/526947869/vector/man-silhouette-profile-picture.jpg?s=1024x1024&w=is&k=20&c=-_9Bhlpm_k7Ehpm3mbJLMcYNbDQuLQsizLDOY5hbpcs=" alt="Profile Image" />
                  </div>
                  <div class="profile-body">
                      <div class="profile-info">
                          <h1>${textInput.value}</h1>
                          <h2>@pintusingh</h1>
                          <p>Category : CSE</p>
                      </div>
                      <hr/>
              
               <div class="info">
                  <span>Company : Google</span>
                  <span>Position : SDE 1</span>
                  <span>Phone : 9909887899</span>
                  <span>Mail : pintu@gmail.com</span>
                  <span>Connect : <i class="bi bi-camera-video-fill"></i></span>
                
               </div>
                      <hr/>
              
                      <div class="my-profile">
                          <p>Chat        <i class="bi bi-chat-dots-fill"></i></p>
                      </div>
              
                  </div>
              </div>`;
  }
  displayvideo(textInput);
});
//   onValue(youtbueInDB, function (snapshot) {
//     let youtubeArray = snapshot.val();
//     // console.log(youtubeArray);
//     var video;

//     for (let key in youtubeArray) {
//       let inputValue = textInput.value;
//       if (key === inputValue) {
//         video = youtubeArray[key];

//         // console.log(video);
//         break;
//       }
//     }
//     // console.log(video);
//     displayvideo(video);

//     // Clear input field after processing
//     textInput.value = "";
//   });
// });

// });

// })();

// star-box
{
  /* <div class="stat-box">
<div>
    <h3>Company</h3>
    <p>Google</p>
</div>
<hr id="stat-partition"/>
<div>
    <h3>9,991</h3>
    <p>Followers</p>
</div>
</div> */
}
