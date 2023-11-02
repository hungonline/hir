(function($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
            }
        });


        $("#to_top").click(function() {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function() {
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

        $('.vibeji-ham').off('click').on('click', function() {
            $('.vibeji-ham').removeClass('open');
            $(this).toggleClass('open');
            $('.main-menu,.overlay').toggleClass('open');
            $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });

        $('.sub_menu').click(function() {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function() {});
        });

        $('.overlay').click(function() {
            $('.main-menu,.overlay,.vibeji-ham').removeClass('open');
        });



    }


    //slide Gallery
    function swiper() {
        var swiperDoitac = new Swiper(".section-doi-tac .swiper-container", {
            slidesPerView: 'auto',
            spaceBetween: 0,
            loop: true,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
        });
        var swiperJob = new Swiper(".list-job .swiper-container", {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.list-job .swiper-button-next',
                prevEl: '.list-job .swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
        var slideCongtacvien = new Swiper('#slide-ctv .swiper-container', {
            spaceBetween: 16,
            slidesPerView: 3,
            navigation: {
                nextEl: '#slide-ctv .swiper-button-next',
                prevEl: '#slide-ctv .swiper-button-prev',
            },
            pagination: {
                el: "#slide-ctv .swiper-pagination",
                type: "fraction",
            },
        });
    }


    $(function() {
        AOS.init();
        backToTop();
        scrollBar();
        onCLick();
        swiper();
    });
})(jQuery);