'use strict';

var telNumber = document.querySelector('.main-form input[name="customer-phone"]');
var buyLink = document.querySelector('.button--introduction');
var buyAnchor = document.querySelector('[id=buy-subscription]');
var trainers = document.querySelector('.trainers');
var trainersList = trainers.querySelector('.trainers__list');
var trainerItemsAll = trainers.querySelectorAll('.trainers__item');
var trainerPrev = trainers.querySelector('.trainers__control-left');
var trainerNext = trainers.querySelector('.trainers__control-right');
var trainerWidth;
var trainerCount;
var trainerPosition;
var reviews = document.querySelector('.reviews');
var reviewsList = reviews.querySelector('.reviews__list');
var reviewsItemsAll = reviews.querySelectorAll('.reviews__item');
var reviewsPrev = reviews.querySelector('.reviews__control-left');
var reviewsNext = reviews.querySelector('.reviews__control-right');
var reviewWidth;
var reviewPosition;
var reviewCount = 1;

// Определение ширины элементов в зависимости от экрана
var screenWidthDetection = function () {
  if (trainers) {
    trainersList.style.marginLeft = 0 + 'px';
  }
  if (reviews) {
    reviewsList.style.marginLeft = 0 + 'px';
  }
  if (window.matchMedia('(min-width: 320px)').matches) {
    trainerWidth = 256; // 226px + 30px
    trainerCount = 1;
    trainerPosition = 0;
    reviewWidth = 266; // 246px + 20px
    reviewPosition = 0;
  }

  if (window.matchMedia('(min-width: 768px)').matches) {
    trainerWidth = 298; // 266px + 30px
    trainerCount = 2;
    trainerPosition = 0;
    reviewWidth = 606; // 566px + 40px
    reviewPosition = 0;
  }

  if (window.matchMedia('(min-width: 1200px)').matches) {
    trainerWidth = 300; // 260px + 40px
    trainerCount = 4;
    trainerPosition = 0;
    reviewWidth = 600; // 560px + 40px
    reviewPosition = 0;
  }
};

// Если блок тренеров сущесвует на странице
if (trainers) {
  // Предыдущий тренер
  var prevTrainerItem = function () {
    trainerPosition += trainerWidth;
    trainerPosition = Math.min(trainerPosition, 0);
    if (trainersList) {
      trainersList.style.marginLeft = trainerPosition + 'px';
      trainersList.style.transition = 'margin-left 0.5s';
    }
  };

  // Следующий тренер
  var nextTrainerItem = function () {
    trainerPosition -= trainerWidth;
    trainerPosition = Math.max(trainerPosition, -trainerWidth * (trainerItemsAll.length - trainerCount));
    if (trainersList) {
      trainersList.style.marginLeft = trainerPosition + 'px';
      trainersList.style.transition = 'margin-left 0.5s';
    }
  };

  // Клики на контролах
  trainerPrev.addEventListener('click', prevTrainerItem);
  trainerNext.addEventListener('click', nextTrainerItem);

  // Нажатия Enter на контролах
  trainerPrev.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      prevTrainerItem();
    }
  });

  trainerNext.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      nextTrainerItem();
    }
  });
}

// Если блок отзывов существует на странице
if (reviews) {
  // Предыдущий отзыв
  var prevReviewItem = function () {
    reviewPosition += reviewWidth;
    reviewPosition = Math.min(reviewPosition, 0);
    if (reviewsList) {
      reviewsList.style.marginLeft = reviewPosition + 'px';
      reviewsList.style.transition = 'margin-left 0.5s';
    }
  };

  // Следующий отзыв
  var nextReviewItem = function () {
    reviewPosition -= reviewWidth;
    reviewPosition = Math.max(reviewPosition, -reviewWidth * (reviewsItemsAll.length - reviewCount));
    if (reviewsList) {
      reviewsList.style.marginLeft = reviewPosition + 'px';
      reviewsList.style.transition = 'margin-left 0.5s';
    }
  };

  // Клики на контролах
  reviewsPrev.addEventListener('click', prevReviewItem);
  reviewsNext.addEventListener('click', nextReviewItem);

  // Нажатия Enter на контролах
  reviewsPrev.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      prevReviewItem();
    }
  });

  reviewsNext.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      nextReviewItem();
    }
  });
}


// Переопределение ширины элементов при изменении экрана
window.addEventListener('resize', function () {
  screenWidthDetection();
});

// Маска номера телефона
var telOptions = {
  mask: '+{7}(000)000-00-00'
};

if (telNumber) {
  var iMask;
  iMask(telNumber, telOptions);
}

if (buyLink) {
  buyLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    buyAnchor.scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}

// Основной код
screenWidthDetection();
