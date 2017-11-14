import $ from 'jquery'

$(function(){
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log(navigator)
    $('.ua').text(navigator.userAgent)
    $('.uv').text(ua.indexOf('FBAV/'))
    $('.wo').text(ua.slice(127,130))

    function isFacebookApp() {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    }
})