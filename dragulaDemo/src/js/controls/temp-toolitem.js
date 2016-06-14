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
                //this.constructor.__super__.initialize.call(this);
                //this.tempTemplate = _.template(_tempTemplate);
            }
            , render: function () {
                return this.$el.html(this.control.render());
            }
            , handleNewTempControlMove: function (mouseEvent) {
                this.tempForm = this.$el.find(".ctrl").parent()[0];
                //console.log(this.tempForm);
                //debugger;
                this.halfHeight = Math.floor(this.tempForm.clientHeight / 2);
                this.halfWidth = Math.floor(this.tempForm.clientWidth / 2);
                //console.log(this.halfWidth);
                this.centerOnEvent(mouseEvent);
                //debugger;
            }
            , centerOnEvent: function (mouseEvent) {
                var mouseX = mouseEvent.pageX;
                var mouseY = mouseEvent.pageY;
                this.tempForm.style.position = 'absolute';
                this.tempForm.style.top = (mouseY - this.halfHeight) + "px";
                //var l = (mouseX - this.halfWidth);
                this.tempForm.style.left = (mouseX - 20) + "px";
                //console.log(mouseX);
                // Make sure the element has been drawn and
                // has height in the dom before triggering.
                //console.log("toolboxitem");

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
