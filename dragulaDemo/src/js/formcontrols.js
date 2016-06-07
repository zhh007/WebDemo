define([
    "jquery", "underscore", "backbone"
    , "models/base"
    , "controls/input-text"
], function (
    $, _, Backbone
    , ModelBase
    , ctrlText
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

                // if (typeof ctrl.get("fields")["id2"] !== "undefined") {
                //     ctrl.set("id2", snippetType + "2-" + this.counter[snippetType]);
                // }
            }
            , renderAll: function () {
                return this.map(function (ctrl) {
                    //debugger;
                    switch (ctrl.control) {
                        case "input-text":
                            return new ctrlText({ model: ctrl });
                            //break;
                    }
                    //return ctrl.render();
                });
            }
        });
    });
