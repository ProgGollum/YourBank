const btnIndividual = document.querySelector('#product-btn-individual');
const btnBusiness = document.querySelector('#product-btn-business');

const contentIndividual = document.querySelector('.individual');
const contentBusiness = document.querySelector('.business');

// Our Product
btnBusiness.addEventListener('click', function() {
  contentIndividual.classList.add('hidden');
  contentBusiness.classList.remove('hidden');

  btnIndividual.classList.remove('product__information-button--active');
  btnBusiness.classList.add('product__information-button--active');
});

btnIndividual.addEventListener('click', function() {
  contentIndividual.classList.remove('hidden');
  contentBusiness.classList.add('hidden');

  btnIndividual.classList.add('product__information-button--active');
  btnBusiness.classList.remove('product__information-button--active');
});

// Our Features
const btnOnline = document.querySelector('#button-online');
const btnFinancial = document.querySelector('#button-financial');
const btnCustomer = document.querySelector('#button-customer');

const contentSecond = document.querySelector('.features__cards--second');
const contentLast = document.querySelector('.features__card--last');

btnFinancial.addEventListener('click', function() {
  contentSecond.classList.add('hidden');

  btnOnline.classList.remove('features__tabulation-button--active');
  btnCustomer.classList.remove('features__tabulation-button--active');
  btnFinancial.classList.add('features__tabulation-button--active');
});

btnCustomer.addEventListener('click', function() {
  contentSecond.classList.remove('hidden');
  contentLast.classList.add('hidden');

  btnFinancial.classList.remove('features__tabulation-button--active');
  btnOnline.classList.remove('features__tabulation-button--active');
  btnCustomer.classList.add('features__tabulation-button--active');
});

btnOnline.addEventListener('click', function() {
  contentSecond.classList.remove('hidden');
  contentLast.classList.remove('hidden');

  btnCustomer.classList.remove('features__tabulation-button--active');
  btnFinancial.classList.remove('features__tabulation-button--active');
  btnOnline.classList.add('features__tabulation-button--active');
});

// Questions
const btnShow = document.querySelector('#button-show');

const hiddenContent = document.querySelector('#hidden-questions');
const darkerContent = document.querySelector('#darker-questions');

btnShow.addEventListener('click', function() {
  darkerContent.classList.remove('question__list-item--down');
  btnShow.classList.add('hidden');
  hiddenContent.classList.remove('hidden');
});

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