$(function () {

  $(document).ready(function () {
    var saveBtn = document.querySelectorAll(".saveBtn");

    saveBtn.forEach(function (node) {

      node.addEventListener("click", function () {

        var description = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        localStorage.setItem(time, description);

      })
    });


    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));


    var elements = $(".time-block");
    var d = new Date();
    var h = d.getHours();
    var dateNum = d.getUTCDate();


    for (i = 0; i < elements.length; i++) {
      var t = parseInt(elements[i].getAttribute("data-hour"));

      if (h < t) {
        elements[i].classList.add('future');
        elements[i].classList.remove('past');
        elements[i].classList.remove('present');
      } else if (h > t) {
        elements[i].classList.add('past');
        elements[i].classList.remove('future');
        elements[i].classList.remove('present');
      } else if (h === t) {
        elements[i].classList.add('present');
        elements[i].classList.remove('future');
        elements[i].classList.remove('past');
      } else if (h > 16 && h < 9) {
        elements[i].classList.add('future');
        elements[i].classList.remove('past');
        elements[i].classList.remove('present');
      }
    }

    let date = document.getElementById('currentDay')

    if ([1, 21, 31].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "st"
    } else if ([2, 22].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "nd"
    } else if ([3, 23].includes(dateNum)) {
      date.innerHTML = dayjs().format('dddd MMMM D') + "rd"
    } else {
      date.innerHTML = dayjs().format('dddd MMMM D') + "th"
    }
  })
});