define([
    "jquery", "underscore", "backbone"
    , "controls/controlmodelbase"
    , "controls/allcontrols"
], function (
    $, _, Backbone
    , ModelBase
    , allCtrls
) {
        return Backbone.Collection.extend({
            model: ModelBase
            , initialize: function () {
                this.counter = {};
            }
            , renderAll: function () {
                return this.map(function (ctrlmodel) {
                    var ctrltype = ctrlmodel.get("control");
                    var ctrl = allCtrls[ctrltype];
                    if(ctrl){
                        return new ctrl({ model: ctrlmodel });
                    }
                });
            }
        });
    });
