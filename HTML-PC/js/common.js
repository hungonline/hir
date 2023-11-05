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

        $('.btn-top-ctv').off('click').on('click', function() {
            $('body').toggleClass('open-ctv');
        });
        $('.back-home').off('click').on('click', function() {
            $('body').removeClass('open-ctv');
        });

        $(".toggle-password").click(function() {
            $(this).toggleClass("on");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
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
        $('.form-search .btn_reset').click(function() {
            $('.form-search').removeClass("active");
        });

        $(".btn-fillter").click(function() {
            $(this).toggleClass("off");
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
        var swiperJobcolum = new Swiper(".job-slide-column .swiper-container", {
            slidesPerView: 4,
            slidesPerColumn: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: '.job-slide-column .swiper-button-next',
                prevEl: '.job-slide-column .swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1.2,
                    slidesPerColumn: 1,
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
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1.2,
                }
            }
        });
        var swiperBannerSign = new Swiper(".slide-banner .swiper-container", {
            speed: 500,
            effect: 'fade',
            pagination: {
                el: ".slide-banner .swiper-pagination",
                clickable: true,
            },
        });
        var swiperJobrow = new Swiper(".job-slide-row .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
                nextEl: '.job-slide-row .swiper-button-next',
                prevEl: '.job-slide-row .swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1.2,
                    spaceBetween: 16
                }
            }
        });
    }

    function onSelect2() {
        $(".select2").select2();
    }

    $(function() {
        AOS.init();
        backToTop();
        scrollBar();
        onCLick();
        swiper();
        onSelect2();
    });
})(jQuery);