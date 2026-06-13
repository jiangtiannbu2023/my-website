const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const filters = [...document.querySelectorAll(".filter")];
const articles = [...document.querySelectorAll("[data-category]")];
const revealElements = document.querySelectorAll(".reveal");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("open");
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    articles.forEach((article) => {
      const categories = article.dataset.category.split(" ");
      article.classList.toggle("is-hidden", selected !== "all" && !categories.includes(selected));
    });
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.getElementById("current-year").textContent = new Date().getFullYear();
