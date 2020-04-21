/**
 * Created by Administrator on 2018-12-8.
 */


$(function () {
    //���Ͻ�button��ť�¼�
//�������  1.�����ť����ߵ�������ʾ���������󣩣���ť�����ɻ�ɫ�ġ�
///  2.�ٵ����ť���������أ���ť�ظ�Ĭ��״̬
            var index =0;
    $('#fixedbox .btn1').on('click', function () {
        if(index == 0){
            $(this).css("backgroundPosition","-300px")
            $( "#fixedbox .tab ul").stop(true,false).animate({right:100});
            index = 1;
        }else if(index == 1){
            $(this).css("backgroundPosition","0px")
            $( "#fixedbox .tab ul").stop(true,false).animate({right:-670});
                index = 0;
        }
    })
    
    $('#fixedbox .btn1').on("mouseenter", function () {
        if(index == 0){
            $(this).css("backgroundPosition","-100px")
        }else{
            $(this).css("backgroundPosition","-300px")
        }
    }).on("mouseleave", function () {
        if(index == 0){
            $(this).css("backgroundPosition","0px")
        }else{
            $(this).css("backgroundPosition","-200px")
        }
    })


    //����ÿһҳ�������Ե���Ķ�������
    setTimeout(function(){
        $( ".show").fadeIn(100);
    },100)

  //
//�����ͷ��������Ļ��һҳ
   
    //console.log($("#box .section").eq(1));

})

