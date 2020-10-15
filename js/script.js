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

submit.addEventListener('click', function (evt) {
   if (!login.value || !password.value) {
      evt.preventDefault();
      newsPopup.classList.add('modal-error');
   }

   if (isStorageSupported) {
      localStorage.setItem('login', login.value);
   }
});

/* Slider */
let slider = document.querySelector('.slider');
let inputs = slider.querySelectorAll('input');

let changeBack = function (inp) {
   inp.addEventListener('click', function () {
      let checkedInput = slider.querySelector(':checked');
      let body = document.querySelector('body');

      if (checkedInput.classList.contains('slider__input--left')) {
         body.classList.add('page-body-1');
         body.classList.remove('page-body-2');
         body.classList.remove('page-body-3');

      }
      if (checkedInput.classList.contains('slider__input--mid')) {
         body.classList.add('page-body-2');
         body.classList.remove('page-body-1');
         body.classList.remove('page-body-3');
      }
      if (checkedInput.classList.contains('slider__input--right')) {
         body.classList.add('page-body-3');
         body.classList.remove('page-body-1');
         body.classList.remove('page-body-2');
      }
   });
};


for (let i = 0; i < inputs.length; i++) {
   changeBack(inputs[i]);
}

