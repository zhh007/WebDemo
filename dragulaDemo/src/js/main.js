require.config({
    baseUrl: "."
    , shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']//,
            //exports: '$.fn.popover'
        }
    }
    , paths: {
        jquery: '../../bower_components/jquery/dist/jquery.min',
        underscore: '../../bower_components/underscore/underscore-min',
        backbone: '../../bower_components/backbone/backbone-min',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        text: '../../bower_components/text/text',             //用于requirejs导入html类型的依赖
        app: "./js",
        templates: "./js/templates",
        controls: "./js/controls",
        models: "./js/models"
    }
});
require(['app/app'], function (app) {
    app.initialize();
});
