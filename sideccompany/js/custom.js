// Navigation scroll
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60
        }, 900, 'easeInOutExpo', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        event.preventDefault();
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#collapsingNavbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 65 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#collapsingNavbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Owl carousel
$(document).ready(function() {
  $('#owl-licences').owlCarousel({
      loop:true,
      nav:false,
      items: 1,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplaySpeed: 1500,
      smartSpeed: 1500
  })
});
