$(document).on("click", 'a[href^="#top"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

$(document).on("click", 'a[href^="#welcome"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

$(document).on("click", 'a[href^="#menu"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    600
  );
});

$(document).on("click", 'a[href^="#dish"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

$(document).on("click", 'a[href^="#comment"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

$(document).on("click", 'a[href^="#contact"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

$(".contact").click(function () {
  $(".input, .area").val("");
});
