'use strict';

var telNumber = document.querySelector('.main-form__input[name="customer-phone"]');

var telOptions = {
  mask: '+{7}(000)000-00-00'
};

if (telNumber) {
  var popupMask = IMask(telNumber, telOptions);
}
