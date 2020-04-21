/*
** Create by 张晓坤 on 2018/11/18
*/

/**1.匀速动画封装
 * @param ele 要移动的元素
 * @param target  目标距离
 */
function animationMove ( ele,target ) {
    //1.先清除之前的定时器，以本次移动为准
    clearInterval(ele.timeID);
    //2.开始本次移动
    ele.timeID = setInterval(function (  ) {
        //2.1 获取元素当前的位置
        var currentLeft = ele.offsetLeft;
        //2.2 开始移动
        var isLeft =  currentLeft < target?true:false;
        isLeft?currentLeft+=20:currentLeft-=20;
        ele.style.left = currentLeft + 'px';
        //2.3 边界检测
        if (isLeft?currentLeft>=target:currentLeft <= target){
            //(1)停止定时器
            clearInterval(ele.timeID);
            //(2)元素复位
            ele.style.left = target + 'px';
        }
    },10);
}


/** 缓动动画封装
 @param ele:要移动的元素
 @param attrs: 要修改的属性对象
 @param fn: 回调函数  如果传了就执行，不传就不执行
 */
function animationSlow (ele,attrs,fn ) {
    //1.清除之前的定时器，以本次移动为准
    clearInterval ( ele.timeID );
    //2.开始本次移动
    ele.timeID = setInterval ( function () {
        //遍历对象的属性
        /*开关思想：某种操作的结果只有两种状态，可以用布尔类型值表示这两种状态  isAllOk
        1.提出假设   isAllOk = true
        2.验证假设
        3.根据开关状态实现需求
        */
        //一：提出假设
        var isAllOk = true;
        //二：验证假设
        for (var key in attrs){
            if (key == 'zIndex' || key == 'backgroundColor'){//层级和颜色没有动画
                ele.style[key] = attrs[key];
            }else if (key == 'opacity'){
                var attr = key;//要修改的属性名  声明这两个局部变量的好处就是之前的attr与target不用修改
                var target = attrs[key] * 100;//目标位置
                //2.1 获取当前位置
                /*  细节：window.getComputedStyle方式取得是字符串，带单位。这里需要使用parseInt转成数字 */
                /*透明度范围0-1小数，所以需要使用parseFloat转换number*/
                var current = parseFloat(getStyle ( ele, attr )) * 100;
                //2.2 计算本次移动距离 = (目标位置 - 当前位置)/10
                var step = (target - current)/10;
                //取整
                step = step>0?Math.ceil(step):Math.floor(step)
                //2.3 开始移动
                current += step;
                ele.style[attr] = current / 100;
                //2.4 终点检测
                //二：只要有任何属性没有到达终点，假设被推翻
                if (current != target){
                    isAllOk = false;
                }
            }else{
                var attr = key;//要修改的属性名  声明这两个局部变量的好处就是之前的attr与target不用修改
                var target = attrs[key];//目标位置
                //2.1 获取当前位置
                /*  细节：window.getComputedStyle方式取得是字符串，带单位。这里需要使用parseInt转成数字 */
                var current = parseInt(getStyle ( ele, attr ));
                //2.2 计算本次移动距离 = (目标位置 - 当前位置)/10
                var step = (target - current)/10;
                //取整
                step = step>0?Math.ceil(step):Math.floor(step)
                //2.3 开始移动
                current += step;
                ele.style[attr] = current + 'px';
                //2.4 终点检测
                //二：只要有任何属性没有到达终点，假设被推翻
                if (current != target){
                    isAllOk = false;
                }
            }
        };

        //三：根据开关状态实现需求
        if (isAllOk){//动画结束
            clearInterval(ele.timeID);
            //如果用户传递了第三个参数回调函数，则执行函数中的代码，没有传则不执行
            if (typeof  fn == 'function'){
                fn();
            }
        }
    }, 50 );
}

/**获取元素样式属性值
 * @param ele 元素
 * @param attribute 属性名
 */
function getStyle ( ele ,attribute) {
    //能力检测
    if (window.getComputedStyle){//谷歌火狐
        return window.getComputedStyle(ele, null)[attribute];
    }else{//IE8浏览器
        return ele.currentStyle[attribute];
    }
};