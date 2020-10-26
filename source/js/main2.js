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
//var userPhone = requestForm.querySelector("[name=user-phonenumber]");

var userName = "";
var userPhone = "";

var contactsForm = document.forms[1];
var contactsFormButton = document.querySelector(".contacts__form-button");
//var userName = contactsForm.querySelector("[name=user-name]");
//var userPhone = contactsForm.querySelector("[name=user-phonenumber]");

var callbackForm = document.forms[2];
var formCheckbox = document.querySelector(".callback-form__checkbox");
//var userName = callbackForm.querySelector("[name=user-name]");
//var userPhone = callbackForm.querySelector("[name=user-phonenumber]");
var formButton = callbackForm.querySelector(".callback-form__button");

var isStorageSupport = true;
var currentName = "";
var currentPhone = "";

//console.log(localStorage.getItem("userName"));

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
  //console.log(userName);
  userPhone = callbackForm.elements.user_phonenumber;
  userName.focus();
  //console.log(currentPhone);
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

requestFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  //var idForm = requestForm.getAttribute("id");
  //console.log(idForm);
  userPhone = requestForm.elements.user_phonenumber;
  //userPhone.focus();
  //console.log(currentPhone);
  /*
  if (currentPhone) {
    userPhone.value = currentPhone;
  } else {
    userPhone.focus();
  }*/
  if (isStorageSupport) {
    localStorage.setItem("userPhone", userPhone.value);
    popupSuccess.classList.add("popup--success--show");
  }
  overlayOk.classList.add("overlay__ok--show");
  popupSuccess.classList.add("popup--success--show");
});

contactsFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  //var idForm = contactsForm.getAttribute("id");
  //console.log(idForm);
  userName = contactsForm.elements.user_name;
  userPhone = contactsForm.elements.user_phonenumber;
  if (isStorageSupport) {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userPhone", userPhone.value);
    popupSuccess.classList.add("popup--success--show");
  }

  /*
  //console.log(currentPhone);
  userName.focus();
  //console.log(currentPhone);
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
  */
  overlayOk.classList.add("overlay__ok--show");
  popupSuccess.classList.add("popup--success--show");
  //console.log(userName.placeholder);
});
