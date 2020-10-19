var callbackPopup = document.querySelector(".popup--callback");
var callbackLink = document.querySelector(".page-header__callback-link");
var closeCallbackPopup = callbackPopup.querySelector(".popup__close");
var popupOverlay = document.querySelector(".overlay");

//var popup = document.querySelector(".modal-dialog");


//var close = popup.querySelector(".modal-close");

//var form = popup.querySelector(".form-wrapper");

//var userName = popup.querySelector("[name=userName]");

//var userEmail = popup.querySelector("[name=userEmail]");

//var userMessage = popup.querySelector("[name=userMessage]");

/*var isStorageSupport = true;
var currentName = "";
var currentEmail = "";

try {
  currentName = localStorage.getItem("userName");
  currentEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}
*/

/*
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  form.classList.add("form-show");
  userName.focus();
  if (currentName) {
    userName.value = currentName;
    userEmail.focus();
  } else {
    userName.focus();
  }

  if (currentEmail) {
    userEmail.value = currentEmail;
    userMessage.focus();
  } else {
    userEmail.focus();
  }
});
*/
callbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  callbackPopup.classList.add("popup--callback--show");
  popupOverlay.classList.add("overlay--show");
});

closeCallbackPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  callbackPopup.classList.remove("popup--callback--show");
  popupOverlay.classList.remove("overlay--show");
  //form.classList.remove("form-show");
  //form.classList.remove("form-error");
});

/*
form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      form.classList.remove("form-show");
    }
  }
});
*/
