
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

/*scrollTop*/

$(window).scroll(function (){
    var top = $(this).scrollTop();
    if (top>1100){
    	$('.scrollTop').show();
    }else{
    	$('.scrollTop').hide();
    }
})

$('.scrollTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

/*顶部导航栏*/


$('.index-product-list').hover(function(){
    $('.index-product-list>div').show()
},function(){
    $('.index-product-list>div').hide()
})



/**
 * 滚动到底部  关于我们
 */
$('a.scrollToBottom').click(function(){ 
    $('html, body').animate({scrollTop: $(document).height()}, 800);
    return false; 
})

/**
 * 轮播自动播放
 */
$('#myCarousel').carousel({
    interval: 2000
})


/**
 * 语言切换
 */

var toggle = false;
$('.language-switch').click(function(){
    toggle = !toggle;
    if (toggle) {
        $('.language-switch ul').css({
            'transform':'translateY(-20px)',
            '-webkit-transform':'translateY(-20px)',
            '-moz-transform':'translateY(-20px)',
            '-ms-transform':'translateY(-20px)'
        });
        $('.language-switch span.glyphicon').css({
            'transform':'rotate(180deg)',
            '-webkit-transform':'rotate(180deg)',
            '-moz-transform':'rotate(180deg)',
            '-ms-transform':'rotate(180deg)'
        })
    }else{
        $('.language-switch ul').css({
            'transform':'translateY(0)',
            '-webkit-transform':'translateY(0)',
            '-moz-transform':'translateY(0)',
            '-ms-transform':'translateY(0)'
        });
        $('.language-switch span.glyphicon').css({
            'transform':'rotate(0)',
            '-webkit-transform':'rotate(0)',
            '-moz-transform':'rotate(0)',
            '-ms-transform':'rotate(0)',
        })
    }
})