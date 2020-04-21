/**
 * Created by xiaohao on 2018/12/6.
 */
$(function () {
    $('.wrap .video').click(function () {
        $('.wrap .video').hide().parent().parent().siblings('.xiao').show()
        $('.layer').show()
    })
    $('.xiao span').click(function () {
        $('.xiao span').parent().hide().siblings('.content').find('.video').show()
        console.log($('.xiao span').parent().siblings('layer'));
        $('.layer').hide()
    })


    $('.ul1 .ul1-li').mouseenter(function () {
        $(this).addClass().siblings('li').removeClass()
        var index = $(this).index();
        $('.ul2 .main').eq(index).addClass('chuxian').siblings('li').removeClass('chuxian')
    })


    var timeID = null;
    var ind = 0;
    timeID = setInterval(function () {
        ind++;
        flag = false;
        if (ind > $('.ul3 li').length - 1) {
            ind = 0;
        }
        $('.ul3 li').eq(ind).addClass('bor').siblings('li').removeClass('bor');
        $('.ul4 li').eq(ind).slideDown(50).siblings('li').slideUp(50)
    }, 500)

    $('.ul3 li').mouseenter(function () {
        clearInterval(timeID);
        ind = $(this).index();
        $(this).addClass('bor').siblings('li').removeClass('bor');
        var idx = $(this).index();
        $('.ul4 li').eq(idx).slideDown(50).siblings('li').slideUp(50)
        //clearInterval(timeID);

    }).mouseleave(function () {
        clearInterval(timeID);
        timeID = setInterval(function () {

            ind++;
            if (ind > $('.ul3 li').length - 1) {
                ind = 0;
            }
            $('.ul3 li').eq(ind).addClass('bor').siblings('li').removeClass('bor');
            $('.ul4 li').eq(ind).slideDown(50).siblings('li').slideUp(50)

        }, 500)
    })

    $('window').on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.fixed-four').fadeIn()
        } else {
            $('.fixed-four').fadeOut()
        }
    })
    $('.fixed-four').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000)
        return false;
    })

    $('window').on('scroll', function () {
            if ($(window).scrollTop() > 950) {
                $('.content').fadeIn()
            }

    })
})
