/**
 * Created by lenovo on 2016/11/3.
 */
(function(){
    var land_top_p1 = $("#land_top_p1");
    var land_top_p2 = $("#land_top_p2");
    var line = $("#line");
    var register_bottom = $("#register_bottom");
    var land_bottom = $("#land_bottom")
    land_top_p2.click(function(){
        land_top_p1.css({color:"#999999"});
        land_top_p2.css({color:"#333333"});
        line.animate({left:"212"},400);
        land_bottom.css({display:"none"})
        register_bottom.css({display:"block"})

    })
    land_top_p1.click(function(){
        land_top_p2.css({color:"#999999"});
        land_top_p1.css({color:"#333333"});
        line.animate({left:"-18"},400)
        land_bottom.css({display:"block"})
        register_bottom.css({display:"none"})
    })
    land_top_p2.mouseenter(function(){
        land_top_p2.css({cursor:"pointer"});
    })
    land_top_p1.mouseenter(function(){
        land_top_p1.css({cursor:"pointer"});
    })
})();
