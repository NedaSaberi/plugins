// datepicker-1
$(function () {
  $("#datepicker-1").datepicker();
});
// datepicker-2
 $(function () {
   $("#datepicker-2").datepicker();
 });
 // datepicker-3
  $(function () {
    $("#datepicker-3").datepicker({
      appendText: "(yy-mm-dd)",
      dateFormat: "yy-mm-dd",
      altField: "#datepicker-4",
      altFormat: "DD, d MM, yy",
    });
  });
  // datepicker-5
   $(function () {
     $("#datepicker-5").datepicker({
       beforeShowDay: function (date) {
         var dayOfWeek = date.getDay();
         // 0 : Sunday, 1 : Monday, ...
         if (dayOfWeek == 0 || dayOfWeek == 6) return [false];
         else return [true];
       },
     });
   });
  // datepicker-6
    $(function () {
      $("#datepicker-6").datepicker({
        showOn: "button",
        buttonImage: "images/calander-icon.jpg",
        buttonImageOnly: true,
      });
    });