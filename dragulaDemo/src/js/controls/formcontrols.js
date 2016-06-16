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
                this.on("add", this.giveUniqueId);
            }
            , giveUniqueId: function (ctrl) {
                if(!ctrl.handlerInit){
                    return;
                }
                ctrl.handlerInit = false;
                var ctrlType = ctrl.get("control");

                if (typeof this.counter[ctrlType] === "undefined") {
                    this.counter[ctrlType] = 0;
                } else {
                    this.counter[ctrlType] += 1;
                }

                ctrl.set("id", ctrlType + "-" + this.counter[ctrlType]);
                if(ctrlType != 'row' && ctrlType != 'rowcolumn'){
                    ctrl.set("labeltext", ctrl.get("labeltext") + (this.counter[ctrlType] + 1));
                }
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
