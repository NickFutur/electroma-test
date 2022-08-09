$(document).ready(function() {
    $('.content-print__blocks-slaider').slick({


        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Окрытие и закрытие вкладок тему "Услуги типографии"
$(document).ready(function() {
    $("#turn-off1").css("display", "none");
    $('#turn-on1').mouseenter(function() {
        $('#turn-on1').hide();
        $('#turn-off1').fadeIn("slow");
    })
    $('#turn-off1').mouseleave(function() {
        $('#turn-off1').hide();
        $('#turn-on1').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off1').hide();
        $('#turn-on1').fadeIn("slow");
    })

    $("#turn-off2").css("display", "none");
    $('#turn-on2').mouseenter(function() {
        $('#turn-on2').hide();
        $('#turn-off2').fadeIn("slow");
    })
    $('#turn-off2').mouseleave(function() {
        $('#turn-off2').hide();
        $('#turn-on2').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off2').hide();
        $('#turn-on2').fadeIn("slow");
    })

    $("#turn-off3").css("display", "none");
    $('#turn-on3').mouseenter(function() {
        $('#turn-on3').hide();
        $('#turn-off3').fadeIn("slow");
    })
    $('#turn-off3').mouseleave(function() {
        $('#turn-off3').hide();
        $('#turn-on3').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off3').hide();
        $('#turn-on3').fadeIn("slow");
    })
    $("#turn-off4").css("display", "none");
    $('#turn-on4').mouseenter(function() {
        $('#turn-on4').hide();
        $('#turn-off4').fadeIn("slow");
    })
    $('#turn-off4').mouseleave(function() {
        $('#turn-off4').hide();
        $('#turn-on4').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off4').hide();
        $('#turn-on4').fadeIn("slow");
    })

    $("#turn-off5").css("display", "none");
    $('#turn-on5').mouseenter(function() {
        $('#turn-on5').hide();
        $('#turn-off5').fadeIn("slow");
    })
    $('#turn-off5').mouseleave(function() {
        $('#turn-off5').hide();
        $('#turn-on5').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off5').hide();
        $('#turn-on5').fadeIn("slow");
    })
    $("#turn-off6").css("display", "none");
    $('#turn-on6').mouseenter(function() {
        $('#turn-on6').hide();
        $('#turn-off6').fadeIn("slow");
    })
    $('#turn-off6').mouseleave(function() {
        $('#turn-off6').hide();
        $('#turn-on6').fadeIn("slow");
    })
    $('.button-close').click(function() {
        $('#turn-off6').hide();
        $('#turn-on6').fadeIn("slow");
    })

    // Окрытие и закрытие вкладок тему "Что мы делаем"

    $(".content-work__block-on").css("display", "none");
    $('.content-work__block-off').mouseenter(function() {
        $('.content-work__block-off').hide();
        $('.content-work__block-on').fadeIn("fast");
    })
    $('.content-work__block-on').mouseleave(function() {
        $('.content-work__block-on').hide();
        $('.content-work__block-off').fadeIn("fast");
    })

    $(".content-work__block-on-ad").css("display", "none");
    $('.content-work__block-off-ad').mouseenter(function() {
        $('.content-work__block-off-ad').hide();
        $('.content-work__block-on-ad').fadeIn("fast");
    })
    $('.content-work__block-on-ad').mouseleave(function() {
        $('.content-work__block-on-ad').hide();
        $('.content-work__block-off-ad').fadeIn("fast");
    })

    $(".content-work__block-on-logo").css("display", "none");
    $('.content-work__block-off-logo').mouseenter(function() {
        $('.content-work__block-off-logo').hide();
        $('.content-work__block-on-logo').fadeIn("fast");
    })
    $('.content-work__block-on-logo').mouseleave(function() {
        $('.content-work__block-on-logo').hide();
        $('.content-work__block-off-logo').fadeIn("fast");
    })

    $(".content-work__block-on-print").css("display", "none");
    $('.content-work__block-off-print').mouseenter(function() {

        $('.content-work__block-off-print').hide();
        $('.content-work__block-on-print').fadeIn("fast");
    })
    $('.content-work__block-on-print').mouseleave(function() {
        $('.content-work__block-on-print').hide();
        $('.content-work__block-off-print').fadeIn("fast");
    })
});

// Боковое меню при наведении и клике на него
$("#side-menu__block2").css("display", "none");
$('#side-menu__block1').click(function() {
        $('#side-menu__block1').hide();
        $('#side-menu__block2').fadeIn("slow");
    })
    // движение стрелочки при наведении
$('#side-menu__block1').mouseover(function() {
    $(".side-menu__arrow").animate({
        'margin-top': '28px'
    }, 1500);
})
$('#side-menu__block1').mouseout(function() {
        $(".side-menu__arrow").animate({
            'margin-top': '247px'
        }, 1500);
        $(".side-menu__arrow").stop(false, false); //небольшой баг при срабатывании, иногда требуется открыть меню для того, чтобы стрелка опустилась вниз
    })
    // скрывает меню при исчезании наведения на меню
$('#side-menu__block2').mouseleave(function() {
    $('#side-menu__block2').hide();
    $('#side-menu__block1').fadeIn("slow");
})
$('.side-menu__link').click(function() {
        $('#side-menu__block2').hide();
        $('#side-menu__block1').fadeIn("slow");
    })
    // скрытие и открытие бокового меню по закрывающему крестику
$('.button-close-menu').click(function() {
    $('.side-menu__block2').hide();
    $('.side-menu__block1').fadeIn("slow");
})