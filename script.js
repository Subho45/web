// ========== Mobile Menu Toggle ==========
const navToggle = document.createElement("button");
navToggle.innerHTML = "☰";
navToggle.classList.add("menu-toggle");
document.querySelector("nav .nav-right").prepend(navToggle);

const navMenu = document.querySelector("nav .nav-right ul");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ========== Smooth Scroll ==========
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ========== Navbar Hide on Scroll ==========
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    navbar.style.top = "-80px"; // hide
  } else {
    navbar.style.top = "0"; // show
  }
  lastScroll = currentScroll;
});

// ========== Contact Form Validation ==========
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[placeholder='Your Name']").value.trim();
    const email = contactForm.querySelector("input[placeholder='Your Email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("⚠️ Please enter a valid email address!");
      return;
    }

    alert("✅ Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

// ========== Back to Top Button ==========
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
