$(function () {
    /*展开收起*/
    $(".info-title i").on("click",function () {
        if($(this).hasClass("icon-zhankaitianjia")){
            $(this).removeClass("icon-zhankaitianjia").addClass("icon-shouqi");
            $(this).parent().next().css("display","block");
        }else{
            $(this).removeClass("icon-shouqi").addClass("icon-zhankaitianjia");
            $(this).parent().next().css("display","none");
        }

        return false;
    });
    $(".info-title i").eq(0).click();
    /*展开收起*/

    function getSuffix(self){
        var filereader = new FileReader();
        var fileType = self.files[0];
        var fileName=fileType.name;
        var fileNameArr=fileType.name.split(".");

        return fileNameArr[fileNameArr.length-1];
    }

    $("input[type='file']").on("change",function () {

        var suffix= getSuffix(this);
        var fData=new FormData($(this));
        if(suffix=="doc"||suffix=="docx"||suffix=="pdf"){
            $.ajax({
                type: "POST",
                data: fData,
                url: "",
                contentType: false,
                processData: false,
                success:function (data) {

                }
            })
        }else{
            alert("文件格式错误!")
        }
    })

});
