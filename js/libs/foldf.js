function show_fov_product(e){
	var img=$(e.currentTarget).find(".fov_btn_down");
	//过滤一键加入购物车
	if($(e.target).text()=="一键移到购物车"){
		return;
	}
	if(img.attr("src")=="image/Arrow-3.png"){
		img.attr("src","image/Arrow-1.png");
	}else{
		img.attr("src","image/Arrow-3.png");
	}
	$(e.currentTarget).next().toggle();
}