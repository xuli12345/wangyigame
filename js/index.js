$(function () {  
  // 开关思想
  var flag = true;

  $("#game_list_dt").click(function() {
    var that = $(this);

    // 清空选择文本状态
    window.getSelection().empty()

    // 打开游戏列表
    // --------------
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
  // --------------

  // 收起头部游戏列表按钮
  // --------------
  $("#pack_up").click(function () {  
    $("#game_list_dd").stop().slideUp(function() {
      $("#game_list_dt").css('backgroundColor', '#cf1132');
      $("#game_list_title").toggle();
      $("#game_icon").toggleClass('active-icon');
      flag = true;
    });
  })
  // --------------

  // 底部游戏列表 查看更多/收起
  // ----------------------
  $("#look_more").click(function() {
    if($(this).children('a').text() == '收起') {
      $("#game_link").animate({height: 480});
      $(this).children('a').text('查看更多');
    } else {
      $("#game_link").animate({height: 764});
      $(this).children('a').text('收起');
    }
    // ---------------------

    // 下面是四条线动画
    // ---------------
  }).mouseenter(function () {  
    $(this).children('.d-t, .d-b').stop().animate({
      width: $(this).width()
    })
    $(this).children('.d-l, .d-r').stop().animate({
      height: $(this).height()
    })
  }).mouseleave(function () {  
    $(this).children('.d-t, .d-b').stop().animate({
      width: 0
    })
    $(this).children('.d-l, .d-r').stop().animate({
      height: 0
    })
  })
  // ---------------
})

$(function() {

  // 轮播图里面的内容
  // h2 h3 p 背景图数据
  var json = {
    h2Arr: ['镇魔曲', '猎手之王', '江河所至，皆为汉土', '《天下3》', '神都夜行录'],
    h3Arr: ['《逗斗火柴人》欢乐开测', '新主线“箱庭之钥”开启', '全新水战玩法今日开启！', '年终资料片“雾锁天工”', '新地图新战场新玩法'],
    txt: ['12月5日，《逗斗火柴人》小范围欢斗技术测试开启。Steam热游正版授权，水星工作室全新打造，魔性欢乐、脑洞大开、酣畅激战的多人在线格斗手游，让你欲罢不能停不下来！','《永远的7日之都》新篇章“箱庭之钥”开启！高高在上的神明啊，有人无限崇敬你的圣光，也有人不顾一切将你拉下神坛。这一次，要如何抉择呢？', '《率土之滨》全新赛季“山河万里”现已开启报名！全新水战玩法开启水上势力之争，玩家可乘坐大小战船出征作战，玩一场水上战略博弈！在这225万格沙盘大世界中，每一寸土地都可争夺，每一个抉择都可能改变战局！是乱世永恒，还是天下一统？来这乱世，书写你的三国个人史！', '2018年度资料片“雾锁天工”重磅登场，全新剧情、动态地图、鲸腹之战、大荒记事诚意满满。签到领宝箱及武器类饰件“花无缺”，参与抽奖获得天下3·LAMY钢笔、升龙变、绝代风华实体盒子等多重好礼。还有更多福利活动等你来。', '年终资料片“雾锁天工”今日开启，全新剧情，全新动态地图,全新鲲腹战场，全新社交玩法邀你畅玩！签到领宝箱及武器类饰件“花无缺”，参与抽奖获得天下3·LAMY钢笔、升龙变、绝代风华实体盒子等多重好礼。还有更多福利活动等你来。'],
    bgiArr: ['upload/zhenmoqu.jpg', 'upload/lieshouzhiwang.jpg', 'images/65fdc14e-e513-4a50-8e59-f363d79d5b14.jpg', 'images/36ed555c-b961-4bda-9b5e-6cf088a2bc4c.jpg','upload/sdyxl.png']
  }

    // 轮播图数据初始化
    //-----------
    $('#big_banner_list h2').each(function (i) {  
      $(this).text(json.h2Arr[i]);
    });
    
    $('#big_banner_list h3').each(function (i) {  
      $(this).text(json.h3Arr[i]);
    })

    $('#big_banner_list .game-desc').each(function (i) {  
      $(this).text(json.txt[i]);
    })

    var $big_banner_list = $("#big_banner_list > li");

    $big_banner_list.each(function (i) {  
      if(i == 0){
        $(this).children('a').css('color', '#272a2c');
        $(this).css({
          'background':'url(' + json.bgiArr[i] + ') no-repeat',
          'backgroundSize' : '100% 100%'
        })
      } else {
        $(this).css({
          'background':'url(' + json.bgiArr[i] + ') no-repeat',
          'backgroundSize' : '100% 100%'
        });
        $(this).children('a').css('color', '#fff');
      }
    })
    // ----------

    var arrow_l = $("#arrow_left");
    var arrow_r = $("#arrow_right");
    var $big_banner_sel = $("#big_banner_sel > i");
    var banner_idx = 0;
    var banner_timer = null;

    banner_timer = setInterval(function() {
      autoPlay();
    }, 2000);

    smallBox($big_banner_sel.length - 1, 1);
    var timer2 = null;
    $big_banner_sel.mouseenter(function () {  
      clearInterval(banner_timer);
      var idx = $(this).index();
      banner_idx = idx;
      slideCtrol()
    })

    // 左右箭头鼠标移入移出
    $(".arrow").mouseenter(function() {
      $(this).css('backgroundColor', '#3c3d3f');
      $(this).children('.small-banner-info').show();
    }).mouseleave(function () {  
      $(this).css('backgroundColor', '#cf0f32');
      $(this).children('.small-banner-info').hide();
    })

    // 左右箭头效果
    arrow_l.click(function () {  
      if($big_banner_list.is(':animated')) {
        return;
      }
      banner_idx--;
      banner_idx < 0 && (banner_idx = $big_banner_list.length - 1);
      slideCtrol()
    })

    arrow_r.click(function () {  
      if($big_banner_list.is(':animated')) {
        return;
      }
      autoPlay();
      window.getSelection().empty();
      clearTimeout(timer2);
      timer2 = setTimeout(function() {
        clearInterval(banner_timer);
        banner_timer = setInterval(function() {
          autoPlay();
        }, 3000);
      })
    })

    // 轮播图控制代码
    function slideCtrol() {
      $big_banner_list.eq(banner_idx).stop().fadeIn(400).siblings('li').stop().fadeOut(700);
      $big_banner_sel.eq(banner_idx).addClass('tag').siblings('i').removeClass('tag');
      useSmallBox();
      window.getSelection().empty();
      clearTimeout(timer2);
      timer2 = setTimeout(function() {
        clearInterval(banner_timer);
        banner_timer = setInterval(function() {
          autoPlay();
        }, 2000);
      })
    }

    // 左右箭头判断数据
    function useSmallBox() { 
      if(banner_idx == 0) {
        smallBox(json.h3Arr.length - 1, 1);
      } else if(banner_idx == $big_banner_sel.length - 1) {
        smallBox(json.h3Arr.length - 2, 0);
      } else {
        smallBox(banner_idx - 1, banner_idx + 1);
      }
    }

    // 左右箭头数据
    function smallBox($big_banner_len, $nums) { 
      arrow_l.find('img').attr('src', json.bgiArr[$big_banner_len]);
      arrow_l.find('h2').text(json.h2Arr[$big_banner_len].slice(0, 7));
      arrow_l.find('p').text(json.h3Arr[$big_banner_len].slice(0, 11));
      arrow_r.find('img').attr('src', json.bgiArr[$nums]);
      arrow_r.find('h2').text(json.h2Arr[$nums].slice(0, 7));
      arrow_r.find('p').text(json.h3Arr[$nums].slice(0, 11));
    }

    // 右箭头 自动播放
    function autoPlay() {  
      banner_idx++;
      banner_idx > $big_banner_list.length - 1 && (banner_idx = 0);
      $big_banner_list.eq(banner_idx).stop().fadeIn(400).siblings('li').stop().fadeOut(700);
      $big_banner_sel.eq(banner_idx).addClass('tag').siblings('i').removeClass('tag');
      useSmallBox();
    }

})


$(function () {  
  $(".small-banner-nav li").mouseenter(function () {  
      $(this).addClass('tag').siblings('li').removeClass('tag');
      var idx = $(this).index();
     $(".small-banner-con li").eq(idx).stop().fadeIn(200).siblings('li').stop().fadeOut(400)
  })
})

// 内容部分代码
$(function() {

  // 内容部分顶部四张图片特效
  $("#column_list li").mouseenter(function () {  
    $(this).fadeTo(300, 0.66, function() {
      $(this).fadeTo(300, 1);
    });
    
    $(this).find('.line').css({
      'width': 60,
      'background': '#fff'
    });
  }).mouseleave(function () {  
    if ($(this).index() == 2) {
      $(this).find('.line').width(20)
      return;
    }
    $(this).find('.line').css({
      'width': 20,
      'background': '#ea4040'
    });
  })

  // 四条线

  // 二维码显示隐藏
  $("#game_rec .img-link").mouseenter(function () {  
    $(this).find('.QR').stop().animate({ top: 0 }, 400);
  }).mouseleave(function () {  
    $(this).find('.QR').stop().animate({ top: -170 }, 200);
  })

  $('#game_rec li').mouseenter(function () { 
    $(this).animate({
      top: -20
    }, 50)
    $(this).children('.d-t, .d-b').stop().animate({
      width: $(this).width()
    })
    $(this).children('.d-l, .d-r').stop().animate({
      height: $(this).height()
    })
  }).mouseleave(function () {  
    $(this).animate({
      top: -0
    }, 50)
    $('.d-t, .d-b').stop().animate({
      width: 0
    })
    $('.d-l, .d-r').stop().animate({
      height: 0
    })
  })

  $("#news_list").mouseenter(function () {  
    $(this).children('.d-t, .d-b').stop().animate({
      width: $(this).innerWidth()
    })
    $(this).children('.d-l, .d-r').stop().animate({
      height: $(this).innerHeight()
    })
  }).mouseleave(function () {  
    $('.d-t, .d-b').stop().animate({
      width: 0
    })
    $('.d-l, .d-r').stop().animate({
      height: 0
    })

  })

  // 游戏信息json数据
  var game_info = [
    {game_title:'《天下3》', game_txt: '年终资料片雾锁天工大爆料。全新剧情、战场、玩法邀你畅玩！', game_qr: 'images/d7e782a3-cbbb-470b-8560-8c40d0241dc1.png', game_img: 'upload/f2b53375-0e59-44f8-b594-1d1735afcdfc.jpg', game_link: './LZH/天下3/index.html', game_link: './LZH/天下3/index.html'}, // ok
      {game_title:'《率土之滨》', game_txt: '在这个三国乱世，每一寸土地都可争夺，每一个抉择都可能改变战局！', game_qr: 'upload/08dda186-ed85-40de-9844-2d0ec6e4883b.png', game_img: 'upload/ba4622a4-5d76-4b1b-88c4-15738850c4b4.jpg', game_link: './HJJ/shuaituzhibin_163/index2.html'},
      {game_title:'《神都夜行录》', game_txt: '参与限时活动“八百万登录纪念”，SSR风伯雨师概率UP，SSR满星拓印限时', game_qr: 'upload/00301991-76e9-4b35-94fd-c007916ab4f6.png', game_img: 'upload/ce4369ee-0ebe-4725-8e33-99df65b89bf8.jpg', game_link: './神都夜行录/index.html',game_link: './神都夜行录/index.html'},
      {game_title:'《绿荫之巅》', game_txt: '网易正版授权火柴人手游，小范围欢斗技术测试正式开启！', game_qr: 'upload/151d3fee-215c-4dba-a324-4f5a34dce5b6.png', game_img: 'upload/42978e29-4469-4a36-90ee-0a6a94a2eb78.jpg', game_link: './topGreen_game/topGreen.html'},
      {game_title:'镇魔曲', game_txt: '镇魔曲全新资料片《御龙》，灵宠现世，神龙养成，谁能驾驭？', game_qr: 'upload/4877a531-a614-49e8-954e-64858203c1f1.png', game_img: 'upload/5f38a0dd-6faa-4888-8c3c-a99e6cd6a214.jpg', game_link: './镇魔曲/wangyi/index.html'}, // ok
    {game_title:'《猎手之王》', game_txt: '动作+生存新型手游，11月29日首测开启', game_qr: 'upload/799247d1-8f55-4891-a48f-effb703617b2.png', game_img: 'upload/d5972e00-808a-4d52-a15f-baac35a73e76.jpg', game_link: './猎手之王/index.html'}, // ok
    {game_title:'《守望先锋》', game_txt: '网易青春扛鼎之作《守望先锋》手游2018线上嘉年华盛大开启！', game_qr: 'upload/e542e993-6e16-482c-a12f-21091a43917e.png', game_img: 'upload/571cbb40-14bb-42b6-ab7e-14010903a0b3.jpg', game_link: '/okq/ow-blizzard.html'}, // ok
    {game_title:'《三国如龙传》', game_txt: '如龙周年狂欢季，邀友约朋享豪礼，回归豪礼送神将，《三国如龙传》周年庆典', game_qr: 'upload/aafd205c-2bc7-4973-9081-0488636acded.png', game_img: 'upload/00c2573c-40ea-4281-9b33-2e9a1ba1fd9f.jpg', game_link: 'doudou.html'},



  ];

  // 游戏信息动态显示
  $("#game_rec li").each(function (i) {
    $(this).find('.game-tit').text(game_info[i].game_title);
    $(this).find('.game-txt').text(game_info[i].game_txt);
    $(this).find('.game-link a').attr({'href': game_info[i].game_link, 'target' : '_blank'});
    $(this).find('.QR').attr('src', game_info[i].game_qr);
    $(this).find('.game_img').attr('src', game_info[i].game_img);
  });

$('#game_rec .img-link').each (function (i) {
    $(this).attr({'href': game_info[i].game_link, 'target' : '_blank'});
})

  // 换一批随机特效
  $("#trade_game").click(function () {  
    var arr = [0, 1, 2, 3, 4, 5];
    var newArr = [];
    var timer = null;

    if ($("#game_rec li").is(':animated')) {
      return;
    }
    

    for (let j = 0; j < arr.length; j++) {
      var random1 = Math.floor(Math.random() * arr.length);
      var random2 = Math.floor(Math.random() * arr.length);
      var temp = arr[random1];
      arr[random1] = arr[random2]
      arr[random2] = temp;
    }

    for (let i = 0; i < $("#game_rec li").length; i++) {
      function hideOuter() {
        var num = arr[i];
        newArr.push(num);
        return function () {  
          timer = setTimeout(function() {
            
            $("#game_rec li").eq(i).css({ 
              'transform':'scale(0)',
            }).stop().animate({
              opacity: 0
            });
          }, 60 * num);
        }
      }
      hideOuter()();
    }


    setTimeout(function () {  
      console.log(newArr);
      for (let i = 0; i < $("#game_rec li").length; i++) {
        function showOuter() {
          var num = newArr[i];
          return function () {  
            timer = setTimeout(function() {
              $("#game_rec li").each(function (i) {
                console.log($(this));
                $(this).find('.game-tit').text(game_info[newArr[i]].game_title);
                $(this).find('.game-txt').text(game_info[newArr[i]].game_txt);
                $(this).find('.game-link a').attr({
                    'href': game_info[newArr[i]].game_link,
                    'target' : '_blank'
                });
                $(this).find('.QR').attr('src', game_info[newArr[i]].game_qr);
                $(this).find('.game_img').attr('src', game_info[newArr[i]].game_img);
                $(this).find('.img-link').attr({'href': game_info[i].game_link, 'target' : '_blank'});
              });
              $("#game_rec li").eq(i).css({ 
                'transform':'scale(1)'
              }).stop().animate({
                opacity: 1
              })
            }, 50 * num);
          }
        }
        showOuter()();
      }
    }, 600);
  })


})

// 返回顶部代码
$(function () {
  $(window).scroll(function () {  
    if ($(window).scrollTop() > 600) {
      $("#returnTop").show();
    } else {
      $("#returnTop").hide();
    }
  })

  $("#returnTop").click(function () {  
    $('html, body').animate({
      scrollTop: 0
    }, 400)

  })

  if (navigator.userAgent.indexOf('MSIE') != -1 || navigator.userAgent.indexOf('Trident') != -1) {
    $("#ie_layer").show();
  }

  $("#info_close").on('click', function () {  
    $("#ie_layer").hide();
    window.location.href = "http://www.downza.cn/soft/26885.html";
  })
})