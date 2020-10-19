var chooseProgramItem = function () {
  var programChoiceItem = document.querySelectorAll(".program__choice-item");
  var programItem = document.querySelectorAll(".program__item");
  var programName;

  programChoiceItem.forEach(function (item) {
    item.addEventListener('click', toggleProgramChoiceItem)
  });

  function toggleProgramChoiceItem() {
    programChoiceItem.forEach(function (item) {
      item.classList.remove("program__choice-item--active")
    });
    this.classList.add("program__choice-item--active");
    programName = this.getAttribute("data-tab-name");
    selectProgramContent(programName);
  }

  function selectProgramContent(programName) {
    programItem.forEach(function (item) {
      if (item.classList.value.includes(programName)) {
        item.classList.add("program__item--active")
      } else {
        item.classList.remove("program__item--active");
      }
    })
  }
};

chooseProgramItem();
