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
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 }
  });

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



// ------------

