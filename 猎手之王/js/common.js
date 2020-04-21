// 首页的游戏列表特效
$(function () {  
  // 开关思想
  var flag = true;

  $("#game_list_dt").click(function() {
    var that = $(this);

    // 情况选择状态
    window.getSelection().empty()

    if(flag) {
      $("#game_list_dd").slideDown();
      $(that).css('backgroundColor', '#282b2d');
      $(that).children('i').addClass('active-icon');
      $(that).children('#game_list_title').hide();
      flag = false;
    } else {
      $("#game_list_dd").slideUp(function() {
        $(that).css('backgroundColor','#cf1132');
        $(that).children('#game_list_title').show();
        $(that).children('i').removeClass('active-icon');
        flag = true;
      });
    }
  })

  // 收起头部游戏列表按钮
  $("#pack_up").click(function () {  
    $("#game_list_dd").stop().slideUp(function() {
      $("#game_list_dt").css('backgroundColor', '#cf1132');
      $("#game_list_title").toggle();
      $("#game_icon").toggleClass('active-icon');
      flag = true;
    });
  })

  // 底部游戏列表 查看更多/收起
  $("#look_more").click(function() {
    if($(this).children('a').text() == '收起') {
      $("#game_link").animate({height: 480});
      $(this).children('a').text('查看更多');
    } else {
      $("#game_link").animate({height: 764});
      $(this).children('a').text('收起');
    }

  })
})

$(function() {
  //视频点击
  $(".spbo").click(function( ){
    $('.shade').toggle();
    $(this).find('video').fadeToggle();
    $(this).find('a').fadeToggle();
    document.getElementById('video').play();
  });

  })

  $(function () {
    /*获取所有的图片*/
    var $lis = $('.newstp li');
    /*轮播图的程序的核心点  索引*/
    var index = 0;
    setInterval(function(){ 
      index ++;
      /*循环的判断*/
      if(index > ($lis.length-1)){
          index = 0;
      }
      /*根据索引去找到对应的图片淡入显示  其他的图片淡出隐藏*/
      $lis.eq(index).fadeIn().siblings().fadeOut();
     }, 3000)
})

$(function() {
  //视频点击
  $(".kuang1").click(function( ){
    $('.shade').toggle();
    $(this).find('video').fadeToggle();
    $(this).find('a').fadeToggle();
    document.getElementById('video').play();
  });

  })

  $(function() {
    //视频点击
    $(".kuang2").click(function( ){
      $('.shade').toggle();
      $(this).find('video').fadeToggle();
      $(this).find('a').fadeToggle();
      document.getElementById('video').play();
    });
  
    })

    $(function() {
      //视频点击
      $(".kuang3").click(function( ){
        $('.shade').toggle();
        $(this).find('video').fadeToggle();
        $(this).find('a').fadeToggle();
        document.getElementById('video').play();
      });
    
      })

      $(function() {
        //视频点击
        $(".kuang4").click(function( ){
          $('.shade').toggle();
          $(this).find('video').fadeToggle();
          $(this).find('a').fadeToggle();
          document.getElementById('video').play();
        });
      
        })
        var idx = 0;
        var z_timer = null;
        var z_timeout = null;
        $(function () {
          /*获取所有的图片*/
          var $lis = $('.swiper-wrapper div');
          /*轮播图的程序的核心点  索引*/
          // z
          function z_timer_auto() {
            z_timer = setInterval(function(){ 
              idx ++;
              /*循环的判断*/
              if(idx > ($lis.length-1)){
                  idx = 0;
              }
              /*根据索引去找到对应的图片淡入显示  其他的图片淡出隐藏*/
              $lis.eq(idx).fadeIn().siblings().fadeOut();
              $('.swiper-pagination-bullet').eq(idx).css('background', 'red').siblings('span').css('background', 'url(https://koh.res.netease.com/pc/gw/20181114183546/img/feature-dot_09279a8.png)')
             }, 2000)
          }
          z_timer_auto();
         

        //声明变量,用来记录当前显示图片的索引.
    
        //1.给右边焦点设置点击事件.
        $('.swiper-button-next').click(function () {
          clearInterval(z_timer);
          idx++;
         
    
          //如果现在是最后一张图片,idx就是7;  那如果继续点击右边焦点,idx就变成了8,
          //事实上在最后一张图片那里,点击右边焦点应该回到第一张,也就是idx为0;
          if(idx == 5){ //8是轮播图图片的个数
            idx = 0;
          }
          $('.swiper-pagination-bullet').eq(idx).css('background', 'red').siblings('span').css('background', 'url(https://koh.res.netease.com/pc/gw/20181114183546/img/feature-dot_09279a8.png)')
    
          $('.swiper-wrapper div').eq(idx).fadeIn(200).siblings().fadeOut(200);
          clearTimeout(z_timeout);
          z_timeout = setTimeout(function() {
            z_timer_auto();
          }, 2000);
        });
    
    
        //2.给左边焦点设置点击事件.
        $('.swiper-button-prev').click(function () {
          clearInterval(z_timer);
          idx--;
          $('.swiper-pagination-bullet').eq(idx).css('background', 'red').siblings('span').css('background', 'url(https://koh.res.netease.com/pc/gw/20181114183546/img/feature-dot_09279a8.png)')
    
          console.log(idx);
          //如果你现在是显示第0张,点击左边焦点,idx就变成了-1.
          //事实上在第0张点击左边焦点应该显示最后一张,所以把idx值改成最后一张的索引7.
          if(idx < 0){
            idx = 5;//7是轮播图图片的个数减一
          }
    
    
          $('.swiper-wrapper div').eq(idx).fadeIn(200).siblings().fadeOut(200);
          clearTimeout(z_timeout);
          z_timeout = setTimeout(function() {
            z_timer_auto();
          }, 2000);
        });

        // 3. 
        $('.swiper-pagination-bullet').click(function() {
          clearInterval(z_timer);
          idx = $(this).index();
          $(this).css('background', 'red').siblings('span').css('background', 'url(https://koh.res.netease.com/pc/gw/20181114183546/img/feature-dot_09279a8.png)')
          $('.swiper-wrapper div').eq(idx).fadeIn(200).siblings().fadeOut(200);
          clearTimeout(z_timeout);
          z_timeout = setTimeout(function() {
            z_timer_auto();
          }, 2000);
        })
    
    
    
    
    
      });
    
      $(function () {
        /*获取所有的图片*/
        var $lis = $('.wuqilunbo div');
        /*轮播图的程序的核心点  索引*/
        var index = 0;
        setInterval(function(){ 
          index ++;
          /*循环的判断*/
          if(index > ($lis.length-1)){
              index = 0;
          }
          /*根据索引去找到对应的图片淡入显示  其他的图片淡出隐藏*/
          $lis.eq(index).fadeIn().siblings().fadeOut();
         }, 2000)
    })