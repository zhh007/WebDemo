define([
    "jquery", "underscore", "backbone"
], function (
    $, _, Backbone
) {
        return Backbone.Model.extend({
            control: ''
            , initialize: function () {
                this.handlerInit = true;
                this.selected = false;
            }
        });
    });
