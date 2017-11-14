import $ from 'jquery'

$(function(){
    console.log(navigator)
    // $('.ua').text(navigator.userAgent)
    $('.uv').text(navigator.vendor)
    $('.wo').text(ua.indexOf('148'))

    function isFacebookApp() {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    }
})