define([
    "jquery", "underscore", "backbone"
    //, "controls/temp-toolitem"
    //, "help/pubsub"
    //, "text!controls/eform/eform-temp.html", "text!controls/eform/eform-temp-props.html"
], function (
    $, _, Backbone
    , TempToolItem
    , PubSub
    , _template, _template_props
) {
        return Backbone.View.extend({
            tagName: "div"
            //, className: "form-horizontal"
            , initialize: function () {
                this.collection = this.model.get('ctrls');
                this.model.on('change', this.render, this);
                this.collection.on("add", this.render, this);
                this.collection.on("remove", this.render, this);
                this.collection.on("change", this.render, this);

                this.render();
            }
            , render: function () {
                var that = this;
                this.$el.empty();

                this.$el.append(JSON.stringify(this.model));
                //this.$el.append(JSON.stringify(this.collection));
                this.$el.appendTo("#mainformJSON");
            }
        })
    });
