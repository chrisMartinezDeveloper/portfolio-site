/////////////////////////////////////
// Homepage - text overlay animation
document.querySelectorAll(".project_cover").forEach((projectCover) => {
  ["mouseover", "mouseout"].forEach((event) => {
    projectCover.addEventListener(event, function () {
      projectCover
        .querySelector(".text_cover_overlay")
        .classList.toggle("hidden");
    });
  });
});

//////////////////
// Responsive nav
const navContainer = document.querySelector(".nav_container");
const pageLinkContainer = document.querySelector(".page_link_container");
const iconContainer = document.querySelector(".icon_container");
const hamburgerMenuContainer = document.querySelector(
  ".hamburger_menu_container"
);
const hamburgerIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

const displaySmallNav = function () {
  // Hide page links and icons on nav
  pageLinkContainer.classList.add("hidden");
  iconContainer.classList.add("hidden");

  // Display hamburger menu icon
  hamburgerMenuContainer.classList.remove("hidden");
};

// Nav for small screen size
if (window.innerWidth <= 1000) displaySmallNav();

// Listen for a change in screen size
window.addEventListener("resize", function () {
  if (window.innerWidth <= 1000) displaySmallNav();

  if (window.innerWidth > 1000) {
    // Display page links and icons
    pageLinkContainer.classList.remove("hidden");
    iconContainer.classList.remove("hidden");

    // Hide and close hamburger menu
    hamburgerMenuContainer.classList.add("hidden");
    menu.classList.add("hidden_menu");

    // Reset nav container height
    navContainer.style.height = "";
  }
});

// Hamburger menu icon click listener
hamburgerIcon.addEventListener("click", function () {
  console.log("Toggle");
  menu.classList.toggle("hidden_menu");
  console.log(menu);

  // Adjust nav container height for the hamburger menu
  navContainer.style.height = menu.classList.contains("hidden_menu")
    ? ""
    : "14.2rem";

  if (window.innerWidth <= 500) {
    navContainer.style.height = menu.classList.contains("hidden_menu")
      ? ""
      : "20.65rem";
  }
});
