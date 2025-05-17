// Function to toggle the hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.from(".section__text", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".section__pic-container", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
  });

  gsap.from("#socials-container", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.6
  });

  // About section animations
  gsap.from("#about .section__pic-container", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from("#about .about-details-container", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power3.out"
  });

  // Experience section animations
  gsap.from("#experience .title", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from("#experience .details-container", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Work Experience section animations
  gsap.from("#work-experience .details-container", {
    scrollTrigger: {
      trigger: "#work-experience",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });

  // Projects section animations
  gsap.from("#projects .color-container", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Certificates section animations
  gsap.from("#certificates .details-container", {
    scrollTrigger: {
      trigger: "#certificates",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Achievements section animations
  gsap.from("#achievements .details-container", {
    scrollTrigger: {
      trigger: "#achievements",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Contact section animations
  gsap.from("#contact .contact-info-upper-container", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });
});
