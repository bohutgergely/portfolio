/**
 * Created by gergely.bohut on 2017. 02. 24..
 */
$(window).scroll(function() {
    var hT = $('#megjelenes').offset().top,
        hH = $('#megjelenes').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){

    }
});