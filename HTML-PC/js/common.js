(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
            }
        });


        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 40) {
                $('.topnav ').addClass('sticky');
            } else {
                $('.topnav ').removeClass('sticky');
            }
        });
    }

    //scrollBar
    function scrollBar() {
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }
    //onCLick
    function onCLick() {
        $('.auto_search_button').click(function () {
            $('.search-wrap input').focus();
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
            } else {
                $(this).removeClass('is-clicked');
            }
            $('.search-wrap ').animate({
                width: 'toggle'
            });
        });
        $('#vibeji-ham').off('click').on('click', function () {
            $(this).toggleClass('open');
            $('.main-menu').toggleClass('open');
            $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });
        
        $('.sub_menu').click(function () {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });

        $(".tab-default >a").click(function (event) {
            $(".tab-default >a").removeClass("active");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });

        $('.form-search input[name="keyword"]').on('keyup', (e) => {
            let query = $(e.currentTarget).val();
            if (query.length) {
                $(e.currentTarget).parents('.form-search').addClass('active');
                return;
            } else {
                $(e.currentTarget).parents('.form-search').removeClass('active');
                return;
            }
        });
        $('.form-search .btn_reset').click(function () {
            $('.form-search').removeClass("active");
        });


    }
    //Hover

    //slide Gallery
    function swiper() {
        var swiperBanner = new Swiper(".top-banner .swiper-container", {
            spaceBetween: 0,
            loop: false,
            navigation: {
                nextEl: ".top-banner .swiper-button-next",
                prevEl: ".top-banner .swiper-button-prev",
            },
            pagination: {
                el: ".top-banner .swiper-pagination",
                type: "progressbar",
            },
            speed: 1000,
            effect: 'fade',
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
        });
        var swiperVideo = new Swiper(".section-video .swiper-container", {
            spaceBetween: 0,
            loop: false,
            navigation: {
                nextEl: ".section-video .swiper-button-next",
                prevEl: ".section-video .swiper-button-prev",
            },
            pagination: {
                el: ".section-video .swiper-pagination",
                type: "progressbar",
            },
        });
        var swiperXemnhieu = new Swiper(".section-xemnhieu .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 36,
            navigation: {
                nextEl: ".section-xemnhieu .swiper-button-next",
                prevEl: ".section-xemnhieu .swiper-button-prev",
            },
            pagination: {
                el: ".section-xemnhieu .swiper-pagination",
                type: "progressbar",
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                }
            }
        });
    }


    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        swiper();
    });
})(jQuery);