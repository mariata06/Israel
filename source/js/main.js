var callbackPopup = document.querySelector(".popup--callback");
var callbackLink = document.querySelector(".page-header__callback-link");
var closeCallbackPopup = callbackPopup.querySelector(".popup__close");
var overlayForm = document.querySelector(".overlay__form");
var overlayOk = document.querySelector(".overlay__ok");
var callbackForm = document.querySelector(".callback-form");
var userName = callbackForm.querySelector("[name=user-name]");
var userPhone = callbackForm.querySelector("[name=user-phonenumber]");
var popupSuccess = document.querySelector(".popup--success");
var closePopupSuccess = popupSuccess.querySelector(".popup__close");
var popupButton = popupSuccess.querySelector(".popup__button");
var formCheckbox = document.querySelector(".callback-form__checkbox");
var formButton = document.querySelector(".callback-form__button");

var isStorageSupport = true;
var currentName = "";
var currentPhone = "";

try {
  currentName = localStorage.getItem("userName");
  currentPhone = localStorage.getItem("userPhone");
} catch (err) {
  isStorageSupport = false;
}

callbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  callbackPopup.classList.add("popup--callback--show");
  overlayForm.classList.add("overlay__form--show");
  userName.focus();
  console.log(currentPhone);
  if (currentName) {
    userName.value = currentName;
    userPhone.focus();
  } else {
    userName.focus();
  }

  if (currentPhone) {
    userPhone.value = currentPhone;
  } else {
    userPhone.focus();
  }
});

closeCallbackPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  callbackPopup.classList.remove("popup--callback--show");
  overlayForm.classList.remove("overlay__form--show");
});

function closePopup() {
  popupSuccess.classList.remove("popup--success--show");
  overlayOk.classList.remove("overlay__ok--show");
}

closePopupSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup();
});

popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup();
});

callbackForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userPhone", userPhone.value);
      popupSuccess.classList.add("popup--success--show");
    }
    callbackPopup.classList.remove("popup--callback--show");
    overlayForm.classList.remove("overlay__form--show");
    overlayOk.classList.add("overlay__ok--show");
    popupSuccess.classList.add("popup--success--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSuccess.classList.contains("popup--success--show")) {
      popupSuccess.classList.remove("popup--success--show");
      form.classList.remove("popup__form--show");
    }
  }
});

formButton.toggleAttribute("disabled");
formCheckbox.addEventListener("change", function () {

  if (formCheckbox.checked) {
    formButton.removeAttribute("disabled");
  } else {
    formButton.toggleAttribute("disabled");
  }
});
