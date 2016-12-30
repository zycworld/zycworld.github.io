/**
 * Created by lenovo on 2016/11/3.
 */
//MUCN蛋糕左下方图片移上去效果
function trends(div,guang){
    div.mouseenter(function(){
        //startTime();
        guang.show();
        guang.animate({left:"60%",top:"60%"},1000)
    });
    div.mouseleave(function(){
        guang.hide();
        guang.animate({left:"-50%",top:"-50%"})
    });
}
var cake_img_left = $(".angelCake_img_left");
var guang = $(".guang");
trends(cake_img_left,guang);
var gift_img_left = $(".gift_img_left");
var guang1 = $(".guang1");
trends(gift_img_left,guang1);
var west_img_left = $(".west_img_left");
var guang3 = $(".guang3");
trends(west_img_left,guang3);