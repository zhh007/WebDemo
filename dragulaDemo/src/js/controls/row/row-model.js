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
                control: 'row',
                columns: []
            }
            , initialize: function () {
                var id = NewIDer.getNewID(this.get("control"));
                this.set('id', "row_" + id);
            }
        });
    });
