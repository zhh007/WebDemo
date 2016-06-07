define([
    "jquery"
    , "app/pubsub"
], function (
    $
    , PubSub
) {
        return Backbone.View.extend({
            tagName: "form"
            , className: "form-horizontal"
            , initialize: function (options) {
                this.control = options.control;
                PubSub.on("newTempPostRender", this.postRender, this);
                //this.constructor.__super__.initialize.call(this);
                //this.tempTemplate = _.template(_tempTemplate);
            }
            , render: function () {
                return this.$el.html(this.control.render());
            }
            , postRender: function (mouseEvent) {
                this.tempForm = this.$el.find(".ctrl").parent()[0];
                //console.log(this.tempForm);
                //debugger;
                this.halfHeight = Math.floor(this.tempForm.clientHeight / 2);
                this.halfWidth = Math.floor(this.tempForm.clientWidth / 2);
                //console.log(this.halfWidth);
                this.centerOnEvent(mouseEvent);
                //debugger;
            }
            , events: {
                "mousemove": "mouseMoveHandler",
                "mouseup": "mouseUpHandler"
            }
            , centerOnEvent: function (mouseEvent) {
                var mouseX = mouseEvent.pageX;
                var mouseY = mouseEvent.pageY;
                this.tempForm.style.position = 'absolute';
                this.tempForm.style.top = (mouseY - this.halfHeight) + "px";
                //var l = (mouseX - this.halfWidth);
                this.tempForm.style.left = (mouseX) + "px";
                //console.log(mouseX);
                // Make sure the element has been drawn and
                // has height in the dom before triggering.
                //console.log("tempMove");
                PubSub.trigger("tempMove", mouseEvent);
            }
            , mouseMoveHandler: function (mouseEvent) {
                mouseEvent.preventDefault();
                this.centerOnEvent(mouseEvent);
            }
            , mouseUpHandler: function (mouseEvent) {
                mouseEvent.preventDefault();
                PubSub.trigger("tempDrop", mouseEvent, this.control);
                this.remove();
            }
        });
    });
