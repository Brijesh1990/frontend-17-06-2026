// aos animations
AOS.init({
duration: 700,
easing: "ease-out-cubic",
once: true,
offset: 70,
mirror: false,
disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});


// navigation toggler
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

// javascript form validation

function validForm()
{
if(document.frm.name.value=="")
{
alert('Please enter your Name here')
document.frm.name.focus();
return false;
}    

// accept only character in name 
var nm=/^[a-zA-Z]+$/;
if(!nm.test(document.frm.name.value))
{
alert('Please enter your Name only alphabetic character here')
document.frm.name.focus();
return false;
}

if(document.frm.email.value=="")
{
alert('Please enter your Email here')
document.frm.email.focus();
return false;
}    

// accept only a valid email address 
var em=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(!em.test(document.frm.email.value))
{
alert('Please enter your Valid email address')
document.frm.email.focus();
return false;
}

// phone number
if(document.frm.phone.value=="")
{
alert('Please enter your Phone here')
document.frm.phone.focus();
return false;
}    
var ph=/^\d{10}$/;
if(!ph.test(document.frm.phone.value))
{
alert('Please min 10 and max 10 digit of Phone numbers only in Digits')
document.frm.phone.focus();
return false;
}
// subject 
if(document.frm.subject.value=="")
{
alert('Please enter your Subject here')
document.frm.subject.focus();
return false;
}    

// pet input
if(document.frm.pet.value=="")
{
alert('Please enter your Pet here')
document.frm.pet.focus();
return false;
}    

// message
if(document.frm.message.value=="")
{
alert('Please enter your Message  here')
document.frm.message.focus();
return false;
}    





}