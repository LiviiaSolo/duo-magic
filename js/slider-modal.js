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









  