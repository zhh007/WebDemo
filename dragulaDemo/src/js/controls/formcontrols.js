define([
    "jquery", "underscore", "backbone"
    , "controls/base"
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
                var ctrlType = ctrl.control;

                if (typeof this.counter[ctrlType] === "undefined") {
                    this.counter[ctrlType] = 0;
                } else {
                    this.counter[ctrlType] += 1;
                }

                ctrl.set("id", ctrlType + "-" + this.counter[ctrlType]);
                ctrl.set("labeltext", ctrl.get("labeltext") + (this.counter[ctrlType] + 1));
            }
            , renderAll: function () {
                return this.map(function (ctrlmodel) {
                    var ctrl = allCtrls['input-text'];
                    if(ctrl){
                        return new ctrl({ model: ctrlmodel });
                    }
                });
            }
        });
    });
