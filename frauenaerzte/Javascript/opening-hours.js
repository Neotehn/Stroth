$(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    console.log(window.visualViewport.scale);
});