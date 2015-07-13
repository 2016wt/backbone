define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
    return Backbone.Model.extend({
		defaults: {},
	    modelName:"myInfoPageModel",
    	fetchFromLocalStorageSuccessfull:false,
        initialize : function() {
            var _this = this;
        },
        getMyInfo:function(option) {
            var _this = this;
            //从数据模型中获得设备名
            var userid = _this.get('userid');
            //alert('myInfoPageModel::getMyInfo():'+userid);
            //使用AJAX从服务器获得数据
            $.ajax({
                type:"get",
                dataType: "json",
                url:"http://testflyco.duapp.com/server.php",
                data:{gid:"getuserinfo",userid:userid},
                success:function(data) {
                    //alert(data.userinfo);
                    if (data.status == "0") {
                        _this.set('data',data);
                        option.onSuccess(data);
                    } else {
                        option.onFailure(data.error_message);
                    }
                },
                error:function(XMLHttpRequest, textStatus, errorThrown) {
                    option.onFailure(textStatus);
                }
            });
        }
    });
});
