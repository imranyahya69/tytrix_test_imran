var tl = $(".top-left").position();
var tlZ = $(".top-left").css("z-index");

var tr = $(".top-right").position();
var trZ = $(".top-right").css("z-index");
$(".top-right").css({ left: tr.left });

var bl = $(".bottom-center").position();
var blZ = $(".bottom-center").css("z-index");
$(".bottom-center").css({ top: bl.top });

var clickID;
var clicked = false;
var theZ;

$(".circle").click(function () {
  clicked = true;

  var position = $(this).position();

  $(this).css({ "z-index": 9999 });
  var curr_class = $(this).attr("class");
  $(".circle").each(function (index) {
    if (!$(this).hasClass(curr_class))
      $(this).css({
        opacity: "0",
        top: position.top,
        left: position.left,
        bottom: "auto",
        right: "auto",
      });
  });

  $(this).css({ transform: "scale(1)", "-webkit-transition-duration": "0.5s" });

  var t = $(this);
  clearTimeout(clickID);

  clickID = setTimeout(function () {
    t.css({
      "border-radius": 0,
      left: 0,
      top: 0,
      "padding-bottom": "100%",
      width: "100%",
    });
  }, 500);
});

$(".circle").hover(
  function () {
    theZ = $(this).css("z-index");
    console.log(theZ);
    if (!clicked)
      $(this).css({
        transform: "scale(1.07)",
        "-webkit-transition-duration": "0.3s",
      });
  },
  function () {
    $(this).css({ "z-index": theZ, transform: "scale(1)" });

    if (clicked) {
      $(this).css({
        "border-radius": "100%",
        "padding-bottom": "58.6%",
        width: "58.6%",
      });
      $(".circle").css({ bottom: "auto", right: "auto", opacity: 1 });
      $(".circle").each(function (index) {
        if ($(this).hasClass("top-left"))
          $(this).css({ top: tl.top, left: tl.left, "z-index": tlZ });

        if ($(this).hasClass("top-right"))
          $(this).css({ top: tr.top, left: tr.left, "z-index": trZ });

        if ($(this).hasClass("bottom-center"))
          $(this).css({ top: bl.top, left: bl.left, "z-index": blZ });
      });
    }
    clearTimeout(clickID);
    clicked = false;
  }
);

var resizeTimer;

$(window).on("resize", function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    location.reload();
  }, 250);
});



//progress bar

$('.ProgressBar-step').on("click", function () {
  $(this).addClass("is-current")
    .siblings().removeClass('is-current');
  
});
