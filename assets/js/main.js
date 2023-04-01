(function ($) {
  "use strict";

  $(window).on("load", function () {
    isotopeInit();
  });

  /* Isotope Init */
  function isotopeInit() {
    $(".grid").isotope({
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
      masonry: {
        isFitWidth: true
      }
    });

    // filter items on button click
    $(".offer_nav__btn").on("click", function () {
      var filterValue = $(this).attr("data-filter");
      $(".grid").isotope({ filter: filterValue });

      // Toggle active class on button click
      $(".offer_nav__btn").removeClass("active");
      $(this).addClass("active");
    });
  }

})(jQuery);