define(['underscore', 'backbone',
        //底部公共部分
        'mec/view/footerPublickPageView',
        //登录
        'mec/view/loginPageView',
        'mec/model/loginPageModel',
        //自动登录
        'mec/view/autoLoginPageView',
        'mec/model/autoLoginPageModel',
        //首页
        'mec/view/menuPageView',
        'mec/model/menuPageModel',
        //滚动页
        'mec/view/welcomePageView',
        'mec/model/welcomePageModel',
        //设备首页
        'mec/view/mainPageView',
        'mec/model/mainPageModel',
        //发现
        'mec/view/findPageView',
        'mec/model/findPageModel',
        //扫一扫
        'mec/view/scanQRcodePageView',
        'mec/model/scanQRcodePageModel',
        //WIFI配置
        'mec/view/wifiConPageView',
        'mec/model/wifiConPageModel',
        //设备昵称和分组设置
        'mec/view/nameGroupPageView',
        'mec/model/nameGroupPageModel',
        //搜索设备
        'mec/view/deviceListPageView',
        'mec/model/deviceListPageModel',
        //设备名片
        'mec/view/nameCardPageView',
        'mec/model/nameCardPageModel',
        //附近设备
        'mec/view/deviceNearbyPageView',
        'mec/model/deviceNearbyPageModel',
        //小窍门
        'mec/view/hintsPageView',
        'mec/model/hintsPageModel',
        //小窍门详情
        'mec/view/hintsDetailPageView',
        'mec/model/hintsDetailPageModel',
        //维护小常识
        'mec/view/tipsPageView',
        'mec/model/tipsPageModel',
        //我的设备
        'mec/view/myDevicePageView',
        'mec/model/myDevicePageModel',
        //设备主页
        'mec/view/deviceIndexPageView',
        'mec/model/deviceIndexPageModel',
        //设备权限
        'mec/view/deviceAuthorityPageView',
        'mec/model/deviceAuthorityPageModel',
        //设备粉丝
        'mec/view/deviceFansPageView',
        'mec/model/deviceFansPageModel',
        //设备日志
        'mec/view/deviceLogPageView',
        'mec/model/deviceLogPageModel',
        //设备故障列表
        'mec/view/deviceErrorListPageView',
        'mec/model/deviceErrorListPageModel',
        //设备故障详情
        'mec/view/deviceErrorDetailPageView',
        'mec/model/deviceErrorDetailPageModel',
        //设备设置
        'mec/view/deviceSettingPageView',
        'mec/model/deviceSettingPageModel',
        //关于设备
        'mec/view/aboutDevicePageView',
        'mec/model/aboutDevicePageModel',
        //关注度排名
        'mec/view/followRankPageView',
        'mec/model/followRankPageModel',
        //在线咨询
        'mec/view/chatHelpPageView',
        'mec/model/chatHelpPageModel',
        //百宝箱
        'mec/view/miscellaneousPageView',
        'mec/model/miscellaneousPageModel',
        //附近网点
        'mec/view/spotsNearbyPageView',
        'mec/model/spotsNearbyPageModel',
        //“我的”界面
        'mec/view/myPageView',
        'mec/model/myPageModel',
        //手势密码
        'mec/view/gesturePWPageView',
        'mec/model/gesturePWPageModel',
        //“我的”积分
        'mec/view/myPointsPageView',
        'mec/model/myPointsPageModel',
        //“我的”设置
        'mec/view/mySettingsPageView',
        'mec/model/mySettingsPageModel',
        //“我的”消息
        'mec/view/userMessagePageView',
        'mec/model/userMessagePageModel',
        //“我的”消息详情
        'mec/view/userMessageDetailPageView',
        'mec/model/userMessageDetailPageModel',
        //"我的"界面里面的关于我们
        'mec/view/aboutUsPageView',
        'mec/model/aboutUsPageModel',
        //意见反馈
        'mec/view/feedbackPageView',
        'mec/model/feedbackPageModel',

        //注册
        'mec/view/registPageView',
        'mec/model/registPageModel',

        //忘记密码
        'mec/view/forgetPasswordPageView',
        'mec/model/forgetPasswordPageModel',

        //验证码确认
        'mec/view/vericodeConfirmPageView',
        'mec/model/vericodeConfirmPageModel',
        //密码设置
        'mec/view/passwordSettingPageView',
        'mec/model/passwordSettingPageModel',

        //账号绑定
        'mec/view/accountBindPageView',
        'mec/model/accountBindPageModel',
        //个人信息
        'mec/view/myInfoPageView',
        'mec/model/myInfoPageModel',
        //我家人的设备
        'mec/view/myFamilyDevicePageView',
        'mec/model/myFamilyDevicePageModel',
        //绑定账号
        'mec/view/bindAcountPageView',
        'mec/model/bindAcountPageModel',
        //用户管理
        'mec/view/userMenagerPageView',
        'mec/model/userMenagerPageModel',
        //手动添加
        'mec/view/manuallyAddPageView',
        'mec/model/manuallyAddPageModel',
        //添加关注
        'mec/view/deviceSearchPageView',
        'mec/model/deviceSearchPageModel',
        //关注排行
        'mec/view/attentionRankPageView',
        'mec/model/attentionRankPageModel',


    /**********************************华丽的分割线*****************************************/
        //到这儿为止，不要动下面的jquery和jqm
        'jquery', 'jqm'],

    function (_, Backbone,
              footerPublickPageView,
              //登录
              loginPageView, loginPageModel,
              //自动登录
              autoLoginPageView, autoLoginPageModel,
              //菜单
              menuPageView, menuPageModel,
              //滚动页
              welcomePageView, welcomePageModel,
              //设备首页
              mainPageView, mainPageModel,
              //发现
              findPageView, findPageModel,
              //扫一扫
              scanQRcodePageView, scanQRcodePageModel,
              //WIFI配置
              wifiConPageView, wifiConPageModel,
              //设备昵称和分组设置
              nameGroupPageView, nameGroupPageModel,
              //搜索设备
              deviceListPageView, deviceListPageModel,
              //设备名片
              nameCardPageView, nameCardPageModel,
              //附近设备
              deviceNearbyPageView, deviceNearbyPageModel,
              //小窍门
              hintsPageView, hintsPageModel,
              //小窍门详情
              hintsDetailPageView, hintsDetailPageModel,
              //维护小常识
              tipsPageView, tipsPageModel,
              //我的设备
              myDevicePageView, myDevicePageModel,
              //设备主页
              deviceIndexPageView, deviceIndexPageModel,
              //设备权限
              deviceAuthorityPageView, deviceAuthorityPageModel,
              //设备粉丝
              deviceFansPageView, deviceFansPageModel,
              //设备日志
              deviceLogPageView, deviceLogPageModel,
              //设备故障列表
              deviceErrorListPageView, deviceErrorListPageModel,
              //设备故障详情
              deviceErrorDetailPageView, deviceErrorDetailPageModel,
              //设备设置
              deviceSettingPageView, deviceSettingPageModel,
              //关于设备
              aboutDevicePageView, aboutDevicePageModel,
              //关注度排名
              followRankPageView, followRankPageModel,
              //在线咨询
              chatHelpPageView, chatHelpPageModel,
              //百宝箱
              miscellaneousPageView, miscellaneousPageModel,
              //附近网点
              spotsNearbyPageView, spotsNearbyPageModel,
              //“我的”界面
              myPageView, myPageModel,
              //手势密码
              gesturePWPageView, gesturePWPageModel,
              //“我的”积分
              myPointsPageView, myPointsPageModel,
              //“我的”设置
              mySettingsPageView, mySettingsPageModel,
              //“我的”消息
              userMessagePageView, userMessagePageModel,
              //“我的”消息详情
              userMessageDetailPageView, userMessageDetailPageModel,
              //“我的”界面里的关于我们
              aboutUsPageView, aboutUsPageModel,
              //意见反馈
              feedbackPageView, feedbackPageModel,
              //注册
              registPageView, registPageModel,
              //忘记密码
              forgetPasswordPageView, forgetPasswordPageModel,
              //验证码确认
              vericodeConfirmPageView, vericodeConfirmPageModel,
              //密码设置
              passwordSettingPageView, passwordSettingPageModel,
              //账号绑定
              accountBindPageView, accountBindPageModel,
              //个人信息
              myInfoPageView, myInfoPageModel,
              //我家人的设备
              myFamilyDevicePageView,myFamilyDevicePageModel,
              //绑定账号
              bindAcountPageView,bindAcountPageModel,
              //用户管理
              userMenagerPageView,userMenagerPageModel,
              //手动添加
              manuallyAddPageView,manuallyAddPageModel,
              //添加关注
              deviceSearchPageView,deviceSearchPageModel,
              //关注排行
              attentionRankPageView,attentionRankPageModel


    ) {
        'use strict';
        var Router = Backbone.Router.extend({

            routes: {
                //在这儿配置页面的路由
                //reform的路由配置
                'login': 'showLoginPage',
                'autoLogin': 'showAutoLoginPage',
                'menu': 'showMenuPage',
                //滚动页
                'welcome': 'showWelcomePage',
                //设备首页
                'main': 'showMainPage',
                'find': 'showFindPage',
                'scanQRcode': 'showScanQRcodePage',
                'wifiCon': 'showWifiConPage',
                'nameGroup': 'showNameGroupPage',
                'myDevice': 'showMyDevicePage',
                'deviceIndex': 'showDeviceIndexPage',
                'deviceList': 'showDeviceListPage',
                'deviceAuthority': 'showDeviceAuthorityPage',
                'deviceFans': 'showDeviceFansPage',
                'deviceLog': 'showDeviceLogPage',
                'deviceErrorList': 'showDeviceErrorListPage',
                'deviceErrorDetail': 'showDeviceErrorDetailPage',
                'deviceSetting': 'showDeviceSettingPage',
                'aboutDevice': 'showAboutDevicePage',
                'miscellaneous': 'showMiscellaneousPage',
                'spotsNearby': 'showSpotsNearbyPage',
                'my': 'showMyPage',
                //手势密码
                'gesturePW': 'showGesturePWPage',
                //“我的”积分
                'myPoints': 'showMyPointsPage',
                //“我的”设置
                'mySettings': 'showMySettingsPage',
                //“我的”消息
                'userMessage': 'showUserMessage',
                //“我的”消息详情
                'userMessageDetail': 'showUserMessageDetail',
                //关于我们
                'aboutUs': 'showAboutUsPage',
                //关注度排名
                'followRank': 'showFollowRankPage',
                //在线咨询
                'chatHelp': 'showChatHelpPage',
                //附近设备
                'deviceNearby': 'showDeviceNearbyPage',
                //小窍门
                'hints': 'showHintsPage',
                //小窍门详情
                'hintsDetail': 'showHintsDetailPage',
                //维护小常识
                'tips': 'showtipsPage',
                //设备名片
                'nameCard': 'showNameCardPage',
                //意见反馈
                'feedback': 'showFeedBackPage',
                //忘记密码
                'forgetPassword': 'showForgetPasswordPage',
                //注册
                'regist': 'showRegistPage',
                //验证码确认
                'vericodeCon': 'showVericodeConfirmPage',
                //密码设置
                'passwordSetting': 'showPasswordSettingPage',
                //账号绑定
                'accountBind': 'showAccountBindPage',
                //个人信息
                'myInfo': 'showMyInfoPage',
                'logout': 'doLogout',
                //我家人的设备
                'myFamilyDevice':'showMyFamilyDevicePage',
                'bindAcount':'showbindAcountPage',
                'userMenager':'showUserMenager',
                'manuallyAdd':'showManuallyAddPage',
                'deviceSearch':'showDeviceSearchPage',
                //关注排行
                'attentionRank':'showAttentionRankPage'


                //其余的请参照上面添加
            },

            previous: function () {

            },
            storeRoute: function () {
                WL.Logger.debug("storeRoute  " + Backbone.history.fragment);
                return this.history.push(Backbone.history.fragment);
            },

            initialize: function () {
                //this.showMenuPage();
            },
            /**********************************华丽的分割线*****************************************/
            doLogout: function () {
                localStorage.removeItem('userid');
                window.location.href = "#main";
            },
            //登录
            showLoginPage: function () {
                var _this = this;

                var loginPM = new loginPageModel();
                var loginV = new loginPageView({model: loginPM});
                _this.changePage(loginV);
            },
            //自动登录
            showAutoLoginPage: function () {
                var _this = this;

                var autoLoginPM = new autoLoginPageModel();
                var autoLoginV = new autoLoginPageView({model: autoLoginPM});
                _this.changePage(autoLoginV);
            },
            //首页
            showMenuPage: function () {
                var _this = this;
                var menuPM = new menuPageModel();
                var menuV = new menuPageView({model: menuPM});
                _this.changePage(menuV);
            },
            //滚动页
            showWelcomePage: function () {
                var _this = this;
                var welcomePM = new welcomePageModel();
                var welcomeV = new welcomePageView({model: welcomePM});
                _this.changePage(welcomeV);
            },
            //设备首页
            showMainPage: function () {
                var _this = this;
                var mainPM = new mainPageModel();
                var mainV = new mainPageView({model: mainPM});
                _this.changePage(mainV);
            },
            //发现
            showFindPage: function () {
                var _this = this;
                var findPM = new findPageModel();
                var findV = new findPageView({model: findPM});
                _this.changePage(findV);
            },
            //扫一扫
            showScanQRcodePage: function () {
                var _this = this;
                var scanQRcodePM = new scanQRcodePageModel();
                var scanQRcodeV = new scanQRcodePageView({model: scanQRcodePM});
                _this.changePage(scanQRcodeV);
            },
            //WIFI配置
            showWifiConPage: function () {
                var _this = this;
                var wifiConPM = new wifiConPageModel();
                var wifiConV = new wifiConPageView({model: wifiConPM});
                _this.changePage(wifiConV);
            },
            //设备昵称和分组设置
            showNameGroupPage: function () {
                var _this = this;
                var nameGroupPM = new nameGroupPageModel();
                var nameGroupV = new nameGroupPageView({model: nameGroupPM});
                _this.changePage(nameGroupV);
            },
            showDeviceListPage: function (devicename) {
                var _this = this;
                var devlsPM = new deviceListPageModel();
                //向数据模型内设定用于检索的search_key
                devlsPM.set('search_key', devicename);

                var devlsV = new deviceListPageView({model: devlsPM});
                devlsPM.getDeviceList(
                    {
                        onSuccess: function (deviceList) {
                            _this.changePage(devlsV);
                        },
                        onFailure: function () {
                            _this.changePage(devlsV);
                        }
                    }
                );
                _this.changePage(devlsV);
            },
            //设备名片
            showNameCardPage: function () {
                var _this = this;
                var nameCardPM = new nameCardPageModel();
                var nameCardV = new nameCardPageView({model: nameCardPM});
                _this.changePage(nameCardV);
            },
            //附近设备
            showDeviceNearbyPage: function () {
                var _this = this;
                var deviceNearbyPM = new deviceNearbyPageModel();
                var deviceNearbyV = new deviceNearbyPageView({model: deviceNearbyPM});
                _this.changePage(deviceNearbyV);
            },
            //小窍门
            showHintsPage: function () {
                var _this = this;
                var hintsPM = new hintsPageModel();
                var hintsV = new hintsPageView({model: hintsPM});
                _this.changePage(hintsV);
            },
            //小窍门详情
            showHintsDetailPage: function () {
                var _this = this;
                var hintsDetailPM = new hintsDetailPageModel();
                var hintsDetailV = new hintsDetailPageView({model: hintsDetailPM});
                _this.changePage(hintsDetailV);
            },
            //维护小常识
            showtipsPage: function () {
                var _this = this;
                var tipsPM = new tipsPageModel();
                var tipsV = new tipsPageView({model: tipsPM});
                _this.changePage(tipsV);
            },
            //我的设备
            showMyDevicePage: function () {
                var _this = this;
                var myDevicePM = new myDevicePageModel();
                var myDeviceV = new myDevicePageView({model: myDevicePM});
                //myDevicePM.getMyDeviceInfo({
                //    onSuccess: function () {
                //        _this.changePage(myDeviceV);
                //    },
                //    onFailure: function () {
                //        _this.changePage(myDeviceV);
                //    }
                //});
                _this.changePage(myDeviceV);
            },

            //设备主页
            showDeviceIndexPage: function () {
                var _this = this;
                var deviceIndexPM = new deviceIndexPageModel();
                var deviceIndexV = new deviceIndexPageView({model: deviceIndexPM});
                _this.changePage(deviceIndexV);
            },

            //设备权限
            showDeviceAuthorityPage: function () {
                var _this = this;
                var deviceAuthorityPM = new deviceAuthorityPageModel();
                var deviceAuthorityV = new deviceAuthorityPageView({model: deviceAuthorityPM});
                _this.changePage(deviceAuthorityV);
            },

            //设备粉丝
            showDeviceFansPage: function () {
                var _this = this;
                var deviceFansPM = new deviceFansPageModel();
                var deviceFansV = new deviceFansPageView({model: deviceFansPM});
                _this.changePage(deviceFansV);
            },

            //设备日志
            showDeviceLogPage: function () {
                var _this = this;
                var deviceLogPM = new deviceLogPageModel();
                var deviceLogV = new deviceLogPageView({model: deviceLogPM});
                _this.changePage(deviceLogV);
            },

            //设备故障列表
            showDeviceErrorListPage: function () {
                var _this = this;
                var deviceErrorListPM = new deviceErrorListPageModel();
                var deviceErrorListV = new deviceErrorListPageView({model: deviceErrorListPM});
                _this.changePage(deviceErrorListV);
            },

            //设备故障详情
            showDeviceErrorDetailPage: function () {
                var _this = this;
                var deviceErrorDetailPM = new deviceErrorDetailPageModel();
                var deviceErrorDetailV = new deviceErrorDetailPageView({model: deviceErrorDetailPM});
                _this.changePage(deviceErrorDetailV);
            },
            //设备设置
            showDeviceSettingPage: function () {
                var _this = this;
                var deviceSettingPM = new deviceSettingPageModel();
                var deviceSettingV = new deviceSettingPageView({model: deviceSettingPM});
                _this.changePage(deviceSettingV);
            },
            //关于设备
            showAboutDevicePage: function () {
                var _this = this;
                var aboutDevicePM = new aboutDevicePageModel();
                var aboutDeviceV = new aboutDevicePageView({model: aboutDevicePM});
                _this.changePage(aboutDeviceV);
            },
            //关注度排名
            showFollowRankPage: function () {
                var _this = this;
                var followRankPM = new followRankPageModel();
                var followRankV = new followRankPageView({model: followRankPM});
                _this.changePage(followRankV);
            },

            showChatHelpPage: function () {
                var _this = this;
                var chatHelpPM = new chatHelpPageModel();
                var chatHelpV = new chatHelpPageView({model: chatHelpPM});
                _this.changePage(chatHelpV);
            },

            //百宝箱
            showMiscellaneousPage: function () {
                var _this = this;
                var miscellaneousPM = new miscellaneousPageModel();
                var miscellaneousV = new miscellaneousPageView({model: miscellaneousPM});
                _this.changePage(miscellaneousV);
            },
            //附近网点
            showSpotsNearbyPage: function () {
                var _this = this;
                var spotsNearbyPM = new spotsNearbyPageModel();
                var spotsNearbyV = new spotsNearbyPageView({model: spotsNearbyPM});
                //spotsNearbyPM.getSpots({
                //    onSuccess: function(){
                //        _this.changePage(spotsNearbyV);
                //    },
                //    onFailure: function(){
                //        _this.changePage(spotsNearbyV);
                //    }
                //});
                _this.changePage(spotsNearbyV);
            },
            showMyPage: function () {
                var _this = this;

                //debug用
                //localStorage.removeItem("userid");
                //localStorage.setItem("userid","shizhihui");
                //if (localStorage.getItem("userid") != null) {
                    //alert(localStorage.getItem("userid"));
                    var myPM = new myPageModel();
                    var nextV = new myPageView({model: myPM});
                    _this.changePage(nextV);
                //} else {
                //    localStorage.setItem("flipSwitch", "off");
                //    if (localStorage.getItem("flipSwitch") == "on") {
                //        localStorage.setItem("parent", "mySettings");
                //        window.location.href = "#gesturePW";
                //    } else {
                        //登录成功后继续跳转到“我的”页面去
                        //localStorage.setItem("next_page", "my");
                        //window.location.href = "#login";
                    //}
                //}
            },
            //手势密码
            showGesturePWPage: function () {
                var _this = this;
                var gesturePWPM = new gesturePWPageModel();
                var gesturePWV = new gesturePWPageView({model: gesturePWPM});
                _this.changePage(gesturePWV);
            },
            //“我的”积分
            showMyPointsPage: function () {
                var _this = this;
                var myPointsPM = new myPointsPageModel();
                var myPointsV = new myPointsPageView({model: myPointsPM});
                _this.changePage(myPointsV);
            },
            //“我的”设置
            showMySettingsPage: function () {
                var _this = this;
                var mySettingsPM = new mySettingsPageModel();
                var mySettingsV = new mySettingsPageView({model: mySettingsPM});
                _this.changePage(mySettingsV);
            },
            showUserMessage: function () {
                var _this = this;
                var userMessagePM = new userMessagePageModel();
                var userMessageV = new userMessagePageView({model: userMessagePM});
                _this.changePage(userMessageV);
            },
            showUserMessageDetail: function () {
                var _this = this;
                var userMessageDetailPM = new userMessageDetailPageModel();
                var userMessageDetailV = new userMessageDetailPageView({model: userMessageDetailPM});
                _this.changePage(userMessageDetailV);
            },
            //关于我们
            showAboutUsPage: function () {
                var _this = this;
                var aboutUsPM = new aboutUsPageModel();
                var aboutUsV = new aboutUsPageView({model: aboutUsPM});
                _this.changePage(aboutUsV);
            },
            //意见反馈
            showFeedBackPage: function () {
                var _this = this;
                var feedbackPM = new feedbackPageModel();
                var feedbackV = new feedbackPageView({model: feedbackPM});
                _this.changePage(feedbackV);
            },
            //意见反馈check
            feedbackSubmitCheck: function () {
                var _this = this;
                var fBackPM = new feedbackPageModel();
                var fBackV = new feedbackPageView({model: fBackPM});
                fBackPM.submitButton(

                );
            },
            showMyInfoPage: function () {
                var _this = this;
                var myInfoPM = new myInfoPageModel();
                var myInfoV = new myInfoPageView({model: myInfoPM});
                //myInfoPM.set('userid', localStorage.getItem('userid'));
                //myInfoPM.getMyInfo({
                //    onSuccess: function () {
                //        _this.changePage(myInfoV);
                //    },
                //    onFailure: function (msg) {
                //        alert(msg);
                //        //用户不存在的情况下，迁移至登录页面要求重新登录
                //        window.location.href = "#login";
                //    }
                //});
                _this.changePage(myInfoV);
            },
            showMysettingPage: function () {
                var _this = this;
                alert('router::showMysettingPage()');
                //TODO:
            },

            showUpdatePage: function () {
                var _this = this;
                alert('router::showUpdatePage()');
                //TODO:
            },
            //忘记密码
            showForgetPasswordPage: function () {
                var _this = this;
                var forgetPasswordPM = new forgetPasswordPageModel();
                var forgetPasswordV = new forgetPasswordPageView({model: forgetPasswordPM});
                _this.changePage(forgetPasswordV);
            },
            //注册
            showRegistPage: function () {
                var _this = this;
                var registPM = new registPageModel();
                var registV = new registPageView({model: registPM});
                _this.changePage(registV);
            },

            //验证码确认
            showVericodeConfirmPage: function () {
                var _this = this;
                var vericodeConfirmPM = new vericodeConfirmPageModel();
                var vericodeConfirmV = new vericodeConfirmPageView({model: vericodeConfirmPM});
                _this.changePage(vericodeConfirmV);
            },

            //密码设置
            showPasswordSettingPage: function () {
                var _this = this;
                var passwordSettingPM = new passwordSettingPageModel();
                var passwordSettingV = new passwordSettingPageView({model: passwordSettingPM});
                _this.changePage(passwordSettingV);
            },

            //账号绑定
            showAccountBindPage: function () {
                var _this = this;
                var accountBindPM = new accountBindPageModel();
                var accountBindV = new accountBindPageView({model: accountBindPM});
                _this.changePage(accountBindV);
            },

            //我家人的设备
            showMyFamilyDevicePage: function(){
                var _this = this;
                var myFamilyDevicePM = new myFamilyDevicePageModel();
                var myFamilyDeviceV = new myFamilyDevicePageView({model:myFamilyDevicePM});
                _this.changePage(myFamilyDeviceV);
            },
            showbindAcountPage: function () {
                var _this = this;
                var bindAcountPM = new bindAcountPageModel();
                var bindAcountV = new bindAcountPageView({model: bindAcountPM});
                _this.changePage(bindAcountV);
            },
            showUserMenager:function(){
                var _this = this;
                var userMenagerPM = new userMenagerPageModel();
                var userMenagerV = new userMenagerPageView({model: userMenagerPM});
                _this.changePage(userMenagerV);
            },
            showManuallyAddPage:function(){
                var _this = this;
                var manuallyAddPM = new manuallyAddPageModel();
                var manuallyAddV = new manuallyAddPageView({model: manuallyAddPM});
                _this.changePage(manuallyAddV);
            },
            showDeviceSearchPage:function(){
                var _this = this;
                var deviceSearchPM = new deviceSearchPageModel();
                var deviceSearchV = new deviceSearchPageView({model: deviceSearchPM});
                _this.changePage(deviceSearchV);
            },
            //关注排行
            showAttentionRankPage:function(){
                var _this = this;
                var attentionRankPM = new attentionRankPageModel();
                var attentionRankV = new attentionRankPageView({model: attentionRankPM});
                _this.changePage(attentionRankV);
            },

            /**********************************华丽的分割线*****************************************/
            //请在上面添加，这个方法请放在最后面
            changePage: function (page) {
                if ($(".swiper-container").length == 1) {
                    $(".swiper-container").parent().remove();
                }
                var footview = new footerPublickPageView();
                page.render();

                if (page.model.modelName != "welcomePageModel" && page.model.modelName != "gesturePWPageModel" && page.model.modelName != "myInfoPageModel") {
                    footview.render();
                }
                var islogin = $(page.el).find('#loginPage_id');
                var isforgetpsw = $(page.el).find('#forgetpsw');
                if (!islogin || !isforgetpsw || islogin.length <= 0) {
                    $(page.el).append($(footview.el).html());
                }
                var existingPage = $(page.el).find('[data-role="page"]');
                if (!existingPage || existingPage.length <= 0) {
                    $(page.el).attr('data-role', 'page');
                    $(page.el).css('background', '#fff');
                    existingPage = $(page.el);
                }


                $('#AppBody').append(existingPage);

                var transition = $.mobile.defaultPageTransition;
                $.mobile.changePage(existingPage, {changeHash: false, transition: transition});
                //history.go(-1);//返回上一页
            }
        });

        return Router;
    });