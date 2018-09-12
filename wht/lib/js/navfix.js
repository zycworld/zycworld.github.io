;(function ($) {
    $.fn.navfix=function (style) {
        var $tit = $(this);
        var rect = $tit[0].getBoundingClientRect();
        var $inser =$("<div></div>");
        $tit[0].parentNode.replaceChild($inser[0],$tit[0]);
        $inser.append($tit);
        $inser.css("height",rect.height + "px");
        //获取距离页面顶端的距离
        var titleTop = $tit.offset().top;
        var fixedStyle="";
        for (var i in style){
            fixedStyle+=i+":"+style[i]+";"
        }

        $(window).on("scroll",function (ev) {
            if($(this).scrollTop()>titleTop){
                $tit.attr("style",fixedStyle)
            }else{
                $tit.removeAttr("style");
            }
        })

    }
})(jQuery);
