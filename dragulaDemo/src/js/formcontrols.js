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
                if (!ctrl.get("fresh")) {
                    return;
                }
                ctrl.set("fresh", false);
                var snippetType = ctrl.control;

                if (typeof this.counter[snippetType] === "undefined") {
                    this.counter[snippetType] = 0;
                } else {
                    this.counter[snippetType] += 1;
                }

                ctrl.set("id", snippetType + "-" + this.counter[snippetType]);
                ctrl.set("labeltext", ctrl.get("labeltext") + (this.counter[snippetType] + 1));
                // if (typeof ctrl.get("fields")["id2"] !== "undefined") {
                //     ctrl.set("id2", snippetType + "2-" + this.counter[snippetType]);
                // }
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
