//针对不同尺寸屏幕做的订单样式自适应
$(function(){
	var win_w=$(window).width();
	var zhifu_w1=win_w-178;
	var zhifu_w3=win_w-200;
	$('.zhifu_1').css("width",zhifu_w1);
	$('.zhifu_3').css("width",zhifu_w3);
});