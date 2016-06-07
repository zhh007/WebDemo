define([
    'jquery', 'underscore', 'backbone'
    , "controls/input-text-toolitem"
], function ($, _, Backbone, inputText) {
    return Backbone.View.extend({
        tagName: "div"
        , className: "panel panel-default"
        , initialize: function () {
            //   this.id = this.options.title.toLowerCase().replace(/\W/g,'');
            //   this.tabNavTemplate = _.template(_tabNavTemplate);
            //   this.render();
            this.collection = [new inputText()];
            this.render();
        }
        , render: function () {
            var that = this;
            that.$el.append('<div class="panel-heading">基本控件</div>');
            var $table = $('<table class="table"></table>');
            if (that.collection !== undefined) {
                _.each(this.collection, function (ctrl) {
                    var $tr = $('<tr></tr>');
                    var $td = $('<td class="ctrlbox"></td>');
                    $table.append($tr);
                    $tr.append($td);
                    $td.append(ctrl.render(false));
                });
            }

            that.$el.append($table);

            //$("#toolbox").append(h);
            this.$el.appendTo("#toolbox");
        }
    });
});