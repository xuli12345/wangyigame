/**
 * Created by ASUS on 2018/12/6.
 */
/**
 *
 * 1.ͼƬ�������Ӧ��������ڴ�С
 *
 *
 *
 */
//Ϊ�˼��� IE8 ��֮ǰ�汾�������
var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

$("#bkg_img").attr("width", w);
$("#bkg_img").attr("height", h);

$(window).resize(function(){
    $("#bkg_img").attr("width", w);
    $("#bkg_img").attr("height", h);
});

/**
 *
 * ͼƬ�Ŵ�Ч��
 *
 *
 */

//<style type="text/css">
//    div{
//    width: 300px;
//    height: 300px;
//    border: #000 solid 1px;
//    margin: 50px auto;
//    overflow: hidden;
//}
//div img{
//    cursor: pointer;
//    transition: all 0.6s;
//}
//div img:hover{
//    transform: scale(1.4);
//}
//</style>
//</head>
//<body>
//<div>
//<img src="img/focus.png" />
//    </div>

