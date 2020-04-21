$(function () {
    //1. searchbar
   $('#sainput').focus(function () {
       if($(this).val() == this.defaultValue){
           $(this).val("");
       }
   });

    $('#sainput').blur(function () {
        if($(this).val() == ''){
            $(this).val(this.defaultValue);
        }
    });

    //2. 端游手游切换
    $('.satab span').click(function () {
        $(this).addClass('on').siblings('span').removeClass('on');

        var idx = $(this).index();

        $('.servicearea .sacontent').eq(idx).addClass('current').siblings('div').removeClass('current');
    });
    // css('height', 1771);
    // css('height', 2100);
    //3. 更多收起按钮
    $('.morebtn').click(function () {
        $('.sacon2-top').animate({height:1771},500);
        $('.servicearea .w').css('height', 2100);
        // $('.sacon2').css('overflow', 'auto');
        $('.sacon2').css('overflow', 'visible');
        $('.closebtn').css('display', 'block');
        $(this).css('display', 'none');
    });

    $('.closebtn').click(function () {
        $('.sacon2-top').animate({height:510},500);
        $('.servicearea .w').css('height', 850);
        $('.sacon2').css('overflow', 'hidden');
        $('.morebtn').css('display', 'block');
        $(this).css('display', 'none');
    });
    
    //4. banner图片移动
    $('.bannerImgs').mouseenter(function () {
        // console.log($(this).find('img'));
        $($(this).find('img')[0]).stop(true, false).animate({'top':86, 'left': 11}, 500);
        $($(this).find('img')[1]).stop(true, false).animate({'top':50, 'left': 503}, 500);
        $($(this).find('img')[2]).stop(true, false).animate({'top':-2, 'left': 300}, 500);
        $($(this).find('img')[3]).stop(true, false).animate({'top':50, 'left': 280}, 500);

    });

    $('.bannerImgs').mouseleave(function () {
        // console.log($(this).find('img'));
        $($(this).find('img')[0]).stop(true, false).animate({'top':96, 'left': 11}, 500);
        $($(this).find('img')[1]).stop(true, false).animate({'top':50, 'left': 523}, 500);
        $($(this).find('img')[2]).stop(true, false).animate({'top':0, 'left': 456}, 500);
        $($(this).find('img')[3]).stop(true, false).animate({'top':55, 'left': 329}, 500);
    });


});