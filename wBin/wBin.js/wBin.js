/**
 * Created by ASUS on 2018/12/6.
 */
/*----------------ͷ��������-----------------*/
$(function () {
    $('.navLeft').mouseenter(function () {
        $(this).children('a').css({'fontFamily':'����','fontWeight':'bold','color':'#F4B126'});
        $(this).css('borderBottomColor','#F4B126')
    });
    $('.navLeft').mouseleave(function () {
        $(this).find('a').css({'fontFamily':'','fontWeight':'','color':''});
        $(this).css('borderBottomColor','')
    });
    $('.navCenter').mouseenter(function () {
        $(this).find('.txt').css({'color':'rgba(255,255,255,1)','fontWeight':'bold',});
    });
    $('.navCenter').mouseleave(function () {
        $(this).find('.txt').css({'color':'','fontWeight':'',});
    });
    $('.navRight').mouseenter(function () {
        $(this).children('a').css('color','rgba(255,255,255,1)');
    });
    $('.navRight').mouseleave(function () {
        $(this).children('a').css('color','');
    });
    $('.kuang').mouseenter(function () {
        $(this).children('a').css({'color':'rgba(0,0,0,1)','background':'#F4B126'});
    });
    $('.kuang').mouseleave(function () {
        $(this).children('a').css({'color':'','background':''});
    });

});

/*----------------------------header--------------------------*/

$(function () {


    $('.header .first').click(function () {
        $('.tuiGuang li').eq(0).stop(true,false).fadeIn(500).siblings('li').stop(true,false).fadeOut(500);
        $(this).css('background', 'yellow').siblings('i').css('background','#fff');
    });
    $('.header .second').click(function () {
        $('.tuiGuang li').eq(1).stop(true,false).fadeIn(500).siblings('li').stop(true,false).fadeOut(500);
        $(this).css('background', 'yellow').siblings('i').css('background','#fff');
    });
    var idx = 0
    var timer = setInterval(function () {
       idx++;
        if(idx == $('.tuiGuang li').length) {idx = 0;};
        $('.tuiGuang li').eq(idx).stop(true,false).fadeIn(500).siblings('li').stop(true,false).fadeOut(500);
        //$('.tuiGuang li').find('content').show();
        $('.header>.icon>i').eq(idx).css('background', 'yellow').siblings('i').css('background','#fff');
    },3000);
    $('.tuiGuang').mouseenter(function () {
        clearInterval(timer);
    });
    $('.tuiGuang').mouseleave(function () {
         timer = setInterval(function () {
            idx++;
            if(idx == $('.tuiGuang li').length) {idx = 0;};
            $('.tuiGuang li').eq(idx).stop(true,false).fadeIn(500).siblings('li').stop(true,false).fadeOut(500);
             //$('.tuiGuang li').find('content').show();
             $('.icon i').eq(idx).css('background', 'yellow').siblings('i').css('background','#fff');
        },3000);
    })



});

/*----------------------------�ַ���--------------------------*/
$(function () {

    var $lis = $('#box li');//���е�li��ǩ.
    //���������������ʽ����,��Ϊ�������õĻ�,���е�li���õ�ͼƬ��һ��.
    //$lis.html('<img src="./images/collapse/1.jpg" alt=""/>');   //innerHTML
    //������ÿһ��li��ǩ����.


    //����2:
    $lis.mouseenter(function () {
        $(this).stop(true,false).animate({'width':460},500).siblings('li').stop(true,false).animate({'width':190},500);
    });

    //����3:
    $('#box').mouseleave(function () {
        $(this).find('li').stop(true,false).animate({'width':190},200);
    });




});


/*--------------------------li��ǩ---------------------------------*/


$(function () {
    $('.news>ul>li').on('mouseenter', function () {
        $(this).find('span').css('color','#f4b126');
        $(this).find('i').css('background','#f4b126');
    }).on('mouseleave', function () {
        $(this).find('span').css('color','');
        $(this).find('i').css('background','');
    });
    $('.news .bot').on('mouseenter', function () {
        $(this).find('p').css('color','#f4b126');
    }).on('mouseleave', function () {
        $(this).find('p').css('color','');
    });

})



















