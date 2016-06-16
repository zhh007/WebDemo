define([
    "jquery", "underscore", "backbone"
    , "controls/controlmodelbase"
], function (
    $, _, Backbone
    , Base
) {
        return Base.extend({
            defaults: {
                control: 'row',
            }            
        });
    });
