define([
       'jquery', 'underscore', 'backbone'
       , 'templates/codegen/model'
], function(
  $, _, Backbone
  , modeltemp
) {
  return {
    build:function(form){
        return modeltemp({});
    }
  }
});