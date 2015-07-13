require.config({
    paths: {
        jquery:     '../libs/jquery-2.1.3',
        jqmconfig:   'jqm.config',
        jqm:     '../libs/jquery.mobile-1.4.5',
        underscore: '../libs/underscore',
        backbone:   '../libs/backbone',
        localstorage: '../libs/backbone.localStorage',
        text:       'require/text',
        page:  '../../page',
        modules:  'modules',
        mec:    '../mec',
        controller:  '../mec/controller'
    }

});
require(['app'], function(app) {

    $.AppRouter = window.AppRouter = app.initialize();
    
});
