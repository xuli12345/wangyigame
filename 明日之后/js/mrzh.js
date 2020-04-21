/**
 * Created by Lenovo on 2018/12/6.
 */

//生存指南轮播图
var conFig = [
    {                               // 赶走饥饿
        "width": 775,
        "height": 437,
        "left": 213,
        "top": 0,
        "zIndex": 3
    },
    {                              //武装自己
        "width": 695,
        "height": 392,
        "left": 485,
        "top": 23,
        "zIndex": 2
    },
    {                              //搭建
        "width": 775,
        "height": 437,
        "left": 213,
        "top": 0,
        "zIndex": 1
    },
    {                             //最后,直面恐惧
        "width": 695,
        "height": 392,
        "left": 0,
        "top": 23,
        "zIndex": 2
    }
];
var arrowRight = document.getElementById("arrowRight");
var arrowLeft = document.getElementById("arrowLeft");
var ul1 = document.getElementById("ul1");
var idx = 0;
arrowRight.onclick = function () {
    conFig.unshift(conFig.pop());
    for (var i = 0; i < ul1.children.length; i++) {
        animationSlow(ul1.children[i], conFig[i])
    }
};
arrowLeft.onclick = function () {
    conFig.push(conFig.shift());
    for (var i = 0; i < ul1.children.length; i++) {
        animationSlow(ul1.children[i], conFig[i])
    }
};

$("#arrowRight").click(function () {
    idx++;                      //1
    if (idx == 4) {
        idx = 0
    }
    $("#ul2 img").eq(idx).attr("src", 'images/dian2_f2a5521.png').parent().parent().siblings().find("img").attr('src', 'images/dian1_9380dc3.png');
});
$("#arrowLeft").click(function () {
    idx--;                      //1
    if (idx < 0) {
        idx = 3
    }
    $("#ul2 img").eq(idx).attr("src", 'images/dian2_f2a5521.png').parent().parent().siblings().find("img").attr('src', 'images/dian1_9380dc3.png');
});

//第一部分二维码横杠上移
var timeID = setInterval(function () {
    $("#henggang").animate({
        bottom:107
    },2000, function () {
        $(this).animate({
            bottom:-5
        },2000)
    });
},2100);


//鼠标移入官网,图片背景会变
$(".goweb").on('mouseenter', function () {
    $(this).css("background","#ccc")
}).on("mouseleave",function () {
    $(this).css("background","")
})
