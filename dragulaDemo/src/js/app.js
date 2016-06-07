define([
    "jquery", "underscore", "backbone"
    , "app/toolbox", "app/myform"
    , "app/formcontrols"
], function (
    $, _, Backbone
    , ToolBox, MyForm
    , FormControls
) {
        return {
            initialize: function () {
                new ToolBox();//{el: $("#toolbox")}
                new MyForm({collection: new FormControls()});
            }
        }
});
