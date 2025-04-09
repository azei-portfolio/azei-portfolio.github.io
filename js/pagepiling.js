// 最小化滑动逻辑
$(document).ready(function() {
    $('.section').css('height', '100vh');
    $(window).on('wheel', function(e) {
        if (e.originalEvent.deltaY > 0) {
            window.scrollBy(0, window.innerHeight);
        } else {
            window.scrollBy(0, -window.innerHeight);
        }
    });
});
