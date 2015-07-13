define([//'jquery', 
        'underscore', 'backbone','text!page/04-1-1-1_myDeviceList.html',
        'mec/model/myDevicePageModel'
        ],
function(//$,
		_, Backbone, mainView,mainModel){

  return cpmView = Backbone.View.extend({

    template:_.template(mainView),

    initialize : function() {

    },

    refresh: function(){

    },

    render: function(){
        $(this.el).empty();
        $(this.el).html(this.template(this.model.toJSON()));
        //var myDevice = this.model.get('data').myDeviceInfo;
        //
        ////var myDeviceList = "";
        ////var myDeviceList1 = "";
        ////for(var i=0;i<=8;i++){
        ////    myDeviceList +=
        ////        "<div id='"+myDevice[i].id+"' class='"+myDevice[i].divClass+"' align='center' myDeviceId='"+myDevice[i].id+"'>"+
        ////        "<a href='#'>"+"<img class='content_image_width' src='./images/mydevicelist/"+myDevice[i].imgSrc+"'>"+
        ////        "<p class='"+myDevice[i].pClass+"'>"+"3"+"</p>"+
        ////        "</a>"+
        ////        "<p class='content_text'>"+myDevice[i].deviceName+"</p>"+
        ////        "</div>";
        ////}
        ////$(this.el).find("#slide1").append(myDeviceList);
        ////
        ////for(var i=9;i<myDevice.length;i++){
        ////    myDeviceList1 +=
        ////        "<div id='"+myDevice[i].id+"' class='"+myDevice[i].divClass+"' align='center' myDeviceId='"+myDevice[i].id+"'>"+
        ////        "<a href='#'>"+"<img class='content_image_width' src='./images/mydevicelist/"+myDevice[i].imgSrc+"'>"+
        ////        "<p class='"+myDevice[i].pClass+"'>"+"3"+"</p>"+
        ////        "</a>"+
        ////        "<p class='content_text'>"+myDevice[i].deviceName+"</p>"+
        ////        "</div>";
        ////}
        ////$(this.el).find("#slide2").append(myDeviceList1);
        //var $swiperArea = $(this.el).find(".swiper-wrapper");
        //var $swiperSlide = $("<div class='swiper-slide'></div>");
        //var swiperSlideHtml = "";
        //for(var i = 0;i< myDevice.length;i++){
        //    swiperSlideHtml +=
        //        "<div id='"+myDevice[i].id+"' class='"+myDevice[i].divClass+"' align='center' myDeviceId='"+myDevice[i].id+"'>"+
        //        "<a href='#'>"+"<img class='content_image_width imgwidth' src='./images/mydevicelist/"+myDevice[i].imgSrc+"'>"+
        //        "<p class='"+myDevice[i].pClass+"'>"+"3"+"</p>"+
        //        "</a>"+
        //        "<p class='content_text'>"+myDevice[i].deviceName+"</p>"+
        //        "</div>";
        //    if(i>0 && ((i+1)%9==0 || i == myDevice.length - 1)){
        //        $swiperSlide = $("<div class='swiper-slide'></div>");
        //        $swiperSlide.append(swiperSlideHtml);
        //        $swiperArea.append($swiperSlide);
        //        swiperSlideHtml = "";
        //    }
        //}
        return this;
    },

    events: {
    }

  });
});