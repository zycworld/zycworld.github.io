
function getParameter(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
}
function jPage(kkpager,pageNo,totalPage,totalRecords,callBack) {

    kkpager.generPageHtml({
        pno : pageNo,
        //总页码
        total : totalPage,
        //总数据条数
        totalRecords : totalRecords,
        mode : 'click',//默认值是link，可选link或者click
        click : function(n){
            // do something
            //手动选中按钮
            this.selectPage(n);
            callBack&&callBack(n);
            return false;
        }
    });

}

