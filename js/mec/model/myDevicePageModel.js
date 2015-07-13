define(['backbone', 'underscore','localstorage'],
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"myDevicePageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,

        	    localStorage: new Backbone.LocalStorage("myDevicePageModel"),
                //data:{
                //    myDeviceInfo:''
                //},
                initialize : function() {
                	var _this = this;
                }
                //getMyDeviceInfo:function(option){
                //    var _this = this;
                //    $.ajax({
                //        type:"get",
                //        dataType: "json",
                //        url:"http://testflyco.duapp.com/server.php",
                //        data:{gid:"myDeviceInfo"},
                //        success:function(data) {
                //            _this.set('data',data);
                //            option.onSuccess(data);
                //            }
                //    });
                //}

        });
});