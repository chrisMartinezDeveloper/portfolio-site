import personalLogo from "../img/personal-logo.png";
import aboutPage from "../../about.html";

////////////
// Add Nav
const navContainer = document.querySelector(".nav_container");
console.log(document.querySelector(".header_container"));
const headerContainerCondition = document
  .querySelector(".header_container")
  .classList.contains("about");

let workActiveAttribute = headerContainerCondition ? "" : "active";
let aboutActiveAttribute = headerContainerCondition ? "active" : "";
console.log(workActiveAttribute, aboutActiveAttribute);
if (document.querySelector(".text_container.project")) {
  workActiveAttribute = aboutActiveAttribute = "";
}

const navHTML = `
  <div class="hamburger_menu_container hidden">
        <div class="hamburger_menu">
          <i class="fa-solid fa-bars"></i>
          <ul class="menu hidden">
            <li class="menu_item ${workActiveAttribute}">
              <a href="https://chrismartinezportfolio.netlify.app/">Work</a>
            </li>
            <li class="menu_item ${aboutActiveAttribute}"><a href="${aboutPage}">About</a></li>
            <li class="menu_item icons">
              <a href="https://github.com/ChrisMartinezDesign" target="_blank">
                <i class="fa-brands fa-github menu_icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/chrismartinezdesign/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin-in menu_icon"></i>
              </a>
              <a
                href="https://www.instagram.com/chrismartinezdesign/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram menu_icon"></i>
              </a>
              <a
                href="mailto: chrismartinezdesign@gmail.com"
                target="_blank"
                ><i class="fa-solid fa-envelope menu_icon"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <div class="page_link_container">
          <ul>
            <li class="page_link ${workActiveAttribute}">
              <a href="https://chrismartinezportfolio.netlify.app/">Work</a>
            </li>
            <li class="page_link ${aboutActiveAttribute}"><a href="${aboutPage}">About</a></li>
          </ul>
        </div>
        <div class="personal_logo_container">
          <a
            href="https://chrismartinezportfolio.netlify.app/"
            class="personal_logo_link"
          >
            <img
              src="${personalLogo}"
              alt="Personal Logo"
              class="personal_logo"
              width="300"
              height="300"
            />
          </a>
        </div>
        <div class="icon_container">
          <ul>
            <li class="icon_link">
              <a href="https://github.com/ChrisMartinezDesign" target="_blank"
                ><i class="fa-brands fa-github"></i
              ></a>
            </li>
            <li class="icon_link">
              <a
                href="https://www.linkedin.com/in/chrismartinezdesign/"
                target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i
              ></a>
            </li>
            <li class="icon_link">
              <a
                href="https://www.instagram.com/chrismartinezdesign/"
                target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li class="icon_link">
              <a
                href="mailto: chrismartinezdesign@gmail.com"
                target="_blank"
                ><i class="fa-solid fa-envelope"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
`;

navContainer.insertAdjacentHTML("afterbegin", navHTML);

//////////////
// Add Footer
const footerContainer = document.querySelector(".footer");
const footerHTML = `
<p class="copyright">&#169;Copyright by Chris Martinez Design 2022</p>
`;

footerContainer.insertAdjacentHTML("afterbegin", footerHTML);

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
    menu.classList.add("hidden");

    // Reset nav container height
    navContainer.style.height = "";
  }
});

// Hamburger menu icon click listener
hamburgerIcon.addEventListener("click", function () {
  console.log("Toggle");
  menu.classList.toggle("hidden");
  console.log(menu);

  // Adjust nav container height for the hamburger menu
  navContainer.style.height = menu.classList.contains("hidden")
    ? ""
    : "14.2rem";

  if (window.innerWidth <= 500) {
    navContainer.style.height = menu.classList.contains("hidden")
      ? ""
      : "21.5rem";
  }
});
