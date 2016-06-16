define([
    "jquery", "underscore", "backbone"
    , "controls/controlmodelbase"
], function (
    $, _, Backbone
    , Base
) {
        return Base.extend({
            defaults: {
                control: 'rowcolumn',
                classname: 'col-md-6'
            }            
        });
    });
