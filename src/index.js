import $ from 'jquery'

$(function(){
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log(navigator)
    $('.ua').text(navigator.userAgent)
    $('.uv').text(ua.indexOf('FBAV/'))
    $('.wo').text(isFacebookApp(148))

    function isFacebookApp(version) {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        // return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
        var findFBAV =ua.indexOf('FBAV/')
        var FBversion_now = Number(ua.slice(findFBAV + 5, findFBAV + 8))
        if(FBversion_now < version){
            return true;
        } else {
            return false;
        }
    }
    console.log(isFacebookApp(148))
})