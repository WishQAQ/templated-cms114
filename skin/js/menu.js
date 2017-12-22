
$(document).ready(function(){
	$(".viewcon").find("img").each(function(index, element) {
        if($(this).width() > 950) {
			$(this).css({"height":"auto","width":"100%"});
		}
    });

	$('.viewmenu li').hover(function(){
		$(this).children('div').show();
		},function(){
		$(this).children('div').hide();
		})

	$('.news_list li:even').addClass('newslisteven');
	 $('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
    $('.backup,.topbut').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
    $(".backup").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>500){
                $(".backup").fadeIn(1000);
            }else{
                $(".backup").fadeOut(1000);
            }
        })
   })
$('#left').bind('click',leftbut);
$('#right').bind('click',rightbut);

//banner
var p=1;
var banner=$('#ipro2 ul');
var w=$('#ipro2 li').width()+110;
var bannernum=$('#ipro2 li').length;
banner.width(bannernum*w+55);
if(bannernum<4){
	$('#left').hide();
$('#right').hide();

	}
//index;
function leftbut(){
	if( !banner.is(":animated") ){
		if(p==1){
			$('.slider span:first').addClass('end');
		}else{
			$('.slider span:last').removeClass('end');
			banner.animate({ 'margin-left' : '+='+w }, "slow");
			p--;
		}
	}
}
function rightbut(){
	if( !banner.is(":animated") ){
		if(p == bannernum-2){
			$('.slider span:last').addClass('end');
		}else{
			$('.slider span:first').removeClass('end');
			banner.animate({ 'margin-left' : '-='+w }, "slow");
			p++;
		}
	}
}

});
