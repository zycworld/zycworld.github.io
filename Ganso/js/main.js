/**
 * Created by lenovo on 2016/10/31.
 */
(function(){
    //二维码出现
    var phone_mall = document.getElementById("phone_mall");
    var two_dimension_code = document.getElementById("two_dimension_code");
    phone_mall.onmousemove = function(){
        two_dimension_code.style = "display:block"
    }
    phone_mall.onmouseout = function(){
        two_dimension_code.style = "display:none"
    }
    //鼠标点上去搜索框中的字消失
    var text = document.getElementById("text");
    text.onfocus = function(){
        this.placeholder = "";
    }
    text.onblur = function(){
        this.placeholder = "请输入搜索名称"
    }
    //猜你喜欢


    //function mousemove(li,img,top_img,text_color){
    //    li.onmousemove = function(){
    //        this.style.borderBottom = "3px solid #e5435a";
    //        img.style= "display:block";
    //        top_img.style = "display:block";
    //        text_color.style.color = "#e5435a"
    //    }
    //    li.onmouseout = function(){
    //        this.style.borderBottom = "3px solid #000000";
    //        img.style = "display:none";
    //        text_color.style.color = "#4f4f4f"
    //    }
    //
    //}
    //
    //
    //
    //var guess_you_like = document.getElementById("guess_you_like");
    //var guess_you_likepho = document.getElementById("guess_you_likepho");
    //var text_title1 = document.getElementById("text_title1")
    //var triangle_pho1 = document.getElementById("triangle_pho1");
    //mousemove(guess_you_like,triangle_pho1,guess_you_likepho,text_title1);


    //猜你喜欢
    var text_thing = document.getElementsByClassName("text_thing");
    var new_thing = document.getElementsByClassName("new_thing");
    var triangle_pho = document.getElementsByClassName("triangle_pho");
    var text_line = document.getElementsByClassName("text_line");
    var text_title = document.getElementsByClassName("text_title");
    var number=0;
    function control(){
        for(var a=0;a<new_thing.length;a++){
            new_thing[a].style.display = "none";
            triangle_pho[a].style.opacity = "0";
            text_line[a].style.opacity = "0";
            text_title[a].style.color = "#4f4f4f";
        }
        new_thing[number].style.display = "block";
        triangle_pho[number].style.opacity = "1";
        text_line[number].style.opacity = "1";
        text_title[number].style.color = "#e5435a";
    }
    function change(){
        for(var i=0;i<text_thing.length;i++){
            text_thing[i].ink = i;
            text_thing[i].onmouseover = function(){
                number = this.ink;
                control();
            }
        }
    }
    change();

  //var li=document.querySelectorAll(".new_thing li");
  // for(var k=0;k<li.length;k++){
  //     li[k].onmouseover=function(){
  //         this.style.cssText="border:1px solid red";
  //     }
  //     li[k].onmouseout=function(){
  //         this.style.cssText="";
  //     }
  // }



    //var className = document.getElementsByClassName("angelCake_img_left")
    //var guang = document.getElementsByClassName("guang");
    //console.log(guang)
    //function trendsChange(){
    //    for(var c = 0;c<className.length;c++){
    //        console.log(className[c])
    //        className[c].onmouseenter = function(){
    //
    //            setInterval(function(){
    //                for(var d=0;d<guang.length;d++){
    //                    guang[d].show();
    //                    guang[d].style.left = "60%"
    //                    guang[d].style.top = "60%"
    //
    //                }
    //
    //            },1000)
    //
    //        }
    //    }
    //}
    //trendsChange()






    //angelCake_img_right_li.onmouseout = function(){
    //    angelCake_img_right_p1.style.color = "#4f4f4f";
    //    angelCake_img_right_p2.style.color = "#4f4f4f";
    //}

    //MUCH蛋糕类别 更多类别
    var more_a = $("#more_a");
    var more = $("#more");
    var reduce =$("#reduce");
    var reduce_a = $("#reduce_a");
    more_a.click(function(){
        more.css({display:"none"});
        reduce.css({display:"block"});
    })
    reduce_a.click(function(){
        more.css({display:"block"});
        reduce.css({display:"none"});
    })

    //价格销量触摸下拉框
    var sort_one2 = $("#sort_one2");
    var sort_one3 = $("#sort_one3");
    var sort_one1 = $("#sort_one1");
    var price_one = $("#price_one");
    var salesvolume_one = $("#salesvolume_one");
    var sort_one4 = $("#sort_one4");
    sort_one2.mouseover(function(){
        price_one.css({display:"block"});
        sort_one2.css({background:"#e4004f"})
        sort_one1.css({color:"#ffffff"})

    });
    sort_one2.mouseleave(function(){
        price_one.css({display:"none"});
        sort_one2.css({background:"#f5f5f5"})
        sort_one1.css({color:"#4f4f4f"})
    });
    sort_one3.mouseover(function(){
        salesvolume_one.css({display:"block"});
        sort_one3.css({background:"#e4004f"})
        sort_one4.css({color:"#ffffff"})
    });
    sort_one3.mouseleave(function(){
        salesvolume_one.css({display:"none"});
        sort_one3.css({background:"#f5f5f5"})
        sort_one4.css({color:"#4f4f4f"})
    });

    //蛋糕夹层
    $("#Taste_choice li").on("click",function(){
        $(this).addClass("change").siblings().removeClass("change");
    })

    //购买数量数字变换
    var minus = $(".minus");
    var plus = $(".plus");
    var num=1;
    plus.click(function(){
        num++;
        console.log(num)
        $(".buyNumber_left1").val(num);
    });
    minus.click(function(){
        if(num <=1){
            minus.css({cursor:"not-allowed"});
        }else {
            minus.css({cursor:"pointer"});
            num--;
            $(".buyNumber_left1").val(num);
        }
    });

    //放大镜
    $(function(){
        $(".jqzoom").imagezoom();
        $("#thumblist li a").click(function(){
            $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
            $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
            $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
        });
    });

})();
