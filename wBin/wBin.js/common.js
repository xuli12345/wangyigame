/*
** Create by 张晓坤 on 2018/11/13
*/


/**1.获取元素文本
 * NaN null undeinfed 0 -0 false ''''  document.all()
 * @param ele 要获取的元素
 */
function getText ( ele ) {
    //浏览器能力检测
    if (ele.textContent){//只要这个属性可以获取文本内容，就用这个属性来获取
        return ele.textContent;
    }else{//ele.textContent属性拿不到
        return ele.innerText;
    }
}

/**
 * 2.修改元素文本
 * @param ele 元素
 * @param text 文本
 */
function setText (ele,text  ) {
    if (ele.textContent){
        ele.textContent = text;
    }else{
        ele.innerText = text;
    }
}

/**3.获取上一个兄弟元素
 *
 * @param ele  元素
 */
function getPreviousElementSibling ( ele ) {
    if (ele.previousElementSibling){//谷歌火狐
        return ele.previousElementSibling;
    }else{//IE8
        //1.获取上一个兄弟节点  (null 元素  注释  文本)
        var node = ele.previousSibling;
        //2.只要节点存在并且节点类型不是1，就继续往上找
        while(node  && node.nodeType != 1){
            node = node.previousSibling;
        };
        //两种情况循环会自动结束：  （1）node是null，找到底了都没有说明这个元素就是第一个元素  （2）node的nodetype是1，找到了
        return node;
    }
};


/**
 * 4.获取下一个兄弟元素
 * @param ele
 */
function getNextElementSibling ( ele ) {
    //能力检测
    if(ele.nextElementSibling ){//谷歌火狐
        return ele.nextElementSibling;
    }else{//IE8
        //1.获取下一个节点
        var node = ele.nextSibling;
        //2.只要node存在，并且节点类型不是1，继续往下找
        while(node && node.nodeType !=1){
            node = node.nextSibling;
        };
        return node;
    };
}


/**
 * 5.获取第一个子元素
 * @param ele 父元素
 */
function getFirstElementChild( ele ) {
    //能力检测
    if (ele.firstElementChild){
        return ele.firstElementChild;
    }else{
        //1.获取第一个子节点
        var node = ele.firstChild;
        //2.只要节点存在并且类型不是1，继续往下找
        while (node && node.nodeType != 1){
            node = node.nextSibling;
        };
        return node;
    }
}

/**
 * 6.获取最后一个子元素
 * @param ele 父元素
 */
function getLastElementChild ( ele ) {
    //能力检测
    if(ele.lastElementChild){
        return ele.lastElementChild;
    }else{
        //1.获取最后一个子节点
        var node = ele.lastChild;
        //2.如果节点存在并且节点类型不是1，则继续往上找
        while (node && node.nodeType != 1){
            node = node.previousSibling;
        };
        return node;
    }
}


/**7.获取元素样式属性值
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

/**
 * 8.获取页面滚动出去的距离
 * @return {{scrollLeft: number, scrollTop: number}}
 */
function getScroll (  ) {
    //使用逻辑或的短路运算
    /*逻辑或：一真则真
    短路运算：找真   如果左边式子可以转为true，则无条件返回左边式子的值/.反之无条件返回右边式子的值
     */
    //最后面那个0是为了提高代码易读性，避免有些浏览器全部不支持返回undefined
    var x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    var y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return {
        scrollLeft:x,
        scrollTop:y
    };

}

/**
 * 9.获取页面可视区域大小
 * @return {{clientWidth: number, clientHeight: number}}
 */
function getClientSize (  ) {
    var x =  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var y =  window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;

    return {
        clientWidth:x,
        clientHeight:y
    }
}

/**
 * 10.获取事件对象鼠标触发点相对于页面左上角距离
 * @param e 事件对象
 */
function getPagePoint ( e ) {
    var x = e.clientX + getScroll().scrollLeft;
    var y = e.clientY + getScroll().scrollTop;

    return {
        pageX:x,
        pageY:y
    }
}


/**11.注册多个同名事件
 *
 * @param ele 事件源
 * @param type 事件类型   不要on
 * @param fn 事件处理函数
 */
function  addEvent ( ele,type,fn ) {
    //能力检测
    if (ele.addEventListener){//谷歌火狐
        ele.addEventListener(type,fn);
    }else if (ele.attachEvent){//IE8浏览器
        ele.attachEvent('on' + type, fn);
    }else{//某些浏览器不支持注册多个同名事件
        ele['on' + type] = fn;
    }
}

/**
 * 12.移除多个同名事件
 * @param ele 事件源
 * @param type 事件类型 不要on
 * @param fn 事件处理函数
 */
function removeEvent ( ele,type,fn ) {
    if (ele.removeEventListener){//谷歌火狐
        ele.removeEventListener(type,fn);
    }else if (ele.detachEvent){//IE8
        ele.detachEvent('on' + type,fn);
    }else{//某些其他浏览器  点语法移除
        ele['on' + type] = null;
    }
}

