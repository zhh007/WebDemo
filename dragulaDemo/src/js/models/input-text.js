define([
    "jquery", "underscore", "backbone"
    , "models/base"
], function (
    $, _, Backbone
    , Base
) {
        return Base.extend({
            defaults: {
                control: 'input-text',
                id: '',
                name: '',
                labeltext: '文本',
                placeholder: '',
                help: ''
            }
            , initialize: function () {
                this.set("fresh", true);
            }
        });
    });
