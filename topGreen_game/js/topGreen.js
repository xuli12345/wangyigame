/**
 * Created by Administrator on 2018/12/5.
 */

$(function(){
    //头部小图标移入事件
    var thisImag = null;
    $(".zhuLei-friendLink .zhulei-body-a1").on("mouseenter",function(){
       var aIndex = $(this).parent().index();
        switch  (aIndex){
            case 1:
                thisImag = $(this).children().attr("src");
                $(this).children().attr("src","./images/weibo_ico_h1_44a2da8.png");
                $(this).children().next().css({"display":"block","zIndex":1});
                break;
            case 2:
                thisImag = $(this).children().attr("src");
                $(this).children().attr("src","./images/weixin_ico_h1_70c84f3.png");
                $(this).children().next().css({"display":"block","zIndex":1});
                break;
            case 3:
                thisImag = $(this).children().attr("src");
                $(this).children().attr("src","./images/qq_ico_h1_39df05b.png");
                $(this).children().next().css({"display":"block","zIndex":1,"left":-20});
                break;
            default :
                break;
        }

    })
    $(".zhuLei-friendLink .zhulei-body-a1").on("mouseleave",function(){
        $(this).children().attr("src",thisImag);
        $(this).children().next().css("display","none");
    })
    $(".zhuLei-friendLink li i").on("mouseenter",function(){
        $(".zlAdd2").show();
    })
    $(".zhuLei-friendLink li i").on("mouseleave",function(){
        $(".zlAdd2").hide();
    })


   //main主体图片操作
    var thisImag1 =null;
    $(".zhuLei-main-a").on("mouseenter",function(){
        var aIndex1 = $(this).index();
        switch  (aIndex1){
            case 0:
                thisImag1 = $(this).children().attr("src");
                $(this).children().attr("src","./images/order_btn1_h_d47e70f.png");
                break;
            case 1:
                thisImag1 = $(this).children().attr("src");
                $(".zlAdd3").show();
                $(this).children("img").attr("src","./images/down_ios_h_a2c9b8b.png");
                break;
            case 2:
                thisImag1 = $(this).children().attr("src");
                $(this).children().attr("src","./images/down_an_h_01c6f37.png");
                break;
            case 3:
                thisImag1 = $(this).children().attr("src");
                $(this).children().attr("src","./images/libao_h_ea1e183.png");
                break;
            default :
                break;
        }
    })
    $(".zhuLei-main-a").on("mouseleave",function(){
        $(this).children().attr("src",thisImag1);
        $(".zlAdd3").hide();
    })
    var clickIdex =0;
    $(".zhuLei-copyright span").on("click",function(){
        if(clickIdex == 0){
        //$(".zhuLei-foot").toggleClass("zlShow");
        $(".zhuLei-foot").stop(true,false).animate({"height":156},200,"linear");
        clickIdex ++;
        }else{
            $(".zhuLei-foot").stop(true,false).animate({"height":0},200,"linear");
            clickIdex =0;
        }

    })

    $(".zhuLei-newsCenter-middle a").on("mouseenter",function(){
        $(this).css("color","#e8db85").siblings().css("color","#975f72");
        var aIdex3 = $(this).index();
        if(aIdex3 == 0){
            $(".zhuLei-newsCenter-bottom-ulb").stop(true,false).animate({"left":0},500,"linear")
            //$(".zhuLei-newsCenter-bottom").css("left",0)
        };
        if(aIdex3 == 1){
            //$(".zhuLei-newsCenter-bottom").css("left",-315)
            $(".zhuLei-newsCenter-bottom-ulb").stop(true,false).animate({"left":-340},500,"linear")
        }
    })

    $(".zhuLei-newsCenter-top a").on("click",function(){
        $(".zhuLei-newsCenter").animate({"width":0},200,"linear").next().animate({"width":48},200,"linear")
    })

    $(".zhuLei-news").on("click",function(){
        $(".zhuLei-news").animate({"width":0},200,"linear").prev().animate({"width":345},200,"linear")
    })
})