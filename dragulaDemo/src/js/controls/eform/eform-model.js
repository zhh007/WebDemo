define([
    "jquery", "underscore", "backbone"
], function (
    $, _, Backbone
    , Base
) {
        return Backbone.Model.extend({
            defaults: {
                id: 'form1',
                title: '表单名称',
                entityname: ''
            }
        });
    });
