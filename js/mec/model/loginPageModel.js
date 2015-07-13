define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"loginPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("loginPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                }
            //checkLogin : function(option) {
            //    var mobile=$('#account').val();
            //    var password=$('#password').val();
            //    $.ajax({
            //        type:"get",
            //        dataType: "json",
            //        url:"http://testflyco.duapp.com/server.php",
            //        data:{gid:"validateuser", mobile:mobile,password:password},
            //        success:function(data) {
            //            if (data.status == "0") {
            //                option.onSuccess(data.userinfo.userid);
            //            } else {
            //                option.onFailure(data.error_message);
            //            }
            //        },
            //        error:function(XMLHttpRequest, textStatus, errorThrown) {
            //            option.onFailure(textStatus);
            //        }
            //    });
            //}
        });
});