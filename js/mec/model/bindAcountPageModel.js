define(['backbone', 'underscore','localstorage'],
    function(Backbone, _) {
        return Backbone.Model.extend({
            defaults: {},
            modelName:"bindAcountPageModel",
            //	fetchSuccessfull:false,
            fetchFromLocalStorageSuccessfull:false,

            localStorage: new Backbone.LocalStorage("bindAcountPageModel"),

            initialize : function() {
                var _this = this;
            }

        });
    });