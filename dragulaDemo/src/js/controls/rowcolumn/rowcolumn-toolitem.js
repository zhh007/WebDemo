define([
    "jquery", "underscore", "backbone"
    , "help/pubsub", "controls/temp-toolitem"
    , "controls/rowcolumn/rowcolumn-model", "controls/rowcolumn/rowcolumn"
], function (
    $, _, Backbone
    , PubSub, TempToolItem
    , Model, Control
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "ctrl"
            , initialize: function () {

            }
            , render: function () {
                return this.$el.html('列');
            }
            , events: {
                "mousedown": "mouseDownHandler"
            }
            , mouseDownHandler: function (mouseDownEvent) {
                mouseDownEvent.preventDefault();
                mouseDownEvent.stopPropagation();
                //创建移动中的临时控件
                var ctrl = new Control({ model: new Model() });
                $("body").append(new TempToolItem({ control: ctrl }).render());
                PubSub.trigger("NewTempControlMove", mouseDownEvent);
            }
        });
    });
