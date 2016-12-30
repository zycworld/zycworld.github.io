/**
 * Created by lenovo on 2016/11/1.
 */
(function(){
    //图片数组1
    var list;
    //图片数组1
    var lista;
    //图片下标
    var index = 0;
    var timer;
    var rightSpace =55;
    //创建背景图承载的图片
    function imageView(imagePath,toUrl,index){
        var backgroundImageView = document.createElement("a");
        var photo = document.getElementById("carousel_figure");
        backgroundImageView.href = toUrl;
        var image = document.createElement("img");
        image.src = imagePath;
        backgroundImageView.appendChild(image);
        backgroundImageView.className="background";

        ////小圆点
        var pointButton = document.createElement("button");
        //pointButton.textContent = index + 1 ;
        rightSpace -= 1;
        pointButton.style.right = ""+rightSpace+"%";
        pointButton.className = "pointButton";
        photo.appendChild(pointButton);
        if (index === 0 ){
            pointButton.id = "curPointButton" ;
        }
        pointButton.onclick = function (){
            var preItem = document.getElementsByClassName("background")[0];
            photo.removeChild(preItem);
            photo.appendChild(imageList()[index]);
            underPointStart(index)
        }
        return backgroundImageView;
    }

    //创建轮播图1数组
    function imageList(){
        var dates = [{imagePath:"../img/Carousel-one.jpg",toUrl:"#"},{imagePath:"../img/Carousel-two.jpg",toUrl:"#"},{imagePath:"../img/Carousel-three.jpg",toUrl:"#"}];
        if(!list){
            list = [];
            for(var i = 0;i<dates.length;i++){
                var item =imageView(dates[i].imagePath,dates[i].toUrl,i);
                list.push(item);
            }
        }
        return list;
    }
    //默认显示界面
    function showImage() {
        var item = imageList()[index];
        var photo = document.getElementById("carousel_figure");
        photo.appendChild(item);

        bindMouseEvent(photo)
    }

    //下一页1
    function nextOne(){
        index++;
        if (index === imageList().length){
            index = 0
        }
        var preItem = document.getElementsByClassName("background")[0];
        var photo = document.getElementById("carousel_figure");
        photo.removeChild(preItem);
        photo.appendChild(imageList()[index])
        underPointStart(index)
    }
    //上一页1
    function preOne(){
        index --;
        if(index === -1){
            index = imageList().length - 1;
        }
        var preItem = document.getElementsByClassName("background")[0];
        var photo = document.getElementById("carousel_figure");
        photo.removeChild(preItem);
        photo.appendChild(imageList()[index])
        underPointStart(index)
    }

    //更新小圆点的状态
    function underPointStart(i){
        document.getElementById("curPointButton").id = "";
        document.getElementsByClassName("pointButton")[i].id="curPointButton";
    }
    //开启定时器
    function startTime (){
        if (timer){
            clearInterval(timer)
        }
        timer = setInterval(nextOne,3000);
    }
    //停止计时器的方法
    function bindMouseEvent(view){
        view.onmouseenter = function (){
            clearInterval(timer)
        }
        view.onmouseout = function (){
            startTime();
        }
    }
    //页面初始化
    function start(){
        showImage()
        startTime ()
    }
    start();

})();

