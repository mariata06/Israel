var callbackPopup = document.querySelector(".popup--callback");
var callbackLink = document.querySelector(".page-header__callback-link");
var closeCallbackPopup = callbackPopup.querySelector(".popup__close");
var overlayForm = document.querySelector(".overlay__form");
var overlayOk = document.querySelector(".overlay__ok");
var popupSuccess = document.querySelector(".popup--success");
var closePopupSuccess = popupSuccess.querySelector(".popup__close");
var popupButton = popupSuccess.querySelector(".popup__button");

var requestFormButton = document.querySelector(".request__form-button");
var requestForm = document.forms[0];

var contactsForm = document.forms[1];
var contactsFormButton = document.querySelector(".contacts__form-button");

var callbackForm = document.forms[2];
var formCheckbox = document.querySelector(".callback-form__checkbox");
var formButton = callbackForm.querySelector(".callback-form__button");

var userName = "";
var userPhone = "";

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
  userName = callbackForm.elements.user_name;
  userPhone = callbackForm.elements.user_phonenumber;
  userName.focus();
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

var checkLocalStorage = function () {
  if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userPhone", userPhone.value);
  }
  overlayOk.classList.add("overlay__ok--show");
  popupSuccess.classList.add("popup--success--show");
}

callbackForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  checkLocalStorage();
  callbackPopup.classList.remove("popup--callback--show");
  overlayForm.classList.remove("overlay__form--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (overlayForm.classList.contains("overlay__form--show")) {
      overlayForm.classList.remove("overlay__form--show");
    } else if (overlayOk.classList.contains("overlay__ok--show")) {
        overlayOk.classList.remove("overlay__ok--show");
    }
  }
});

document.onclick = function (evt) {
  if (evt.target.className.toString().includes("overlay")) {
    overlayForm.classList.remove("overlay__form--show");
    overlayOk.classList.remove("overlay__ok--show");
  };
};

formButton.toggleAttribute("disabled");
formCheckbox.addEventListener("change", function () {

  if (formCheckbox.checked) {
    formButton.removeAttribute("disabled");
  } else {
    formButton.toggleAttribute("disabled");
  }
});

requestForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  userPhone = requestForm.elements.user_phonenumber;
  checkLocalStorage();
});

contactsForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  userName = contactsForm.elements.user_name;
  userPhone = contactsForm.elements.user_phonenumber;
  checkLocalStorage();
});
