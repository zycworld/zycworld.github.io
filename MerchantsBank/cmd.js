/**
 * Created by Administrator on 2016/11/15.
 */
(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',//竖着滑动
        //direction : 'horizontal',//横着滑动
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
    //宽高的换算
    //scaleW=window.innerWidth/375;
    //scaleH=window.innerHeight/667;
    //var resizes = document.querySelectorAll('.resize');
    //for (var j=0; j<resizes.length; j++) {
    //    resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
    //    resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
    //    resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
    //    resizes[j].style.bottom=parseInt(resizes[j].style.bottom)*scaleH+'px';
    //    resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px';
    //}

//给音乐加点击事件
//    var music=document.getElementById("music");
//    var audio=document.getElementById("audio");
//
//    music.onclick=function(){
//        if(audio.paused){
//            music.style.background="url(image/musicBtn.png) no-repeat";
//            audio.play();
//            this.style.animation="animate 1.5s  linear infinite"
//        }else {
//            audio.pause();
//            this.style.animation="fggf";
//            music.style.background="url(image/musicBtnOff.png) no-repeat";
//        }
//    }

//    动画
    var donghua=document.getElementsByClassName("donghua");//获取了四个需要动的
    for (var i=0;i<donghua.length;i++){
        donghua[i].addEventListener("webkitAnimationEnd",function(){
            //完成第一个动画以后改变它要执行的动画
            this.style.animation="pulse 2s linear infinite";
        })
    }
//    灯的点击事件
    var deng=document.getElementById("deng");
    var ws=document.getElementById("ws");
    var bt=document.getElementById("bt");
    deng.onclick=function(){
        ws.style.display="none";
        bt.style.display="block";
    }
    //飞机动
    var donghua2=document.getElementsByClassName("donghua2")
    for(var i=0;i<donghua2.length;i++){
        donghua2[i].addEventListener("webkitAnimationEnd",function(){
            //完成第一个动画以后改变它要执行的动画
            this.style.animation = "bounce 2s linear infinite";
        },false)
    }
//   箭头消失
    var donghua3=document.getElementById("zsyh");
    var nextImg=document.getElementById("nextImg");
    donghua3.addEventListener("webkitAnimationEnd",function(){

            //完成第一个动画以后改变它要执行的动画
            nextImg.style.display = "none";
    },false)
//翻上去箭头出现
    var  slide8=document.getElementById("slide8");
    slide8.addEventListener("webkitAnimationEnd",function(){

        //完成第一个动画以后改变它要执行的动画
        nextImg.style.display = "block";
    },false)
})();

