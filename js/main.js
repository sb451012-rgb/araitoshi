/* ============================================
   株式会社西宮モコ コーポレートサイト
   main.js — 共通スクリプト
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  // --- Header scroll effect ---
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    });
  }

  // --- Mobile navigation ---
  const hamburger = document.querySelector(".header__hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // --- Fade-in on scroll ---
  var fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length > 0 && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Active nav link ---
  var currentPath = window.location.pathname;
  document.querySelectorAll(".header__nav a, .mobile-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && currentPath.endsWith(href)) {
      link.classList.add("is-active");
    }
  });
});
