var accordionItemTrigger = document.querySelectorAll(".accordion__item-trigger");
var accordionItem = document.querySelectorAll(".accordion__item");
var arrowItems = document.querySelectorAll(".accordion__item-svg");

var activeArrow = document.querySelector(".accordion__item--active").querySelector(".accordion__item-svg");
activeArrow.style.transform = "rotate(180deg)";

accordionItemTrigger.forEach(function (item) {
  item.addEventListener("click", () => {
    arrowItems.forEach(function (item) {
      item.style.transform = "none";
    })

    const parent = item.parentNode;
    var arrowItem = item.querySelector(".accordion__item-svg");
    arrowItem.style.transform = "rotate(360deg)";
    if (parent.classList.contains("accordion__item--active")) {
      parent.classList.remove("accordion__item--active");
    } else {
      accordionItem.forEach((child) => child.classList.remove("accordion__item--active"))

      parent.classList.add("accordion__item--active");
      arrowItem.style.transform = "rotate(180deg)";
    }
  })
});
