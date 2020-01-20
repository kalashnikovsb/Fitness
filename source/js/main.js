'use strict';

var telNumber = document.querySelector('.main-form__input[name="customer-phone"]');
var buyLink = document.querySelector('.button--introduction');
var buyAnchor = document.querySelector('[id=buy-subscription]');

var telOptions = {
  mask: '+{7}(000)000-00-00'
};

if (telNumber) {
  var popupMask = IMask(telNumber, telOptions);
}

if (buyLink) {
  buyLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}





var trainersList = document.querySelector('.trainers__list');
var trainersItems = document.querySelectorAll('.trainers__item');
var trainersPrev = document.querySelector('.trainers__control-left');
var trainersNext = document.querySelector('.trainers__control-right');

/* этот код помечает картинки, для удобства разработки */
// var counter = 1;
// for(var item of trainersItems) {
//   item.style.position = 'relative';
//   item.insertAdjacentHTML('beforeend', '<span style="position:absolute;left:0;top:0">${counter}</span>');
//   item++;
// }

/* конфигурация */
var width = 300; // ширина картинки
var count = 4; // видимое количество изображений
var position = 0; // положение ленты прокрутки

trainersPrev.onclick = function() {
  // position += width * count;
  position += width;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  trainersList.style.marginLeft = position + 'px';
};

trainersNext.onclick = function() {
  // position -= width * count;
  position -= width;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (trainersItems.length - count));
  trainersList.style.marginLeft = position + 'px';
};
