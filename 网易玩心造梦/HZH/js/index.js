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

    //轮播图
    let hero = document.getElementById('hero-slides');
    let menu = document.getElementById('menu');
    let slides = document.getElementById('slides');
    let next = [ 'next', 'next-catch' ].map(n => document.getElementById(n));
    let prev = [ 'prev', 'prev-catch' ].map(n => document.getElementById(n));
    let slideChildren = slides.children;
    let slideCount = slides.children.length;
    let currentlyDemoing = false;
    let currentPage = 0;
    let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
    let maxPageCount = () => slideCount / slidesPerPage() - 1;

    function goToPage(pageNumber = 0) {
        currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
        // console.log(currentPage);
        hero.style.setProperty('--page', currentPage);
    }

    function sleep(time) {
        return new Promise(res => setTimeout(res, time));
    }

    function hoverSlide(index) {
        index in slideChildren &&
        slideChildren[index].classList.add('hover');
    }

    function unhoverSlide(index) {
        index in slideChildren &&
        slideChildren[index].classList.remove('hover');
    }

    async function demo() {
        if(currentlyDemoing) {
            return;
        }
        currentlyDemoing = true;
        if(currentPage !== 0) {
            goToPage(0);
            await sleep(800);
        }
        let slides = slidesPerPage();
        let pageSeq_ = { 2: [ 1, 2, 1 ], 3: [ 1, 2, 1 / 3 ], 4: [ 1, 1, 0 ] };
        let pageSeq = pageSeq_[slides] || pageSeq_[4];
        let slideSeq_ = { 2: [ 2, 4, 3 ], 3: [ 3, 6, 2 ], 4: [ 3, 6, 2 ] };
        let slideSeq = slideSeq_[slides] || slideSeq_[2];
        await sleep(300);
        goToPage(pageSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[0]);
        await sleep(1200);
        goToPage(pageSeq[1]);
        unhoverSlide(slideSeq[0]);
        await sleep(500);
        hoverSlide(slideSeq[1]);
        await sleep(1200);
        goToPage(pageSeq[2]);
        unhoverSlide(slideSeq[1]);
        await sleep(300);
        hoverSlide(slideSeq[2]);
        await sleep(1600);
        goToPage(0);
        unhoverSlide(slideSeq[2]);
        currentlyDemoing = false;
    }

    next.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
    prev.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
    menu.addEventListener('click', demo);

    sleep(100).then(demo);


    $(".newslist1").mouseenter(function () {
        $(".newslist1 .yuan1").css("backgroundColor","red");
        $(".newslist1 .newstit1").css("color","black");
        $(".newslist1 .newstime1").css("color","red")
    });
    $(".newslist2").mouseenter(function () {
        $(".newslist2 .yuan2").css("backgroundColor","red");
        $(".newslist2 .newstit2").css("color","black");
        $(".newslist2 .newstime2").css("color","red")
    });
    $(".newslist3").mouseenter(function () {
        $(".newslist3 .yuan3").css("backgroundColor","red");
        $(".newslist3 .newstit3").css("color","black");
        $(".newslist3 .newstime3").css("color","red")
    });
    $(".newslist4").mouseenter(function () {
        $(".newslist4 .yuan4").css("backgroundColor","red");
        $(".newslist4 .newstit4").css("color","black");
        $(".newslist4 .newstime4").css("color","red")
    });

    $(".newslist1").mouseleave(function () {
        $(".newslist1 .yuan1").css("backgroundColor","");
        $(".newslist1 .newstit1").css("color","#333333");
        $(".newslist1 .newstime1").css("color","#c8c8c8")
    });
    $(".newslist2").mouseleave(function () {
        $(".newslist2 .yuan2").css("backgroundColor","");
        $(".newslist2 .newstit2").css("color","#333333");
        $(".newslist2 .newstime2").css("color","#c8c8c8")
    });
    $(".newslist3").mouseleave(function () {
        $(".newslist3 .yuan3").css("backgroundColor","");
        $(".newslist3 .newstit3").css("color","#333333");
        $(".newslist3 .newstime3").css("color","#c8c8c8")
    });
    $(".newslist4").mouseleave(function () {
        $(".newslist4 .yuan4").css("backgroundColor","");
        $(".newslist4 .newstit4").css("color","#333333");
        $(".newslist4 .newstime4").css("color","#c8c8c8")
    });

    $('#slider').nivoSlider({
        effect:'random',
        slices:15,
        animSpeed:500,
        pauseTime:3000,
        directionNav:true,
        controlNav:true,
        keyboardNav:true
    });



    //游戏展示旋转轮播?
    var oWrap = document.getElementById('wrap');
    var oImg = oWrap.getElementsByTagName('img');
    var oImgLength = oImg.length;
    var Deg = 360 / oImgLength;
    var nowX , nowY , lastX , lastY , minusX = 0, minusY = 0;
    var roY = 0 , roX = -10;
    var timer;

    for ( var i=0;i<oImgLength;i++ )
    {
        oImg[i].style.transform = 'rotateY('+ i*Deg +'deg) translateZ(350px)';
        oImg[i].style.transition = 'transform 1s '+ (oImgLength-1-i)*0.1 +'s';

    }

    mTop();

    window.onresize = mTop;

    function mTop(){
        var wH = document.documentElement.clientHeight;
        oWrap.style.marginTop = wH / 2 - 180 + 'px';
    }

    // 拖拽：三个事件-按下 移动 抬起
    //按下
    document.onmousedown = function(ev){
        ev = ev || window.event;

        //鼠标按下的时候，给前一点坐标赋值，为了避免第一次相减的时候出错
        lastX = ev.clientX;
        lastY = ev.clientY;

        //移动
        this.onmousemove = function(ev){
            ev = ev || window.event;

            clearInterval( timer );

            nowX = ev.clientX; // clientX 鼠标距离页面左边的距离
            nowY = ev.clientY; // clientY ………………………………顶部………………

            //当前坐标和前一点坐标差值
            minusX = nowX - lastX;
            minusY = nowY - lastY;

            //更新wrap的旋转角度，拖拽越快-> minus变化大 -> roY变化大 -> 旋转快
            roY += minusX*0.2; // roY = roY + minusX*0.2;
            roX -= minusY*0.1;

            oWrap.style.transform = 'rotateX('+ roX +'deg) rotateY('+ roY +'deg)';

            /*
            //生成div，让div跟着鼠标动
            var oDiv = document.createElement('div');
            oDiv.style.cssText = 'width:5px;height:5px;background:red;position:fixed;left:'+nowX+'px;top:'+nowY+'px';
            this.body.appendChild(oDiv);
            */

            //前一点的坐标
            lastX = nowX;
            lastY = nowY;

        }
        //抬起
        this.onmouseup = function(){
            this.onmousemove = null;
            timer = setInterval(function(){
                minusX *= 0.95;
                minusY *= 0.95;
                roY += minusX*0.2; // roY = roY + minusX*0.2;
                roX -= minusY*0.1;
                oWrap.style.transform = 'rotateX('+ roX +'deg) rotateY('+ roY +'deg)';

                if ( Math.abs(minusX)<0.1 && Math.abs( minusY )<0.1 )
                {
                    clearInterval( timer );
                }
                // console.log( minusX );
            },13);
        }
        return false;
    }


    //懒动画
    $(function () {
        $("img").lazyload({
            // placeholder:'111.png',
            effect: "fadeIn"
        });
    })

    //返回顶部按钮
    $(function () {
     $("#maomi").click(function() {
    		$("html,body").animate({
    			'scrollTop': '0px'
    		}, 1000)
    	});
    })
})






