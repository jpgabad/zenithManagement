
// WOW JS
new WOW().init();
var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[data-scroll-ignore]'
});

$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
        $('.z-navbar1').removeClass('onscroll-show');
        $('.z-navbar1').addClass('onscroll-hide');
        $('.z-navbar2').removeClass('onscroll-hide');
        $('.z-navbar2').addClass('onscroll-show');

        $('.z-navbar2[animate="nav2"]').addClass('wow animate__animated animate__fadeInDown');

    } else {
        $('.z-navbar1').removeClass('onscroll-hide');
        $('.z-navbar1').addClass('onscroll-show');

        $('.z-navbar2').removeClass('onscroll-show');
        $('.z-navbar2').addClass('onscroll-hide');
    }
});



$(".ics-display-btn").on("click", function () {
    $('.z-data-display[data-display="ics"]').removeClass('z-display-none');
    $('.z-data-display[data-display="ics"]').addClass('show');
    $('.z-data-display[data-display="cr"]').addClass('z-display-none');
    $('.z-data-display[data-display="cr"]').removeClass('show');
    $('.z-data-display[data-display="pms"]').addClass('z-display-none');
    $('.z-data-display[data-display="pms"]').removeClass('show');

    $('div[animate="ics"]').addClass('wow animate__animated animate__fadeInRight');
    $('div[animate="cr"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="pms"]').removeClass('wow animate__animated animate__fadeInRight');

    // gallery
    // from left
    $('div[animate="ics-l"]').addClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="ics-r"]').addClass('wow animate__animated animate__fadeInRight');
    $('div[animate="cr-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="cr-r"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="pms-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="pms-r"]').removeClass('wow animate__animated animate__fadeInRight');

});

$(".cr-display-btn").on("click", function () {
    $('.z-data-display[data-display="cr"]').removeClass('z-display-none');
    $('.z-data-display[data-display="cr"]').addClass('show');
    $('.z-data-display[data-display="ics"]').addClass('z-display-none');
    $('.z-data-display[data-display="ics"]').removeClass('show');
    $('.z-data-display[data-display="pms"]').addClass('z-display-none');
    $('.z-data-display[data-display="pms"]').removeClass('show');

    $('div[animate="cr"]').addClass('wow animate__animated animate__fadeInRight ');
    $('div[animate="ics"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="pms"]').removeClass('wow animate__animated animate__fadeInRight');


    // gallery
    // from left
    $('div[animate="cr-l"]').addClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="cr-r"]').addClass('wow animate__animated animate__fadeInRight');
    $('div[animate="ics-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="ics-r"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="pms-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="pms-r"]').removeClass('wow animate__animated animate__fadeInRight');

});


$(".pms-display-btn").on("click", function () {
    $('.z-data-display[data-display="pms"]').removeClass('z-display-none');
    $('.z-data-display[data-display="pms"]').addClass('show');
    $('.z-data-display[data-display="ics"]').addClass('z-display-none');
    $('.z-data-display[data-display="ics"]').removeClass('show');
    $('.z-data-display[data-display="cr"]').addClass('z-display-none');
    $('.z-data-display[data-display="cr"]').removeClass('show');

    $('div[animate="pms"]').addClass('wow animate__animated animate__fadeInRight');
    $('div[animate="cr"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="ics"]').removeClass('wow animate__animated animate__fadeInRight');


    // gallery
    // from left
    $('div[animate="pms-l"]').addClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="pms-r"]').addClass('wow animate__animated animate__fadeInRight');
    $('div[animate="ics-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="ics-r"]').removeClass('wow animate__animated animate__fadeInRight');
    $('div[animate="cr-l"]').removeClass('wow animate__animated animate__fadeInLeft');
    $('div[animate="cr-r"]').removeClass('wow animate__animated animate__fadeInRight');
});


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  
//<!-------------------Captcha Script------------------------------>

    //Refresh Captcha
    function refreshCaptcha(){
        var img = document.images['captcha_image'];
        img.src = img.src.substring(
            0,img.src.lastIndexOf("?")
        )+"?rand="+Math.random()*1000;
    }