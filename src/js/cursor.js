$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    $("#circularcursor").css({
      left: e.pageX,
      top: e.pageY
    });
  });

  // Button hover effect
  $("svg").hover(
    function () {
      // Mouse enter
      $("body").addClass("button-hover");
    },
    function () {
      // Mouse leave
      $("body").removeClass("button-hover");
    }
  );
});
