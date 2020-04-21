 $(function (  ) {
     //隐藏高清大图超出部分
        jQuery(document).ready(function () {
            jQuery("body").attr("style","overflow-x:hidden");
        });

        //pc端下载详情显示/隐藏
        $ ( "#download_pc a" ).mouseenter ( function () {
            $ ( "#dl_details" ).show ();
        } )
        $ ( "#download_pc a" ).mouseleave ( function () {
            $ ( "#dl_details" ).hide ();
        } )


    // 视频播放盒子css动画效果
    $ ( "#video i" ).mouseenter ( function () {
        $ ( this ).toggleClass ( "suspended" );
    } )
    $ ( "#video i" ).mouseout ( function () {
        $ ( this ).toggleClass ( "suspended" );
    } )
    //点击视频播放，显示视频播放盒子，开始播放视频
    $ ( "#video_links" ).click ( function () {
        $ ( "#video_pop" ).show ();
        $ ( "#bigMask" ).show ();
    })
    //点击关闭按钮，隐藏视频播放盒子，停止播放视频
    $ ( "#video_close" ).click ( function () {
        $("#video_pop video").trigger("pause");
        $ ( "#video_pop" ).hide ();
        $ ( "#bigMask" ).hide ();
    })


    //新服福利详情展示/隐藏
    $ ( "#welfare_details li" ).click ( function () {
        $ ( "#bigMask" ).css ( "display", "block" );
        var idx = $ ( this ).index (); //找到当前鼠标移入的li标签的索引.
        var list = [];
        for ( var key in data_con[ idx ] ) {
            list.push ( "<p>" );
            list.push ( data_con[ idx ][ key ] );
            list.push ( "</p>" );
        }
        var $tr = $ ( list.join ( "" ) );
        $ ( '.con' ).html ( $tr );
        console.log (idx);
        $ ( '#welfare_pop h3' ).attr("class", "ind" + idx);
        $ ( '#welfare_pop' ).show ();
    } )
    //点击关闭按钮，隐藏新服福利详情
    $ ( "#details_close" ).click ( function () {
        $ ( "#bigMask" ).hide ();
        $ ( "#welfare_pop" ).hide ();
    } )

    $(window).scroll(function () {
        if ( ($ ( window ).scrollTop()) >=  580) {
            $("#welfare_details").show();
            $("#welfare_details").addClass("_slideUp");
        };
        if ( ($ ( window ).scrollTop()) >=  1580) {
            $("#slideShow").show();
            $("#slideShow").addClass("_slideUp");
        };
    })


//轮播图
// 上一页
    var idx = 0;
    $ ( "._prev" ).on ( "click", function () {
        prevPage ();
    } )
    $ ( "#slideShow" ).on ( "click","._left", function () {
        prevPage ();
    } )
// 下一页
    $ ( "._next" ).on ( "click", function () {
        nextPage ();
    } )
    $ ( "#slideShow" ).on ( "click","._right", function () {
        nextPage ();
    } )
    //封装上一页切换函数
    function prevPage () {
        idx --;
        console.log ( idx );
        if ( idx == - 1 ) {
            idx = 7;
            $ ( "#slideShow li" ).eq ( 0 ).addClass ( "_right" ).siblings ( "li" ).removeClass ( "_right" );
        } else {
            $ ( "#slideShow li" ).eq ( idx ).next ( "li" ).addClass ( "_right" ).siblings ( "li" ).removeClass ( "_right" );
        }
        $ ( "#slideShow li" ).eq ( idx ).addClass ( "_current" ).siblings ( "li" ).removeClass ( "_current" );
        if ( idx == 0 ) {
            $ ( "#slideShow li" ).eq ( 7 ).addClass ( "_left" ).siblings ( "li" ).removeClass ( "_left" );
        } else {
            $ ( "#slideShow li" ).eq ( idx ).prev ( "li" ).addClass ( "_left" ).siblings ( "li" ).removeClass ( "_left" );
        }
    }

    //封装下一页切换函数
    function nextPage () {
        idx ++;
        console.log ( idx );
        if ( idx == 8 ) {
            idx = 0;
            $ ( "#slideShow li" ).eq ( 7 ).addClass ( "_left" ).siblings ( "li" ).removeClass ( "_left" );
        } else {
            $ ( "#slideShow li" ).eq ( idx ).prev ( "li" ).addClass ( "_left" ).siblings ( "li" ).removeClass ( "_left" );
        }
        $ ( "#slideShow li" ).eq ( idx ).addClass ( "_current" ).siblings ( "li" ).removeClass ( "_current" );
        if ( idx == 7 ) {
            $ ( "#slideShow li" ).eq ( 0 ).addClass ( "_right" ).siblings ( "li" ).removeClass ( "_right" );
        } else {
            $ ( "#slideShow li" ).eq ( idx ).next ( "li" ).addClass ( "_right" ).siblings ( "li" ).removeClass ( "_right" );
        }
    }
})