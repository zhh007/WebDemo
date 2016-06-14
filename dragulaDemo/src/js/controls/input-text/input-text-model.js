define([
    "jquery", "underscore", "backbone"
    , "controls/controlmodelbase"
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
        });
    });
