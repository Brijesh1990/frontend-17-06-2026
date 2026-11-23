
AOS.init({
duration: 700,
easing: "ease-out-cubic",
once: true,
offset: 70,
mirror: false,
disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

menuToggle.addEventListener("click", () => {
const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
menuToggle.setAttribute("aria-expanded", String(!isExpanded));
menuToggle.setAttribute("aria-label", isExpanded ? "Open menu" : "Close menu");
mobileMenu.classList.toggle("hidden", isExpanded);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Open menu");
mobileMenu.classList.add("hidden");
});
});

// loader js 
var myVar;
function mainFunction()
{
 setTimeout(display,"2500");
}
function display()
{
document.getElementById("loader").style="display:none";
document.getElementById("main").style="display:block";

}