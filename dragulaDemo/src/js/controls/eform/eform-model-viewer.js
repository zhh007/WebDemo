define([
    "jquery", "underscore", "backbone"
    , "prettyJson"
], function (
    $, _, Backbone
    , prettyJson
) {
        return Backbone.View.extend({
            tagName: "div"
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
                var jsonstr = JSON.stringify(this.model);
                var json = eval('(' + jsonstr + ')');

                var node = new prettyJson.view.Node({
                    el: this.$el,
                    data: json
                });
                node.expandAll();

                this.$el.appendTo("#mainformJSON");
            }
        })
    });
