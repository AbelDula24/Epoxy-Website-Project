function init() {
  // Initialize AOS with improved easing
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });

  // Preloader
  const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 500);
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Hide mobile menu after clicking a link
      const nav = document.querySelector("nav ul");
      if (nav.classList.contains("visible")) {
        nav.classList.remove("visible");
      }
    });
  });

  // Back-to-top button
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "↑";
  backToTopButton.classList.add("back-to-top");
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(backToTopButton);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Mobile menu toggle button with animated icon
  const navigation = document.querySelector("#navigation");
  const menuToggle = document.querySelector("#menu-toggle");
  menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("show");
  });

  // Initialize AOS
  AOS.init();
}

// Fade-out effect for mobile menu when link is clicked
const style = document.createElement("style");
style.innerHTML = `
  .menu-toggle .bar {
    width: 100%;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  .menu-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .menu-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  nav ul.visible {
    display: block;
    animation: fadeOut 0.3s forwards;
  }

  .back-to-top {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    z-index: 999;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .back-to-top:hover {
    opacity: 1;
  }

  @keyframes fadeOut {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", init);
