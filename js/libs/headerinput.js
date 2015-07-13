$(function(){
	//实现按钮点击出现阴影
// 	$('.right_icon').on("vmousedown",function(){
//	  $('.right_icon').css('background-color','#56c640');
//	});
//	$('.left_icon').on("vmousedown",function(){
//	$('.left_icon').css('background-color','#56c640');
//	});
	//设置输入框的内容
	$(".search_hide").on("focus",function(){
			var inputvalue =$(".search_hide").val();
			if(inputvalue=="搜索商铺"||inputvalue=="搜索商品"){
				$(".search_hide").val("");
			}
		});
});