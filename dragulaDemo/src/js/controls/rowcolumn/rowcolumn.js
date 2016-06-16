define([
    "jquery", "underscore", "backbone"
    , "help/pubsub"
    , "controls/temp-toolitem"
], function (
    $, _, Backbone
    , PubSub
    , TempToolItem
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "ctrl ctrl-rowcolumn col-md-6"
            , initialize: function () {
                if (this.model) {
                    this.$el.removeClass().addClass("ctrl ctrl-rowcolumn").addClass(this.model.get("classname"));
                    this.model.on('change', this.render, this);
                }
                PubSub.on("ControlDrag", this.handleControlDrag, this);
                PubSub.on("ToolboxItemMove", this.handleToolboxItemMove, this);
                PubSub.on("ToolboxItemDrop", this.handleToolboxItemDrop, this);

                this.model.on('change', this.render, this);
            }
            , render: function () {
                var that = this;
                this.$el.empty();
                if (this.model.selected) {
                    $(".ctrl-selected").removeClass("ctrl-selected");
                    this.$el.addClass("ctrl-selected");
                }

                var ctrlmodel = this.model.get("ctrl");
                if (ctrlmodel != null) {
                    var ctrltype = ctrlmodel.get("control");
                    var ctrl = window._allCtrls[ctrltype];
                    if (ctrl) {
                        var cc = new ctrl({ model: ctrlmodel });
                        this.$el.html(cc.render());
                    }
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

            , handleToolboxItemMove: function (mouseEvent) {
                if (this.model.get("ctrl") != null) return;
                if (mouseEvent.pageX >= this.$el.offset().left &&
                    mouseEvent.pageX < (this.$el.width() + this.$el.offset().left) &&
                    mouseEvent.pageY >= this.$el.offset().top &&
                    mouseEvent.pageY < (this.$el.height() + this.$el.offset().top)) {
                    $(".target").removeClass("target");
                    $(".target-first").removeClass("target-first");
                    this.$el.addClass("target");
                }
            }

            , handleToolboxItemDrop: function (mouseEvent, control, index) {
                if (mouseEvent.pageX >= this.$el.offset().left &&
                    mouseEvent.pageX < (this.$el.width() + this.$el.offset().left) &&
                    mouseEvent.pageY >= this.$el.offset().top &&
                    mouseEvent.pageY < (this.$el.height() + this.$el.offset().top)) {
                    if (this.$el.hasClass("target")) {
                        if (this.model.get("ctrl") == null) {
                            this.model.set("ctrl", control.model);
                            $(".target").removeClass("target");
                        }
                    }
                }
            }

            , handleControlDrag: function (mouseEvent, ctrl) {
                if(ctrl == null) return;
                var curCtrl = this.model.get("ctrl");
                if(curCtrl != ctrl.model) return;
                //创建移动中的临时控件
                $("body").append(new TempToolItem({ control: ctrl }).render());
                this.model.set("ctrl", null);
                PubSub.trigger("NewTempControlMove", mouseEvent);
            }
            , showPropEdit: function () {
                var that = this;
                PubSub.trigger("ControlSelected", that);

                var propbox = $('#propTable');
                propbox.empty().off();

            }
        });
    });