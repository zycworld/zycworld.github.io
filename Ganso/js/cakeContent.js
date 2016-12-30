/**
 * Created by lenovo on 2016/11/5.
 */
(function(){
    //图片数组
    var list;
    function addNode(imagePath,toUrl,h3List,toHref,p1List,p2List,priceList,priceSpecsList,buyList,toBuy){
        var cakeDiv = document.createElement('div');
        var cakeImg = document.createElement('img');
        var imgView = document.createElement("a");
        var cakeSpec = document.createElement('div');
        var cakeSpecH3 = document.createElement('h3');
        var cakeSpecH3View = document.createElement('a');
        var blocks = document.createElement('p');
        var specs = document.createElement('p');
        var price = document.createElement('p');
        var priceSpecs = document.createElement('span');
        var buyListView = document.createElement('a');
        var cakeContent = document.getElementById("cakeContent");
        cakeImg.src = imagePath;
        imgView.href = toUrl;
        cakeSpecH3.textContent = h3List;
        cakeSpecH3View.href = toHref;
        blocks.textContent = p1List;
        specs.textContent = p2List;
        price.textContent = priceList;
        buyListView.href = toBuy;
        buyListView.textContent = buyList;
        priceSpecs.textContent = priceSpecsList;


        //元素命名
        cakeDiv.id = "cakeDiv";
        cakeImg.id="cakeImg";
        imgView.id = "imgView";
        cakeSpec.id = "cakeSpec";
        cakeSpecH3.id = "cakeSpecH3";
        cakeSpecH3View.id = "cakeSpecH3View";
        blocks.id = "blocks";
        specs.id = "specs";
        price.id = "price1";
        priceSpecs.id = "priceSpecs";
        buyListView.id = "buyListView";


        imgView.appendChild(cakeImg);
        cakeDiv.appendChild(imgView);
        cakeSpecH3View.appendChild(cakeSpecH3);
        cakeSpec.appendChild(cakeSpecH3View);
        cakeSpec.appendChild(blocks);
        cakeSpec.appendChild(specs);
        cakeDiv.appendChild(cakeSpec);
        cakeDiv.appendChild(price);
        price.appendChild(priceSpecs);
        cakeDiv.appendChild(buyListView);
        cakeContent.appendChild(cakeDiv);


    }
    //创建图片数组
    function imgageList(){
        var dates = [{imagePath:"../img/cakeDiv1.jpg",toUrl:"../html/cake_details.html"},
                     {imagePath:"../img/cakeDiv2.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv3.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv5.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv6.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv7.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv8.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv9.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv10.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv11.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv12.jpg",toUrl:"#"},
                     {imagePath:"../img/cakeDiv13.jpg",toUrl:"#"}
        ]
        //创建标题数组
        var arrays = [{h3List:"百寿延绵鲜奶蛋糕",toHref:"../html/cake_details.html"},
                      {h3List:"挚爱今生鲜奶蛋糕",toHref:"#"},
                      {h3List:"粉红心情冰淇淋蛋糕",toHref:"#"},
                      {h3List:"爱的种子鲜奶蛋糕",toHref:"#"},
                      {h3List:"粉色恋曲鲜奶蛋糕",toHref:"#"},
                      {h3List:"玫瑰之恋鲜奶蛋糕",toHref:"#"},
                      {h3List:"田园晓美鲜奶蛋糕",toHref:"#"},
                      {h3List:"爱相随鲜奶蛋糕",toHref:"#"},
                      {h3List:"莓丽春心冰淇淋蛋糕",toHref:"#"},
                      {h3List:"纯净香遇鲜奶蛋糕",toHref:"#"},
                      {h3List:"单纯的心巧克力蛋糕",toHref:"#"},
                      {h3List:"雪漫飞舞巧克力蛋糕",toHref:"#"}
        ]
        //蛋糕介绍数组
        var blocks = [{p1List:"岁月留下鲜花的晚香，寿星在祝福声中容颜不老。。。"},
            {p1List:"相拥在高山之巅，玫瑰祝福，彩丝环绕"},
            {p1List:"恋爱的味道，粉色的心情"},
            {p1List:"风雨来袭，烈阳初照，阻挡不了种子发芽，爱无价"},
            {p1List:"黄玫瑰与粉玫瑰，活力与纯真。"},
            {p1List:"一朵玫瑰，一份执守。相爱予狂风，相伴予暖阳"},
            {p1List:"田园风光，一览无余，晨晓"},
            {p1List:"矮矮篱笆墙，云蝶翩翩飞，如果爱如磐石，一定是彼此相随"},
            {p1List:"在热的夏天 也要保有春心"},
            {p1List:"遇见一个人在最美好的时代"},
            {p1List:"坚果铺就的海滨之路，通往宁静的小岛"},
            {p1List:"哥本哈根的初雪，落下肖邦的音符"}
        ]
        //蛋糕规格数组
        var specs = [{p2List:""},
            {p2List:""},
            {p2List:""},
            {p2List:"规格：6号、8号、10号"},
            {p2List:""},
            {p2List:""},
            {p2List:"规格：6号、8号、10号、12号、14号、16号"},
            {p2List:""},
            {p2List:""},
            {p2List:"规格：6号、8号、10号、12号、14号、16号"},
            {p2List:"规格：6号、8号、10号"},
            {p2List:"规格：6号、8号、10号"}
        ]
        //价格数组
        var price = [{priceList:"¥1040.00"},
            {priceList:"¥800.00"},
            {priceList:"¥330.00"},
            {priceList:"¥158.00"},
            {priceList:"¥800.00"},
            {priceList:"¥660.00"},
            {priceList:"¥158.00"},
            {priceList:"¥1140.00"},
            {priceList:"¥330.00"},
            {priceList:"¥158.00"},
            {priceList:"¥158.00"},
            {priceList:"¥158.00"}
        ]
        //价格后面的规格
        var priceSpecs = [{priceSpecsList:""},
            {priceSpecsList:""},
            {priceSpecsList:"/8号"},
            {priceSpecsList:"/6号"},
            {priceSpecsList:""},
            {priceSpecsList:""},
            {priceSpecsList:"/6号"},
            {priceSpecsList:""},
            {priceSpecsList:"/8号"},
            {priceSpecsList:"/6号"},
            {priceSpecsList:"/6号"},
            {priceSpecsList:"/6号"}
        ]
        //点击购买
        var buy = [{buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"},
                   {buyList:"立即购买",toBuy:"#"}
        ]
        for (var i = 0;i<dates.length;i++){
            addNode(dates[i].imagePath,dates[i].toUrl,arrays[i].h3List,arrays[i].toHref,blocks[i].p1List,
                specs[i].p2List,price[i].priceList,priceSpecs[i].priceSpecsList,buy[i].buyList,buy[i].toBuy
                    );
        }
    }




imgageList();



})();