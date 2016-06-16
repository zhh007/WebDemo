define([
    "jquery", "underscore", "backbone"
    , "controls/controlmodelbase"
    , "help/newider"
], function (
    $, _, Backbone
    , Base
    , NewIDer
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
                var id = NewIDer.getNewID(this.get("control"));
                this.set('id', "input_text_" + id);
                this.set('labeltext', "文本" + (id + 1));
            }
        });
    });
