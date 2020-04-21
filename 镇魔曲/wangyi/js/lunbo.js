/**
 * Created by YANGBINGHUA on 2018/12/7.
 */

var config = [
    {
        "width": 400,
        "top": 15,
        "left": 80,
        "opacity": 0.2,
        "zIndex": 2
    },//0
    {
        "width": 600,
        "top": 40,
        "left": 30,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 800,
        "top": 80,
        "left": 230,
        "opacity": 1,
        "zIndex": 4
    },//2
    {
        "width": 600,
        "top": 40,
        "left": 630,
        "opacity": 0.8,
        "zIndex": 3
    },//3
    {
        "width": 400,
        "top": 15,
        "left": 780,
        "opacity": 0.2,
        "zIndex": 2
    }//4
];

//1.获取元素
var wrap = document.getElementById('wrap');//最外面边框大盒子
var slide = document.getElementById('slide');//旋转木马图显示盒子
var ul1 = document.getElementById('ul1');//旋转木马列表
var arrow = document.getElementById('arrow');//上一页下一页盒子
var arrLeft = document.getElementById('arrLeft');//上一页
var arrRight = document.getElementById('arrRight');//下一页
console.log ( config );



var timeID = setInterval(function(){
    config.unshift(config.pop());
    //3.2 开始移动
    for(var i = 0;i<ul1.children.length;i++){
        animationSlow(ul1.children[i],config[i]);
    }
},3000)



/** 2.多属性缓动动画+回调函数
 * @param obj 要执行动画的元素
 * @param attrs 对象类型：要执行动画的元素的属性和值  {key1=value1，key2=value2}
 * @param callback  回调函数：如果一个函数的参数也是一个函数，那么这个函数就叫做回调函数
 * @return 无
 */
function animationSlow ( obj, attrs, callback ) {
    //1每次设置计时器之前，都要把原来的计时器给清空掉
    clearInterval ( obj.timerID )
    //2 设置计时器
    obj.timerID = setInterval ( function () {
        //开关思想确保所有的属性都到达目标位置之后再停止定时器
        var isAllOK = true
        //3 循环参数对象，让每一个属性执行一次定时器的代码
        for ( var key in attrs ) {
            //透明度的范围是0-1的小数，需要单独处理逻辑
            if ( key == "opacity" ) {
                var target = attrs[ key ]
                //透明度是0-1的小数所以需要使用parseFloat，乘以一百方便计算
                var current = parseFloat ( getStyle ( obj, key ) ) * 100
                var step = ( target * 100 - current ) / 10
                step = step > 0 ? Math.ceil ( step ) : Math.floor ( step )
                current += step
                //由于之前我们乘了一百，把透明度的值放大一百倍转成0-100的整数，所以所以又要除以一百转成0-1的小数
                obj.style[ key ] = current / 100
                if ( current / 100 != target ) {
                    isAllOK = false
                }
            } else if ( key == "zIndex" ) {
                //层级的改变无需动画（这是一个瞬间的过程）
                obj.style.zIndex = attrs[ key ]
            } else {
                //3.1 获取本次动画要修改的属性的值  key就是属性  atts[key]就是属性对应的值
                var target = attrs[ key ]
                //3.2 获取box的当前的的属性的值,此时key就是元素的属性
                var current = parseInt ( getStyle ( obj, key ) )
                //3.3 计算本次要运动的距离
                var step = ( target - current ) / 10
                //如果是正数，就向上取整，如果是负数，就向下取整。
                step = step > 0 ? Math.ceil ( step ) : Math.floor ( step )
                //3.4 开始移动
                current += step
                obj.style[ key ] = current + "px"
                //3.5 开关思想检测所有属性是否都到达目标位置
                if ( current != target ) {//只要有一个没达到，开关就为false
                    isAllOK = false
                }
            }
        }
        //4.检测是否所有属性都到达目标位置，如果是就清楚定时器
        if ( isAllOK == true ) {
            clearInterval ( obj.timerID )
            //判断函数调用者是否需要告诉他函数执行完毕，如果传递了回调函数这个参数我们就执行这个函调函数，否则不执行
            if ( typeof  callback == "function" ) {
                callback ()
            }
        }
    }, 50 )
}

//获取元素样式的值
function getStyle ( obj, attr ) {
    //能力检测
    if ( obj.currentStyle ) {
        //IE8及之前
        return obj.currentStyle[ attr ]
    } else {
        console.log ( window.getComputedStyle ( obj, null ) )
        return window.getComputedStyle ( obj, null )[ attr ]
    }
}

