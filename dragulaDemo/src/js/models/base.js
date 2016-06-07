define([
    "jquery", "underscore", "backbone"
], function (
    $, _, Backbone
) {
        return Backbone.Model.extend({
            control: 'input-text',
            id: '',
            name: '',
            labeltext: '文本',
            placeholder: '',
            help: ''
        });
    });
