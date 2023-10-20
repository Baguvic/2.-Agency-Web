const navLink = document.querySelector(".nav-link");

// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navLink.classList.toggle("active");
};

document.querySelector("#menu").addEventListener("click", function (event) {
  event.preventDefault();
});

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navLink.contains(e.target)) {
    navLink.classList.remove("active");
  }
});
