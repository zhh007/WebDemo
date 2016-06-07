define([
    "jquery", "underscore", "backbone"
    , "text!templates/input-text.html"
], function (
    $, _, Backbone
    , _template
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
            }
        });
    });