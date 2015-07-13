define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"aboutUsPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("aboutUsPageModel"),

                initialize : function() {
                    var _this = this;
                },

                getVersionFlg : function() {
                    var now_version=$("#version")[0].innerHTML;
                    alert("now_version"+now_version);
                    //从数据模型中取得当前版本，是否是最新版本
                    //var version_updateFlg = this.model.get('data').deviceinfo;
                    //if(version_updateFlg=='false'){
                    //    alert("你当前的版本不是最新版，请更新！");
                    //}
                    //var now_version= _this.get('now_version');
                    $.ajax({
                        type:"get",
                        dataType: "json",
                        url:"http://localhost:8080/server.php",
                        data:{gid:"aboutUs", version:now_version},
                        success:function(data) {
                            if(data == 0){
                                alert("你当前的版本不是最新版，请更新！");
                            }
                        }
                    });
                }
        });
});