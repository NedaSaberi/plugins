$(document).ready(function () {
  $(function () {
    $("#future_date").countdowntimer({
      dateAndTime: "2023/12/19 00:00:00",
      size: "lg",
      labelsFormat: true,
      displayFormat: "YODHMS",
        // timeSeparator: ":"
    });
  });
});
