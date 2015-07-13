define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"registPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("registPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                },

                sendCode:function(){
                    var  na = Math.floor(Math.random()*9);
                    var  nb = Math.floor(Math.random()*9);
                    var  nc = Math.floor(Math.random()*9);
                    var  nd = Math.floor(Math.random()*9);
                    var  ne = Math.floor(Math.random()*9);
                    var  nf = Math.floor(Math.random()*9);

                    var numArray = new Array(6);
                    numArray[0] = na;
                    numArray[1] = nb;
                    numArray[2] = nc;
                    numArray[3] = nd;
                    numArray[4] = ne;
                    numArray[5] = nf;

                    var numArr = numArray.join("");
                    localStorage.setItem("numArr",numArr);
                    alert(numArr);
                },

                userRegist:function(){
                    var account = $("#account").val();
                    var password = $("#password").val();
                    var vericode = $("#vericode").val();
                    if(account.length = 11){
                        if(vericode = localStorage.getItem('numArr')){
                            $.ajax({
                                type:"get",
                                dataType:"json",
                                url:"http://testflyco.duapp.com/server.php",
                                data:{gid:"regist",account:account,password:password},
                                success:function (data){
                                    if(data){
                                        alert("注册成功！请登录。。。")
                                        window.AppRouter.showLoginPage();
                                    }
                                }
                            });
                        }else{
                            alert("验证码错误！请重新输入。。。");
                        }
                    }
                }


            
        });
});