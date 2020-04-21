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

//1.��ȡԪ��
var wrap = document.getElementById('wrap');//������߿�����
var slide = document.getElementById('slide');//��תľ��ͼ��ʾ����
var ul1 = document.getElementById('ul1');//��תľ���б�
var arrow = document.getElementById('arrow');//��һҳ��һҳ����
var arrLeft = document.getElementById('arrLeft');//��һҳ
var arrRight = document.getElementById('arrRight');//��һҳ
console.log ( config );



var timeID = setInterval(function(){
    config.unshift(config.pop());
    //3.2 ��ʼ�ƶ�
    for(var i = 0;i<ul1.children.length;i++){
        animationSlow(ul1.children[i],config[i]);
    }
},3000)



/** 2.�����Ի�������+�ص�����
 * @param obj Ҫִ�ж�����Ԫ��
 * @param attrs �������ͣ�Ҫִ�ж�����Ԫ�ص����Ժ�ֵ  {key1=value1��key2=value2}
 * @param callback  �ص����������һ�������Ĳ���Ҳ��һ����������ô��������ͽ����ص�����
 * @return ��
 */
function animationSlow ( obj, attrs, callback ) {
    //1ÿ�����ü�ʱ��֮ǰ����Ҫ��ԭ���ļ�ʱ������յ�
    clearInterval ( obj.timerID )
    //2 ���ü�ʱ��
    obj.timerID = setInterval ( function () {
        //����˼��ȷ�����е����Զ�����Ŀ��λ��֮����ֹͣ��ʱ��
        var isAllOK = true
        //3 ѭ������������ÿһ������ִ��һ�ζ�ʱ���Ĵ���
        for ( var key in attrs ) {
            //͸���ȵķ�Χ��0-1��С������Ҫ���������߼�
            if ( key == "opacity" ) {
                var target = attrs[ key ]
                //͸������0-1��С��������Ҫʹ��parseFloat������һ�ٷ������
                var current = parseFloat ( getStyle ( obj, key ) ) * 100
                var step = ( target * 100 - current ) / 10
                step = step > 0 ? Math.ceil ( step ) : Math.floor ( step )
                current += step
                //����֮ǰ���ǳ���һ�٣���͸���ȵ�ֵ�Ŵ�һ�ٱ�ת��0-100������������������Ҫ����һ��ת��0-1��С��
                obj.style[ key ] = current / 100
                if ( current / 100 != target ) {
                    isAllOK = false
                }
            } else if ( key == "zIndex" ) {
                //�㼶�ĸı����趯��������һ��˲��Ĺ��̣�
                obj.style.zIndex = attrs[ key ]
            } else {
                //3.1 ��ȡ���ζ���Ҫ�޸ĵ����Ե�ֵ  key��������  atts[key]�������Զ�Ӧ��ֵ
                var target = attrs[ key ]
                //3.2 ��ȡbox�ĵ�ǰ�ĵ����Ե�ֵ,��ʱkey����Ԫ�ص�����
                var current = parseInt ( getStyle ( obj, key ) )
                //3.3 ���㱾��Ҫ�˶��ľ���
                var step = ( target - current ) / 10
                //�����������������ȡ��������Ǹ�����������ȡ����
                step = step > 0 ? Math.ceil ( step ) : Math.floor ( step )
                //3.4 ��ʼ�ƶ�
                current += step
                obj.style[ key ] = current + "px"
                //3.5 ����˼�������������Ƿ񶼵���Ŀ��λ��
                if ( current != target ) {//ֻҪ��һ��û�ﵽ�����ؾ�Ϊfalse
                    isAllOK = false
                }
            }
        }
        //4.����Ƿ��������Զ�����Ŀ��λ�ã�����Ǿ������ʱ��
        if ( isAllOK == true ) {
            clearInterval ( obj.timerID )
            //�жϺ����������Ƿ���Ҫ����������ִ����ϣ���������˻ص���������������Ǿ�ִ�������������������ִ��
            if ( typeof  callback == "function" ) {
                callback ()
            }
        }
    }, 50 )
}

//��ȡԪ����ʽ��ֵ
function getStyle ( obj, attr ) {
    //�������
    if ( obj.currentStyle ) {
        //IE8��֮ǰ
        return obj.currentStyle[ attr ]
    } else {
        console.log ( window.getComputedStyle ( obj, null ) )
        return window.getComputedStyle ( obj, null )[ attr ]
    }
}

