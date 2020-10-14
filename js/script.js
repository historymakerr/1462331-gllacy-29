/* Slider */

$(function() {
   $('.slider-container').slick({
      arrows: false,
      dots: true
   });   

   var bgs = [
      '#849D8F',   //фон при переходе на 1 слайдер
      '#8996A6', //фон при переходе на 2 слайдер
      '#9D8B84',  //фон при переходе на 3 слайдер
      // .....
   ];

   var img = [
      'url("../img/slider-back-left.png")',
      'url("../img/slider-back-mid.png")',
      'url("../img/slider-back-right.png")'
   ];

   $('.slider-container').on('afterChange', function (e, slick, index) {
      $('body').css('background-color', bgs[index]);
      $('body').css('background-image', img[index]);
   });
});







/* Modal */

let newsPopup = document.querySelector('.news__popup');
let newsFormOpen = document.querySelector('.contacts-button');
let newsFormClose = newsPopup.querySelector('.news__popup-cross');

let login = newsPopup.querySelector('[name="login"]');
let password = newsPopup.querySelector('[name="password"]');
let submit = newsPopup.querySelector('.news__popup-button');

let isStorageSupported = true;
let storage = '';

try {
   storage = localStorage.getItem('login');
} catch (err) {
   isStorageSupported = false;
}


newsFormOpen.addEventListener('click', function (evt) {
   evt.preventDefault();
   newsPopup.classList.add('modal-show');

   if (storage) {
      login.value = localStorage.getItem('login');
   } else {
      login.focus();
   }
});

newsFormClose.addEventListener('click', function () {
   newsPopup.classList.remove('modal-show');
   newsPopup.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
   if (newsPopup.classList.contains('modal-show')) {
      if (evt.key === 'Escape') {
         newsPopup.classList.remove('modal-show');
         newsPopup.classList.remove('modal-error');
      }
   }
});

/* Modal-required */

submit.addEventListener('click', function(evt) {
   if (!login.value || !password.value) {
      evt.preventDefault();
      newsPopup.classList.add('modal-error');
   }

   if (isStorageSupported) {
      localStorage.setItem('login', login.value);
   }
});
