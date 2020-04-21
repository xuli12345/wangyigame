/**
 * Created by Administrator on 2018/12/6.
 */

$(function () {
    //一、轮播图
    //1.将每一个li标签的样式存储到一个数组中
    var config = [
        {
            width: 148,
            height: 220,
            top: 150,
            left: 82,
            zIndex: 2,
        },//0下标
        {
            width: 202,
            height: 320,
            top: 100,
            left: 240,
            zIndex: 3,
        },//1
        {
            width: 230,
            height: 487,
            top: 0,
            left: 473,
            zIndex: 4
        },//2
        {
            width: 202,
            height: 320,
            top: 100,
            left: 740,
            zIndex: 3
        },//3
        {
            width: 148,
            height: 220,
            top: 150,
            left: 950,
            zIndex: 2,
            //display: "none"
        }//4
    ];

    var flag = false;//防止用户多次点击

    //让每个li先走到指定位置
    assign();
    //定义一个轮播的方法
    function assign() {

        $.each(config, function (index, ele) {//显示迭代
            // index：索引  ele：要操作的样式属性，是一个对象
            $('.wraper li').eq(index).css("zIndex", ele.zIndex).stop(true,false).animate(ele,1000,function(){
                //动画执行完毕后要执行的回调函数
                flag = true;
            });
        });

    };

    //点击下一页：
    $('#next').click(function () {
        if (flag) {
            flag = false;
            //删除config数组最后一个元素，将之移动到数组第一位
            config.unshift(config.pop());
            assign();
        }
    });

    //点击上一页
    $('#prev').click(function () {
        if (flag) {
            flag = false;
   config.push(config.shift());         assign();
        }
    });

    //二、鼠标悬浮切换图片
    //1.mainCenter部分
    toggleIMG('.downloadBtn .ios');
    toggleIMG('.downloadBtn .android');
    //2.bottom-bar部分
    toggleIMG('.container .ios');
    toggleIMG('.container .android');
    //2.1 bottom-bar部分悬浮显示二维码大图
    $('.container .qrcode_small').on({
        mouseenter: function (){
            $(this).children('div').stop(true,false).fadeIn(500);
        },
        mouseleave: function () {
            $(this).children('div').stop(true,false).fadeOut(500);
        }
    });


    //封装方法,img的src和a标签的href属性值互换
    function toggleIMG(jquObj){
        $(jquObj).on({
            mouseenter: function () {
                //定义一个变量存储图片的src
                var orginSrc = $(this).children().attr('src');
                //修改图片的src
                $(this).children().attr('src',$(this).attr('href'));
                //将原来img标签的src属性值转存到a标签的href属性中
                $(this).attr('href',orginSrc);
            },
            click: function () {
                //阻止浏览器默认样式、冒泡事件
                return false;
            },
            mouseleave: function () {
                var orginSrc = $(this).children().attr('src');
                $(this).children().attr('src',$(this).attr('href'));
                $(this).attr('href',orginSrc)
                return false;
            }
        });
    }
});