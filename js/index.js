//ajax 	�������ݵķ���
/***
 * ajax({
 *      url:"��������ַ��API",
 *      data:"���͵�����",
 *      dataType:"���������ص���������:json...",
 *      type:"GET",
 *      async:"�Ƿ��첽��true",
 *      success:function(data){},
 *      error:function(error){}
 * })
 *
 * get("��������ַ",[data],[function(data){}],[dataType])
 *post("��������ַ",[data],[function(data){}],[dataType])
 * getJSON("��������ַ",[data],[function(data){}])
 * ***/
/***********************************************************************/

$.getJSON('data/slide.json', function (data) { /*console.log(data);*/
    var htmlStr = ''; /*����һ�����ڴ洢���ɵ���ҳ��ǩ<li></li>*/
    var liStr = '';/*���ڴ洢���ɵİ�ť��ǩ*/
    for (var i = 0; i < data.length; i++) {
        htmlStr += '<li><a href="' + data[i].url + '"><img src="' + data[i].picUrl + '"/></a></li>';
        liStr += '<li>' + (i + 1) + '</li>';
    }
    /*���뵽�ֲ�������*/
    $(".slide-img").html(htmlStr);
    $(".slide-page").html(liStr);
    /*�״�ִ��*/
    slide();
    /*�����ͣʱ ��ͣ����*/
    $(".slide").mouseover(function () {/*������ͣ�¼�*/
        play = false;
    }).mouseout(function () {/*�����ƿ��¼�*/
        play = true;
    })
    /*����л���ʾ*/
    $(".slide-page li").mouseover(function () {
        page = $(this).index();
        /*�������е�ͼƬ����*/
        $(".slide-img li").eq(page).show().siblings().hide();
        /*ָ��һ����ť��ʽ*/
        $(".slide-page li").eq(page).css("background", "#936").siblings().css("background", "#099");
        ;
    });
    /*���Ұ�ť�л�*/
    $(".leftbutton").click(function () {
        page--;
        page %= len;
        Play();
    })
    $(".rightbutton").click(function () {
        page++;
        page %= len;
        Play();
    })
    //���x׃��
    var len=$(".slide-img li").length;
    console.log()
    var page=0;
    var play = true;
    /*�����ֲ�����*/
    function slide() {
        if (play) {
            Play();
            page++;
            page %= len;
            console.log(len)
        }
        setTimeout(slide, 1000);
    }
//����һ����������
    function Play() {
        //�������е�ͼƬ����
        $(".slide-img li").css("display", "none");
        //ָ��һ��ͼƬ��ʾ: eq(index) ��ƥ��Ԫ����ָ����index��Ԫ��
        $(".slide-img li").eq(page).css("display", "block");
        //���еİ�ť��ʽ����
        $(".slide-page li").css("background", "#099");
        //ָ��һ����ť��ʽ
        $(".slide-page li").eq(page).css("background", "#936");
    }
})


