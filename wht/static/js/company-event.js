$(function () {
    $('.top-nav').navfix({position:"fixed", top:0, left:0, "z-index": 1000, width: "100%"});
    var totalPage = 20;
    var totalRecords = 390;
    var pageNo = getParameter('pno');
    if(!pageNo){
        pageNo = 1;
    }
    jPage(kkpager,pageNo,totalPage,totalRecords,function (n) {

    });

});