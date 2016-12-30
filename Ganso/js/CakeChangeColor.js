/**
 * Created by lenovo on 2016/11/3.
 */
//MUCH蛋糕划上去变色

var angelCake_img_right_li = document.getElementsByClassName("angelCake_img_right_li");
var angelCake_img_right_p1 = document.getElementsByClassName("angelCake_img_right_p1");
var angelCake_img_right_p2 = document.getElementsByClassName("angelCake_img_right_p2");
var west_img_right_li = document.getElementsByClassName("west_img_right_li");
var west_img_right_p1 = document.getElementsByClassName("west_img_right_p1");
var west_img_right_p2 = document.getElementsByClassName("west_img_right_p2");
function pChange(number){
    angelCake_img_right_li[number].onmouseover = function(){

        angelCake_img_right_p1[number].style.color = "#e5435a";
        angelCake_img_right_p2[number].style.color = "#e5435a";
    }
    angelCake_img_right_li[number].onmouseout = function(){

        angelCake_img_right_p1[number].style.color = "#4f4f4f";
        angelCake_img_right_p2[number].style.color = "#4f4f4f";
    }
}
pChange(0)
pChange(1)
pChange(2)
function p1Change(number){
    west_img_right_li[number].onmouseover = function(){

        west_img_right_p1[number].style.color = "#e5435a";
        west_img_right_p2[number].style.color = "#e5435a";
    }
    west_img_right_li[number].onmouseout = function(){

        west_img_right_p1[number].style.color = "#4f4f4f";
        west_img_right_p2[number].style.color = "#4f4f4f";
    }
}
p1Change(0)
p1Change(1)
p1Change(2)
