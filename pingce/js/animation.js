/*
 ** Create by 张晓坤 on 2018/4/30
 */

/** 1.匀速平移动画
 * @param obj：要移动的元素
 * @param target：要移动的目标位置
 * @return 无
 */
function animateMove(obj, target) {
    //移动之前，如果元素已有定时器，则先清除
    clearInterval(obj.timeID);

    //移动动画:将定时器的id作为移动元素的属性
    obj.timeID = setInterval(function() {
        //1.获取元素当前位置
        var currentLeft = obj.offsetLeft;
        //2.判断元素是向左移动还是向右移动

        var isLeft;
        if (currentLeft < target) {
            //向右移动
            currentLeft += 10;
            isLeft = false;
        } else {
            //向左移动
            currentLeft -= 10;
            isLeft = true;
        }

        //3.边界检测
        /*如果是向右移动，检测规则是：if (当前距离 < 目标距离) 继续右移，否则直接回到目标距离
        如果是向左移动，检测规则是：if (当前距离 > 目标距离) 继续左移，否则直接回到目标距离
        * 解决方案：可以在第二步判断元素左移还是右移的时候声明一个变量，如果为true则表示左移，false表示右移
        isLeft == false?currentLeft < target:currentLeft > target
        * 这个三目运算的含义，如果是右移，返回currentLeft < target 条件表达式的结果。否则返回currentLeft > target条件表达式的结果
         */
        if (isLeft == false ? currentLeft < target : currentLeft > target) {
            //4.设置盒子的位置（offset家族只能读取不能设置）
            obj.style.left = currentLeft + 'px';
        } else {
            obj.style.left = target + 'px';
            //5.到达目的地之后移除定时器
            clearInterval(obj.timeID);
        }
    }, 5);
}

/** 2.缓动平移动画
 * @param obj：要移动的元素
 * @param target：要移动的目标位置
 * @return 无
 */
function animationSlow(obj, target) {
    //1.清除之前的定时器
    clearInterval(obj.timeID)
        //2.开始移动:谁要移动就给谁一个定时器，避免与其他元素定时器冲突
    obj.timeID = setInterval(function() {
        //2.1 获取元素当前位置
        var currentLeft = obj.offsetLeft
            //2.2 计算本次需要运动距离
        var step = (target - currentLeft) / 10
            //2.3 如果是step为正数：右移     如果setp为负数：左移
            //如果是正数，则需要向上取整  Math.ceil(0.3) = 1   如果是负数则需要向下取整 Math.ceil(-0.3) = 0  Math.floor(-0.3) = -1
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
            //2.4 移动
        currentLeft += step
        obj.style.left = currentLeft + "px"
            //2.5 到达终点清除定时器
        if (currentLeft == target) {
            clearInterval(obj.timeID)
        }
    }, 20);
}