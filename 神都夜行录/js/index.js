/*
** Create by wanwei on 2018/12/6
*/
// var a = document.querySelector('.topbar-right>a');
// var timeId = null;
// window.onload = function () {
//     timeId = setInterval(function (  ) {
//         a.style.className = "fade";
//         a.style.className = "fade2";
//     },5000)
// }



//--------视频------------------
//播放按钮
var playVideo = document.getElementsByClassName('play-video')[0];
//遮罩层
var layer = document.getElementsByClassName('layer')[0];
//视频弹窗
var videoPlay = document.getElementsByClassName('video-play')[0];
//关闭视频按钮
var close = document.getElementById('close');
//点击播放
playVideo.onclick = function (  ) {
    layer.className = "layer on";
    videoPlay.style.display = "block";
    videoPlay.children[1].innerHTML = '<video width="800" height="450" controls="controls" autoplay="autoplay"">\n' + '\t\t\t\t\t<source src="https://crazynote.v.netease.com/2018/0914/96648763b70deb3dd0a687a48a1892e2qt.mp4" type="video/mp4"></source>\n' + '\t\t\t\t</video>'
}
close.onclick = function (  ) {
    layer.className = "layer";
    videoPlay.style.display = "none";
    videoPlay.children[1].innerHTML = '';
}



//---------------人物---------
var roleItem = document.getElementsByClassName('roleItem');
var popInfo = document.getElementsByClassName('popInfo')[0];
var info =document.getElementsByClassName('info');
for ( var i = 0; i<roleItem.length; i++) {
    roleItem[i].onmouseover = function (  ) {
       popInfo.className = 'popInfo on'
        for ( var j = 0; j<roleItem.length; j++) {
            if ( roleItem[j] == this) {
                info[j].style.display = 'block';
            } else{
                info[j].style.display = 'none';
            }
        }
    }
    roleItem[i].onmouseout = function (  ) {
        popInfo.className = 'popInfo'
    }
}

popInfo.onmouseover = function (  ) {
    popInfo.className = 'popInfo on'
}
popInfo.onmouseout = function (  ) {
    popInfo.className = 'popInfo'
}


