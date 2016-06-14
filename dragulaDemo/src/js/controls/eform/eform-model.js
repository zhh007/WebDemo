define([
    "jquery", "underscore", "backbone"
    , "controls/base"
], function (
    $, _, Backbone
    , Base
) {
        return Base.extend({
            defaults: {
                id: 'form1',
                title: '表单名称',
                entityname: ''
            }
        });
    });
