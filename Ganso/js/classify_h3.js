/**
 * Created by lenovo on 2016/11/3.
 */
(function(){
    var classify_h3 = $("#classify_h3");
    var classify_top = $("#classify_top");
    var classify = $("#classify")
    classify.mouseenter(function(){
        classify_top.show()
    })
    classify.mouseleave(function(){
        classify_top.hide()
    })
})();