jQuery(function() {
    var pagetop = $('#page_top');
    var offset = 100;
    var duration = 500;
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, duration); //0.5秒かけてトップへ移動
        return false;
    });
});
