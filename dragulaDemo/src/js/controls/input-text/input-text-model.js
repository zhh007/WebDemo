define([
    "jquery", "underscore", "backbone"
    , "controls/base"
], function (
    $, _, Backbone
    , Base
) {
        return Base.extend({
            defaults: {
                control: 'input-text',
                id: '',
                labeltext: '文本',
                placeholder: '',
                help: ''
            }
            , initialize: function () {
                this.set("fresh", true);
            }
        });
    });
