define([
    "jquery", "underscore", "backbone"
    , "text!templates/input-text.html"
    , "app/pubsub"
], function (
    $, _, Backbone
    , _template
    , PubSub
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "form-group ctrl ctrl-input-text cls-instance"
            , initialize: function () {
                this.template = _.template(_template);
            }
            , render: function () {
                var that = this;
                return this.$el.html(
                    that.template(this.model)
                );
            }, events: {
                "click": "preventPropagation" //stops checkbox / radio reacting.
                , "mousedown": "mouseDownHandler"
                , "mouseup": "mouseUpHandler"
            }, mouseDownHandler: function (mouseDownEvent) {
                mouseDownEvent.stopPropagation();
                mouseDownEvent.preventDefault();
                var that = this;
                //popover
                //$(".popover").remove();
                //this.$el.popover("show");
                //$(".popover #save").on("click", this.saveHandler(that));
                //$(".popover #cancel").on("click", this.cancelHandler(that));
                //add drag event for all but form name
                //if (this.model.get("title") !== "Form Name") {
                    $("body").on("mousemove", function (mouseMoveEvent) {
                        if (
                            Math.abs(mouseDownEvent.pageX - mouseMoveEvent.pageX) > 10 ||
                            Math.abs(mouseDownEvent.pageY - mouseMoveEvent.pageY) > 10
                        ) {
                            //that.$el.popover('destroy');
                            //debugger;
                            PubSub.trigger("ControlDrag", mouseDownEvent, that);
                            that.mouseUpHandler();
                        };
                    });
                //}
            }

            , preventPropagation: function (e) {
                e.stopPropagation();
                e.preventDefault();
            }

            , mouseUpHandler: function (mouseUpEvent) {
                $("body").off("mousemove");
            }
        });
    });