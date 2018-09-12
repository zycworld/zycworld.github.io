$(function () {
    $('.top-nav').navfix({position:"fixed", top:0, left:0, "z-index": 1000, width: "100%"});
    $(".select span").on("click",function () {
        $(this).next().toggle();
    });
    $(".select ul li").on("click",function () {
        $(this).parent().prev().find("a").html($(this).html());
        $(this).parent().hide();
        $(".select ul li").removeClass("active");
        $(this).addClass("active");
        $(this).parent().prev().attr("search-id",$(this).attr("data-id"));
    });



    /*----------------------------分页---------------------------------------*/
    var totalPage = 20;
    var totalRecords = 390;
    var pageNo = getParameter('pno');
    if(!pageNo){
        pageNo = 1;
    }
    jPage(kkpager,pageNo,totalPage,totalRecords,function (n) {

    });
    /*----------------------------分页---------------------------------------*/
});