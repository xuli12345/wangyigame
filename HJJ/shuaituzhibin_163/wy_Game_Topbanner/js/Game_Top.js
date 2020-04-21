$(function () {
    //目录下滑
    $('#wyG_catalogue,.wyG_catalogue_links').mouseenter(function () {
        $('.wyG_catalogue_links').stop(true, false).slideDown(500);
    })
    $('#wyG_catalogue,.wyG_catalogue_links').mouseleave(function () {
        $('.wyG_catalogue_links').stop(true, false).slideUp(500);
    })
    //点击拉开列表事件
    $('.links_conter_more').click(function () {
        $('.PvP_Game').animate({left: 325}, 200, 'linear', function () {
            $('.links_conter_more').fadeOut(300, function () {
                $('.links_conter_more_left').fadeIn(100)
           });
        });
        $('#rpg').css('border', '0');
        $('.show_list').fadeIn(400);
        $('.hotlists').fadeOut(50);

    });
    //点击收回列表事件
    $('.links_conter_more_left').click(function () {
        $('.show_list').fadeOut(400, function () {
            $('.PvP_Game').animate({left: 135}, 200, 'linear', function () {
                $('.links_conter_more_left').fadeOut(50,function () {
                    $('.links_conter_more').fadeIn(10);
                });
            })
            $('#rpg').css('border-right', '1px solid #eee');
            $('.hotlists').fadeIn(600);
        });

    });
    //点击左拉列表事件
    $('.new_links_conter_more').on('click',function () {
        $('.newlists').animate({left:313},200,'linear',function () {
            $('.new_links_conter_more_right').fadeIn(50,function () {
                $('.new_links_conter_more').fadeOut(10);
            });
        });
        $('.hotlists').animate({left:136},200,'linear');
        $('.tpGAME').animate({left:136},200,'linear');
        $('.PvP_Game').fadeOut(50);
        $('#hideList').fadeIn(300);
    });
    $('.new_links_conter_more_right').click(function () {
        $('.newlists').animate({left:480},200,'linear',function () {
            $('.new_links_conter_more_right').fadeOut(50,function () {
                $('.new_links_conter_more').fadeIn(10);
            });
        });
        $('.hotlists').animate({left:325},200,'linear');
        $('.tpGAME').animate({left:299},200,'linear');
        $('.PvP_Game').fadeIn(600);
        $('#hideList').fadeOut(50);
    });
    setInterval(function () {
        $('#wy_treasureBox').animate({
            top:-59,
            opacity:0.1
        },2000,function () {
            $('#wy_treasureBox').stop(true,false).css({
                top:'59px'
            }).animate({top:0,opacity:1},1000)
        });
    },2000);
});