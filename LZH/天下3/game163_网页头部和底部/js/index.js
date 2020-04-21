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

