function show_fov_product(obj){
	var img=$(obj).find(".fov_btn_down");
	if(img.attr("src")=="image/Arrow-3.png"){
		img.attr("src","image/Arrow-1.png");
	}else{
		img.attr("src","image/Arrow-3.png");
	}
	$(obj).next().toggle();
	}