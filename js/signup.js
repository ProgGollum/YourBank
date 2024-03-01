// Swiper
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const btnSwiperIndividual = document.querySelector('.swiper-individual');
const btnSwiperBusiness = document.querySelector('.swiper-business');

const swiperContent = document.querySelector('#swiper-content');
const swiperHidden = document.querySelector('#swiper-hidden');

btnSwiperBusiness.addEventListener('click', function() {
  swiperContent.classList.add('hidden');
  swiperHidden.classList.remove('hidden');

  btnSwiperIndividual.classList.remove("testimonials__information-button--active");
  btnSwiperBusiness.classList.add("testimonials__information-button--active");
});

btnSwiperIndividual.addEventListener('click', function() {
  swiperHidden.classList.add('hidden');
  swiperContent.classList.remove('hidden');

  btnSwiperBusiness.classList.remove('testimonials__information-button--active');
  btnSwiperIndividual.classList.add('testimonials__information-button--active');
});