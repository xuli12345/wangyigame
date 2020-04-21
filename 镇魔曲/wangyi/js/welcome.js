/**
 * Created by YANGBINGHUA on 2018/12/6.
 */
$(function(){
    $('.welcome').mouseenter(function(){
            //console.log(1212);
            $('.welcome').animate({
            top:0
        },300,'linear')
    }
    )
    $('.welcome').mouseleave(function() {
        $('.welcome').animate({
            top: 18
        }, 300,'linear');
    })

    //¸£ÀûÀ¸
    //var liList = $('#fuli>li');
    //for(var i = 0;i < liList.length;i++){
    //    liList[i].mouseenter(function(){
    //        console.log(this);
    //        this.animate({
    //            top:-10
    //        },300,'linear')
    //    })
    //    liList.mouseleave(function(){
    //        liList.animate({
    //            top:0
    //        },300,'linear')
    //    })
    //}.stop(true,false)
    $('.flist').on('mouseenter',function(){
        //console.log($(this).find('.flist'));
        $(this).animate({
            top:-20
        },500,'linear');
    })
    $('.flist').on('mouseleave',function(){
        //console.log(this);
        $(this).animate({
            top:0
        },500,'linear');
    })

    //$('div').css('color','red').html();

});
