//ajax 	请求数据的方法
/***
 * ajax({
 *      url:"服务器地址、API",
 *      data:"发送的数据",
 *      dataType:"服务器返回的数据类型:json...",
 *      type:"GET",
 *      async:"是否异步：true",
 *      success:function(data){},
 *      error:function(error){}
 * })
 *
 * get("服务器地址",[data],[function(data){}],[dataType])
 *post("服务器地址",[data],[function(data){}],[dataType])
 * getJSON("服务器地址",[data],[function(data){}])
 * ***/
/***********************************************************************/

$.getJSON('data/slide.json', function (data) { /*console.log(data);*/
    var htmlStr = ''; /*定义一个用于存储生成的网页标签<li></li>*/
    var liStr = '';/*用于存储生成的按钮标签*/
    for (var i = 0; i < data.length; i++) {
        htmlStr += '<li><a href="' + data[i].url + '"><img src="' + data[i].picUrl + '"/></a></li>';
        liStr += '<li>' + (i + 1) + '</li>';
    }
    /*插入到轮播容器中*/
    $(".slide-img").html(htmlStr);
    $(".slide-page").html(liStr);
    /*首次执行*/
    slide();
    /*鼠标悬停时 暂停播放*/
    $(".slide").mouseover(function () {/*鼠标的悬停事件*/
        play = false;
    }).mouseout(function () {/*鼠标的移开事件*/
        play = true;
    })
    /*鼠标切换显示*/
    $(".slide-page li").mouseover(function () {
        page = $(this).index();
        /*先让所有的图片隐藏*/
        $(".slide-img li").eq(page).show().siblings().hide();
        /*指定一个按钮样式*/
        $(".slide-page li").eq(page).css("background", "#936").siblings().css("background", "#099");
        ;
    });
    /*左右按钮切换*/
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
    //定義變量
    var len=$(".slide-img li").length;
    console.log()
    var page=0;
    var play = true;
    /*定义轮播函数*/
    function slide() {
        if (play) {
            Play();
            page++;
            page %= len;
            console.log(len)
        }
        setTimeout(slide, 1000);
    }
//定义一个公共函数
    function Play() {
        //先让所有的图片隐藏
        $(".slide-img li").css("display", "none");
        //指定一张图片显示: eq(index) 从匹配元素中指定第index个元素
        $(".slide-img li").eq(page).css("display", "block");
        //所有的按钮样式重置
        $(".slide-page li").css("background", "#099");
        //指定一个按钮样式
        $(".slide-page li").eq(page).css("background", "#936");
    }
})


