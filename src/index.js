import $ from 'jquery'

$(function(){
    console.log(navigator)
    $('.ua').text(navigator.userAgent)
    $('.uv').text(navigator.vendor)
    $('.wo').text(window.opera)
})