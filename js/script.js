$(function () {


    //banner
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        fade: true,
        dots: true,

    });

    //intro slider
    $('.intro_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        fade: true,
        dots: false,

    });

    //event slider
    $('.event_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        fade: false,


    });
    //post slider
    $('.post_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        fade: false,


    });
    //partner slider
    $('.partner_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
  }

  ]



    });
    //partner_content slider
    $('.partner_content_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,




    });


    //intro menu
    $('.intro_menu ul li').on('click', function () {
        $('.intro_menu ul li').removeClass('active');
        $(this).addClass('active');

    });

    // top tp bottom
    $('.toptobottom').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        });

    });


    //menuTop
    var menuTop = $('.custom_nav').offset().top;

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();


        if (scroll > menuTop) {
            $('.custom_nav').addClass('custom_navfix');
        } else {
            $('.custom_nav').removeClass('custom_navfix');
        }
        
        if(scroll>300){
            $('.toptobottom').fadeIn(500);
        }else{
            $('.toptobottom').fadeOut(500);
        }

    });

    //menu part

    $('#mynav ul li').on('click', function () {
        $('#mynav ul li').removeClass('active');
        $(this).addClass('active');

    });

    //smooth scroll

    $("#mynav ul li a").on('click', function (event) {


        if (this.hash !== "") {

            event.preventDefault();


            var hash = this.hash;


            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }
    });


});
