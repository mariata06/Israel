function swipe(event) {
  var programOne = document.querySelector(".program__choice-item--general");
  var programTwo = document.querySelector(".program__choice-item--academic");
  var programThree = document.querySelector(".program__choice-item--internship");
  var programFour = document.querySelector(".program__choice-item--volunteering");
  var programFive = document.querySelector(".program__choice-item--religious");

  var touch = event.targetTouches[0];
  var px = touch.pageX;
  var midPoint = Math.floor(screen.width/2);
  console.log(px);
  if (px > midPoint) {
    programOne.style.marginLeft= "-100%";
    programOne.style.transition = "1s";
  } else {
    programOne.style.marginLeft= "0px";
    programOne.style.transition = "1s";
  }
}
