
// //  Масив усіх ID модалок
const allModalIds = [
  "quest", 
  "livemusic", 
  "twist", 
  "surball", 
  "aqua", 
  "tatu", 
  "master",
  "bubbleshow", 
  "balloonshow", 
  "neonshow", 
  "neonballoon"
];

// Ініціалізація модалок
allModalIds.forEach((id) => {
  const openBtn = document.getElementById(`open-${id}-modall-btn`);
  const closeBtn = document.getElementById(`close-${id}-modall-btn`);
  const modal = document.getElementById(`${id}-modall`);
  const modalInner = modal?.querySelector(".mod-descript");

  if (!openBtn || !closeBtn || !modal || !modalInner) {
    console.warn(` Модалка "${id}" не знайдена повністю в DOM`);
    return;
  }

  // Відкрити
  openBtn.addEventListener("click", () => modal.classList.add("open"));

  // Закрити по кнопці
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));

  // Клік всередині — не закриває
  modalInner.addEventListener("click", (e) => {
    e._isClickWithinModal = true;
  });

  // Клік поза — закриває
  modal.addEventListener("click", (e) => {
    if (e._isClickWithinModal) return;
    modal.classList.remove("open");
  });
});

// Закриття відкритої модалки через Esc
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    allModalIds.forEach((id) => {
      const modal = document.getElementById(`${id}-modall`);
      if (modal?.classList.contains("open")) {
        modal.classList.remove("open");
      }
    });
  }
});



// AOS initialization

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,   // дозволяє повторну анімацію при скролі
    mirror: true   // анімація працює і при скролі назад
  });

  window.addEventListener('load', () => {
    AOS.refreshHard();
  });
});



// Slider

document.addEventListener("DOMContentLoaded", () => {

  let slideToShow = 0;

  const modalBtns = document.querySelectorAll('.gallery-modal-btn');
  const sliderContainer = document.querySelector('.splide');

  const slider = new Splide(sliderContainer).mount();

  // Логіка вибору слайду при кліку
  modalBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      const slideNumberToShow = button.getAttribute('data-index');
      slideToShow = Number(slideNumberToShow);
      console.log("Обраний слайд:", slideToShow);
    });
  });

  // Запуск MicroModal після того, як визначено `slider`
  MicroModal.init({
    onShow: function () {
      slider.go(slideToShow);
    }
  });

});



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


// Попап-вікно для відео мастер-класу
document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById('open-video-popup');
  const closeBtn = document.getElementById('close-video-popup');
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('popup-video');

  // Якщо хоча б одного елемента немає — виходимо
  if (!openBtn || !closeBtn || !modal || !video) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      video.pause();
      video.currentTime = 0;
    }
  });

});


// Рандомні заголовки для футера
  const headings = [
    "Бульбашки — то щастя. Замовляй та ставай щасливішим.",
    "Магія твістинг шоу поруч — просто його замов.",
    "Наше шоу — живе як музика, легке як мрія, яскраве як неон.",
    "Святковий вечір починається з магії неонового шоу та музики.",
    "Неонові хвилі. Мильна магія. Сміх дітей. Це все ми.",
    "Шоу мильних бульбашок, в яке хочеться зануритись знову і знову.",
    "Ми не просто робимо шоу — ми створюємо настрій."
  ];

  const randomIndex = Math.floor(Math.random() * headings.length);
  document.getElementById("footer-heading").textContent = headings[randomIndex];


  // Confetti effect
  // confetti({
  //   particleCount: 120,
  //   spread: 90,
  //   origin: { y: 0.6 }
  // });

// GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

// Анімація заголовків секцій
gsap.utils.toArray(".title").forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

// Анімація карток блогу
gsap.utils.toArray(".blog__item").forEach(item => {
  const image = item.querySelector(".blog__image img");
  const content = item.querySelector(".blog__poster");

  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    y: 60,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
  });

  // Паралакс картинки
  gsap.from(image, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      scrub: true
    },
    scale: 1.2,
    ease: "none"
  });

  // Плавне появлення тексту
  gsap.from(content, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out"
  });
});

// Анімація карток Майстер‑класів
gsap.utils.toArray(".creation__item").forEach(card => {
  const photo = card.querySelector(".photo");

  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
  });

  // Reveal фото
  gsap.from(photo, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
    },
    clipPath: "inset(0 100% 0 0)",
    duration: 1.2,
    ease: "power3.inOut"
  });
});


