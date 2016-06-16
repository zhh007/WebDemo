define([
    "jquery", "underscore", "backbone"
    , "help/pubsub"
], function (
    $, _, Backbone
    , PubSub
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "ctrl ctrl-rowcolumn col-md-6"
            , initialize: function () {
                if (this.model) {
                    this.$el.removeClass().addClass("ctrl ctrl-rowcolumn").addClass(this.model.get("classname"));
                    this.model.on('change', this.render, this);
                }
            }
            , render: function () {
                var that = this;
                this.$el.empty();
                if(this.model.selected) {
                    $(".ctrl-selected").removeClass("ctrl-selected");
                    this.$el.addClass("ctrl-selected");
                }
                return this.$el;
            }, events: {
                "click": "preventPropagation" //stops checkbox / radio reacting.
                , "mousedown": "mouseDownHandler"
                , "mouseup": "mouseUpHandler"
            }, mouseDownHandler: function (mouseDownEvent) {
                mouseDownEvent.stopPropagation();
                mouseDownEvent.preventDefault();
                var that = this;
                that.showPropEdit();

                //表单控件移动
                //if (this.model.get("title") !== "Form Name") {
                // $("body").on("mousemove", function (mouseMoveEvent) {
                //     if (
                //         Math.abs(mouseDownEvent.pageX - mouseMoveEvent.pageX) > 10 ||
                //         Math.abs(mouseDownEvent.pageY - mouseMoveEvent.pageY) > 10
                //     ) {
                //         PubSub.trigger("ControlDrag", mouseDownEvent, that);
                //         that.mouseUpHandler();
                //     };
                // });
                //}
            }

            , preventPropagation: function (e) {
                e.stopPropagation();
                e.preventDefault();
            }

            , mouseUpHandler: function (mouseUpEvent) {
                $("body").off("mousemove");
            }
            , showPropEdit: function () {
                var that = this;
                PubSub.trigger("ControlSelected", that);

                var propbox = $('#propTable');
                propbox.empty().off();

            }
        });
    });