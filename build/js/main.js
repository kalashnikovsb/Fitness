'use strict';

var telNumber = document.querySelector('.main-form__input[name="customer-phone"]');
var buyLink = document.querySelector('.button--introduction');
var buyAnchor = document.querySelector('[id=buy-subscription]');
var trainersList = document.querySelector('.trainers__list');
var trainerItemsAll = document.querySelectorAll('.trainers__item');
var trainerPrev = document.querySelector('.trainers__control-left');
var trainerNext = document.querySelector('.trainers__control-right');
var trainerWidth;
var trainerCount;
var trainerPosition;
var reviewsList = document.querySelector('.reviews__list');
var reviewsItemsAll = document.querySelectorAll('.reviews__item');
var reviewsPrev = document.querySelector('.reviews__control-left');
var reviewsNext = document.querySelector('.reviews__control-right');
var reviewWidth;
var reviewPosition;
var reviewCount = 1;

// Определение ширины элементов в зависимости от экрана
var screenWidthDetection = function () {
  if (trainersList) {
    trainersList.style.marginLeft = 0 + 'px';
  }
  if (reviewsList) {
    reviewsList.style.marginLeft = 0 + 'px';
  }
  if (window.matchMedia('(min-width: 320px)').matches) {
    trainerWidth = 256; // 226px + 30px
    trainerCount = 1;
    trainerPosition = 0;
    reviewWidth = 246; // 246px + 20px
    reviewPosition = 0;
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    trainerWidth = 298; // 266px + 30px
    trainerCount = 2;
    trainerPosition = 0;
    reviewWidth = 586; // 566px + 20px
    reviewPosition = 0;
  }

  if (window.matchMedia('(min-width: 1200px)').matches) {
    trainerWidth = 300; // 260px + 40px
    trainerCount = 4;
    trainerPosition = 0;
    reviewWidth = 580; // 560px + 20px
    reviewPosition = 0;
  }
};

// Предыдущий отзыв
var prevReviewItem = function () {
  reviewPosition += reviewWidth;
  reviewPosition = Math.min(reviewPosition, 0);
  if (reviewsList) {
    reviewsList.style.marginLeft = reviewPosition + 'px';
  }
};

// Следующий отзыв
var nextReviewItem = function () {
  reviewPosition -= reviewWidth;
  reviewPosition = Math.max(reviewPosition, -reviewWidth * (reviewsItemsAll.length - reviewCount));
  if (reviewsList) {
    reviewsList.style.marginLeft = reviewPosition + 'px';
  }
};

// Клики мышкой на контролах отзывов
reviewsPrev.addEventListener('click', prevReviewItem);
reviewsNext.addEventListener('click', nextReviewItem);

// Нажатие Enter на контроле отзывов
reviewsPrev.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    prevReviewItem();
  }
});

// Нажатие Enter на контроле отзывов
reviewsNext.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    nextReviewItem();
  }
});

// Переопределение ширины элементов при изменении экрана
window.addEventListener('resize', function () {
  screenWidthDetection();
});

// Предыдущий тренер
var prevTrainerItem = function () {
  trainerPosition += trainerWidth;
  trainerPosition = Math.min(trainerPosition, 0);
  if (trainersList) {
    trainersList.style.marginLeft = trainerPosition + 'px';
  }
};

// Следующий тренер
var nextTrainerItem = function () {
  trainerPosition -= trainerWidth;
  trainerPosition = Math.max(trainerPosition, -trainerWidth * (trainerItemsAll.length - trainerCount));
  if (trainersList) {
    trainersList.style.marginLeft = trainerPosition + 'px';
  }
};

// Клики мышкой на контролах тренеров
trainerPrev.addEventListener('click', prevTrainerItem);
trainerNext.addEventListener('click', nextTrainerItem);

// Нажатие Enter на контроле тренеров
trainerPrev.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    prevTrainerItem();
  }
});

// Нажатие Enter на контроле тренеров
trainerNext.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    nextTrainerItem();
  }
});

// Маска номера телефона
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

// Основной код
screenWidthDetection();
