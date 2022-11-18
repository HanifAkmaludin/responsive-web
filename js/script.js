const navbar = document.getElementById("navbar");
const containerNav = document.querySelector("#navbar .container");
window.addEventListener("scroll", () => {
    containerNav.classList.toggle("area-nav", window.scrollY > 0);
    navbar.classList.toggle("border-b", window.scrollY == 0);
});
