const button1 = document.getElementById("educationBtn");
const button2 = document.getElementById("projectsBtn");
const education = document.querySelector("#education");
const projects = document.querySelector("#projects");

const selectEducationBtn = () => {
  projects.classList.remove("qualification__active");
  education.classList.add("qualification__active");
  button1.classList.add("shadow");
  button2.classList.remove("shadow");
};

const selectProjectsBtn = () => {
  education.classList.remove("qualification__active");
  projects.classList.add("qualification__active");
  button2.classList.add("shadow");
  button1.classList.remove("shadow");
};

button1.addEventListener("click", selectEducationBtn);
button2.addEventListener("click", selectProjectsBtn);

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
      document.querySelector(".l-header").classList.remove("box_shodow");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
      document.querySelector(".l-header").classList.add("box_shodow");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=======Scroll up button=======*/
const scrollup = document.querySelector(".moveToUp");

const scrollUpAction = () => {
  if (this.scrollY >= 560) {
    scrollup.classList.add("showMoveToUp");
    console.log("scroll down")
  } else {
    scrollup.classList.remove("showMoveToUp");
    console.log("scroll up");
  }
};

window.addEventListener("scroll", scrollUpAction);

/*===== CHANGE THEME =====*/
const themeBtn = document.getElementById("theme_btn")
const darkTheme = "dark_theme"
const iconTheme = "uil-sun"


const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"

const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? "uil-moon" : "uil-sun"

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeBtn.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeBtn.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .carousel", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data,box,.qualification__container, .qualification__tabs, .work__img, .contact__input", { interval: 200 });
