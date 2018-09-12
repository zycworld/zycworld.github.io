$(function () {
    $('.top-nav').navfix({position:"fixed", top:0, left:0, "z-index": 1000, width: "100%"});
    $(".video-js").each(function (index, ele) {
        var eId = $(ele).attr("id");
        var myPlayer = videojs(eId);
        videojs(eId).ready(function () {
            var myPlayer = this;
            myPlayer.play();
        });

    });
});