define([
    "jquery", "underscore", "backbone"
    , "text!controls/input-text/input-text-temp.html", "text!controls/input-text/input-text-temp-props.html"
    , "help/pubsub"
], function (
    $, _, Backbone
    , _template, _template_props
    , PubSub
) {
        return Backbone.View.extend({
            tagName: "div"
            , className: "form-group ctrl ctrl-input-text cls-instance"
            , initialize: function () {
                this.template = _.template(_template);
                this.template_props = _.template(_template_props);
                if (this.model) {
                    this.model.on('change', this.render, this);
                    //console.log(this.model);
                }
            }
            , render: function () {
                var that = this;
                return this.$el.html(
                    that.template(this.model.attributes)
                );
            }, events: {
                "click": "preventPropagation" //stops checkbox / radio reacting.
                , "mousedown": "mouseDownHandler"
                , "mouseup": "mouseUpHandler"
            }, mouseDownHandler: function (mouseDownEvent) {
                mouseDownEvent.stopPropagation();
                mouseDownEvent.preventDefault();
                var that = this;
                that.showPropEdit();

                //add drag event for all but form name
                //if (this.model.get("title") !== "Form Name") {
                $("body").on("mousemove", function (mouseMoveEvent) {
                    if (
                        Math.abs(mouseDownEvent.pageX - mouseMoveEvent.pageX) > 10 ||
                        Math.abs(mouseDownEvent.pageY - mouseMoveEvent.pageY) > 10
                    ) {
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
            , showPropEdit: function () {
                var that = this;
                var propbox = $('#propTable');
                propbox.empty().off();
                propbox.html(that.template_props(that.model.attributes));

                propbox.on("keyup", ".prop-id", function (e) {
                    that.model.set({ 'id': $(e.target).val() });
                });

                propbox.on("keyup", ".prop-labeltext", function (e) {
                    that.model.set({ 'labeltext': $(e.target).val() });
                });

                propbox.on("keyup", ".prop-placeholder", function (e) {
                    that.model.set({ 'placeholder': $(e.target).val() });
                });

                propbox.on("keyup", ".prop-help", function (e) {
                    that.model.set({ 'help': $(e.target).val() });
                });
                // propbox.on({
                //     "keyup .prop-id": function (e) {
                //         that.model.set({ 'id': $(e.originalEvent.target).val() });
                //     },
                //     "keyup .prop-name": function (e) {
                //         that.model.set({ 'name': $(e.originalEvent.target).val() });
                //     },
                //     "keyup .prop-labeltext": function (e) {
                //         that.model.set({ 'labeltext': $(e.originalEvent.target).val() });
                //     },
                //     "keyup .prop-placeholder": function (e) {
                //         that.model.set({ 'placeholder': $(e.originalEvent.target).val() });
                //     },
                //     "keyup .prop-help": function (e) {
                //         that.model.set({ 'help': $(e.originalEvent.target).val() });
                //     }
                // });

            }
        });
    });