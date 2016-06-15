define([
    "jquery"
    , "help/pubsub"
], function (
    $
    , PubSub
) {
        return Backbone.View.extend({
            tagName: "form"
            , className: "form-horizontal temp"
            , events: {
                "mousemove": "mouseMoveHandler",
                "mouseup": "mouseUpHandler"
            }
            , initialize: function (options) {
                this.control = options.control;
                PubSub.on("NewTempControlMove", this.handleNewTempControlMove, this);
            }
            , render: function () {
                return this.$el.html(this.control.render());
            }
            , handleNewTempControlMove: function (mouseEvent) {
                this.tempForm = this.$el.find(".ctrl").parent()[0];
                this.halfHeight = Math.floor(this.tempForm.clientHeight / 2);
                this.halfWidth = Math.floor(this.tempForm.clientWidth / 2);
                this.centerOnEvent(mouseEvent);
            }
            , centerOnEvent: function (mouseEvent) {
                var mouseX = mouseEvent.pageX;
                var mouseY = mouseEvent.pageY;
                this.tempForm.style.position = 'absolute';
                this.tempForm.style.top = (mouseY - this.halfHeight) + "px";
                this.tempForm.style.left = (mouseX - 20) + "px";

                PubSub.trigger("ToolboxItemMove", mouseEvent);
            }
            , mouseMoveHandler: function (mouseEvent) {
                mouseEvent.preventDefault();
                this.centerOnEvent(mouseEvent);
            }
            , mouseUpHandler: function (mouseEvent) {
                mouseEvent.preventDefault();
                PubSub.trigger("ToolboxItemDrop", mouseEvent, this.control);
                this.remove();
            }
        });
    });
