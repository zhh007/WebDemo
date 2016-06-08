define([
    "jquery", "underscore", "backbone"
    , "app/pubsub", "controls/temp-toolitem"
    , "models/input-text", "controls/input-text"
], function (
    $, _, Backbone
    , PubSub, TempToolItem
    , Model, Control
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "ctrl ctrl-input-text"
            , initialize: function () {

            }
            , render: function () {
                return this.$el.html('文本框');
            }
            , events: {
                "mousedown": "mouseDownHandler"
            }
            , mouseDownHandler: function (mouseDownEvent) {
                mouseDownEvent.preventDefault();
                mouseDownEvent.stopPropagation();
                var ctrl = new Control({ model: new Model() });
                $("body").append(new TempToolItem({ control: ctrl }).render());
                PubSub.trigger("newTempPostRender", mouseDownEvent);
            }
        });
    });
