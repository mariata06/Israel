var callbackPopup = document.querySelector(".popup--callback");
var callbackLink = document.querySelector(".page-header__callback-link");
var closeCallbackPopup = callbackPopup.querySelector(".popup__close");
var overlayForm = document.querySelector(".overlay__form");
var overlayOk = document.querySelector(".overlay__ok");
var popupSuccess = document.querySelector(".popup--success");
var closePopupSuccess = popupSuccess.querySelector(".popup__close");
var popupButton = popupSuccess.querySelector(".popup__button");
var formCheckbox = document.querySelector(".callback-form__checkbox");
var callbackForm = document.querySelector(".callback-form");
var userName1 = callbackForm.querySelector("[name=user-name1]");
var userPhone1 = callbackForm.querySelector("[name=user-phonenumber1]");
var formButton = callbackForm.querySelector(".callback-form__button");

var contactsFormButton = document.querySelector(".contacts__form-button");
var contactsForm = document.querySelector(".contacts__form");
var userName2 = contactsForm.querySelector("[name=user-name2]");
var userPhone2 = contactsForm.querySelector("[name=user-phonenumber2]");

var requestFormButton = document.querySelector(".request__form-button");
var requestForm = document.querySelector(".request__form");
var userPhone3 = requestForm.querySelector("[name=user-phonenumber3]");

var isStorageSupport = true;
var currentName1 = "";
var currentPhone1 = "";
var currentName2 = "";
var currentPhone2 = "";
var currentPhone3 = "";

console.log(localStorage.getItem("userName1"));

try {
  currentName1 = localStorage.getItem("userName1");
  currentPhone1 = localStorage.getItem("userPhone1");
  currentName2 = localStorage.getItem("userName2");
  currentPhone2 = localStorage.getItem("userPhone2");
  currentPhone3 = localStorage.getItem("userPhone3");

} catch (err) {
  isStorageSupport = false;
}

callbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  callbackPopup.classList.add("popup--callback--show");
  overlayForm.classList.add("overlay__form--show");
  userName1.focus();
  //console.log(currentPhone);
  if (currentName1) {
    userName1.value = currentName1;
    userPhone1.focus();
  } else {
    userName1.focus();
  }

  if (currentPhone1) {
    userPhone1.value = currentPhone1;
  } else {
    userPhone1.focus();
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
      localStorage.setItem("userName1", userName1.value);
      localStorage.setItem("userPhone1", userPhone1.value);
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
  var idForm = requestForm.getAttribute("id");
  console.log(idForm);
  userName2.focus();
  //console.log(currentPhone);
  if (currentName2) {
    userName2.value = currentName2;
    userPhone2.focus();
  } else {
    userName2.focus();
  }

  if (currentPhone2) {
    userPhone2.value = currentPhone2;
  } else {
    userPhone2.focus();
  }
});

contactsFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  var idForm = contactsForm.getAttribute("id");
  console.log(idForm);
  userName1.focus();
  //console.log(currentPhone);
  if (currentPhone3) {
    userPhone3.value = currentPhone3;
  } else {
    userPhone3.focus();
  }
});
