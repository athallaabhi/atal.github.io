// scripts.js
$(document).ready(function () {
  $("nav ul li a").click(function (e) {
    e.preventDefault();

    // Get the section ID based on the link href
    var target = $(this).attr("href").split("/")[2];

    // Hide all sections
    $("section").addClass("hidden");

    // Show the corresponding section
    if (target == "") {
      $("#homepage").removeClass("hidden");
    } else {
      $("#" + target).removeClass("hidden");
    }
  });

  // Show homepage by default
  $("#homepage").removeClass("hidden");
});
