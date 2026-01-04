// Гамбургер-меню
document.addEventListener("DOMContentLoaded", () => {
  const hamb = document.querySelector(".hamb");
  const navMenu = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".title-nav");

  if (!hamb || !navMenu) return;

  // Відкриває / закриває меню при натисканні на гамбургер
  hamb.addEventListener("click", () => {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Закриває меню при натисканні на будь-який пункт навігації
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamb.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
});
