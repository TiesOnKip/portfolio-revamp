$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    $("#circularcursor").css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $("svg, a, button").hover(
    function () {
      $("body").addClass("button-hover");
    },
    function () {
      $("body").removeClass("button-hover");
    }
  );
});
