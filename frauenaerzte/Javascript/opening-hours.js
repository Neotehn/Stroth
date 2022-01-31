$(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay() - 1).addClass('today');
});