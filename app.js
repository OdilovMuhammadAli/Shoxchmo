function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      document.querySelector(".nav-menu").classList.remove("active");
    }
  });
});

function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

function scrollToReservation() {
  document.getElementById("reservation").scrollIntoView({ behavior: "smooth" });
}

const reveals = document.querySelectorAll(".reveal");

function checkReveal() {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", checkReveal);
checkReveal();

function handleReservation(e) {
  e.preventDefault();
  alert("Rahmat! Tez orada siz bilan bog'lanamiz.");
  e.target.reset();
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)";
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
  }
});
