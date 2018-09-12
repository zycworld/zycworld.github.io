$(function () {
    var DEFAULT_VERSION = 8.0;
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie")>-1;
    var safariVersion;
    if(isIE){
        safariVersion =  ua.match(/msie ([\d.]+)/)[1];
    }
    if(safariVersion <= DEFAULT_VERSION ){
        // alert('系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！');
        $("body").append("<div id='mask-tips'><h1>系统检测到您正在使用ie8以下内核的浏览器，不能实现完美体验，请更换或升级浏览器访问！或下载以下浏览器进行体验!</h1><div class='mask-content'><a href='https://down.360safe.com/se/360se_setup.exe'>360浏览器</a><a href='https://dldir1.qq.com/invc/tt/QQ/SEM/QQBrowser_Setup_QB10_10026002.exe'>QQ浏览器</a><a href='https://download-ssl.firefox.com.cn/releases-sha2/stub/official/zh-CN/Firefox-latest.exe'>火狐浏览器</a></div></div>");
    };

    $("#back-top").on("click",function () {
        $('html , body').animate({scrollTop: 0},'slow');
    })
});

