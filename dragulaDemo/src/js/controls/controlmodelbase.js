define([
    "jquery", "underscore", "backbone"
], function (
    $, _, Backbone
) {
        return Backbone.Model.extend({
            control: 'input-text',
            id: '',
            labeltext: '文本',
            placeholder: '',
            help: ''
            , initialize: function () {
                this.handlerInit = true;
            }
        });
    });
