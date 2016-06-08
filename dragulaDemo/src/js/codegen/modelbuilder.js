define([
       'jquery', 'underscore', 'backbone'
       , 'text!templates/model.html'
], function(
  $, _, Backbone
  , modeltemp
) {
  return {
    build:function(form){
        return modeltemp;
    }
  }
});