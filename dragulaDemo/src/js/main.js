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
        },
        shCore: {
            deps: ['XRegExp']
        },
        shXml: {
            deps: ['shCore']
        },
        // shCss: {
        //     deps: ['shCore']
        // },
        shJs: {
            deps: ['shCore']
        },
        prettyJson:{
            deps:['jquery', 'underscore', 'backbone' ],
            exports: 'PrettyJSON'
        }
    }
    , paths: {
        jquery: '../../bower_components/jquery/dist/jquery.min',
        underscore: '../../bower_components/underscore/underscore-min',
        backbone: '../../bower_components/backbone/backbone-min',
        bootstrap: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        text: '../../bower_components/text/text',             //用于requirejs导入html类型的依赖
        XRegExp: '../../bower_components/SyntaxHighlighter/scripts/XRegExp',
        shCore: '../../bower_components/SyntaxHighlighter/scripts/shCore',
        shXml: '../../bower_components/SyntaxHighlighter/scripts/shBrushXml',
        //shCss:             '../../bower_components/SyntaxHighlighter/scripts/shBrushCss',
        shJs: '../../bower_components/SyntaxHighlighter/scripts/shBrushJScript',
        prettyJson: '../src/assets/pretty-json/pretty-json-min',
        app: "./js",
        help: "./js/help",
        templates: "../src/js/tpl",
        controls: "./js/controls",
        codegen: "./js/codegen"
    }
});
require(['app/app'], function (app) {
    app.initialize();
});
