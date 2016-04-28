define(['text!module1/tpl.html'], function (tpl) {

    var controller = function (name) {
        appView.html(_.template(tpl)({name: name?name:'kenko'}));
    };
    return controller;
});