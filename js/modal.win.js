  //  Масив усіх ID модалок
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
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: false,     // ❗ дозволяє повторну анімацію при скролі
  mirror: true     // ❗ анімація працює і при скролі назад
});


window.addEventListener('load', () => { AOS.refreshHard(); });



