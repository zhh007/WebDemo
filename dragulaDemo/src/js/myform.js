define([
       "jquery", "underscore", "backbone"
      , "controls/temp-toolitem"
      , "app/pubsub"
      //, "text!templates/app/renderform.html"
], function(
  $, _, Backbone
  , TempToolItem
  , PubSub
  //, _renderForm 
){
  return Backbone.View.extend({
    tagName: "form"
    , className: "form-horizontal"
    , initialize: function(){
      this.collection.on("add", this.render, this);
      this.collection.on("remove", this.render, this);
      this.collection.on("change", this.render, this);
      PubSub.on("ControlDrag", this.handleSnippetDrag, this);
      PubSub.on("tempMove", this.handleTempMove, this);
      PubSub.on("tempDrop", this.handleTempDrop, this);
      this.$build = $("#mainform");
      //this.renderForm = _.template(_renderForm);
      this.render();
    }

    , render: function(){
      //Render Snippet Views
      this.$el.empty();
      var that = this;
      //var containsFile = false;
      //debugger;

      var html = '<fieldset><div><legend>表单名</legend></div></fieldset>';
      that.$el.append(html);
      
      _.each(this.collection.renderAll(), function(snippet){
        that.$el.append(snippet.render());
      });
    //   $("#render").val(that.renderForm({
    //     multipart: this.collection.containsFileType(),
    //     text: _.map(this.collection.renderAllClean(), function(e){return e.html()}).join("\n")
    //   }));
      this.$el.appendTo("#mainform");
      this.delegateEvents();
    }

    , getBottomAbove: function(eventY){
        //console.log('getBottomAbove');
      var myFormBits = $(this.$el.find(".ctrl"));
      var topelement = _.find(myFormBits, function(renderedSnippet) {
        if (($(renderedSnippet).position().top + $(renderedSnippet).height()) > eventY  - $(renderedSnippet).height()/2 ) {
          return true;
        }
        else {
          return false;
        }
      });
      //console.log(myFormBits);
      //console.log(topelement);
      if (topelement){
        //console.log("topelement is true");
        return topelement;
      } else {
        if(myFormBits.length == 0){
          return this.$build;
        }
        return myFormBits[0];
      }
    }

    , handleSnippetDrag: function(mouseEvent, ctrl) {//debugger;
      $("body").append(new TempToolItem({control: ctrl}).render());
      this.collection.remove(ctrl.model);
      PubSub.trigger("newTempPostRender", mouseEvent);
    }

    , handleTempMove: function(mouseEvent){
      $(".target").removeClass("target");
      if(mouseEvent.pageX >= this.$build.position().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
          mouseEvent.pageY >= this.$build.position().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.position().top)){
            var t = $(this.getBottomAbove(mouseEvent.pageY));
            var index = t.index();
            //console.log("index: " + index);
        t.addClass("target");
      } else {
        $(".target").removeClass("target");
      }
    }

    , handleTempDrop: function(mouseEvent, control, index){
      if(mouseEvent.pageX >= this.$build.position().left &&
         mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
         mouseEvent.pageY >= this.$build.position().top &&
         mouseEvent.pageY < (this.$build.height() + this.$build.position().top)) {
        var index = $(".target").index();//debugger;
        $(".target").removeClass("target");
        //debugger;
        this.collection.add(control.model,{at: index+1});
      } else {
        $(".target").removeClass("target");
        this.collection.add(control.model);
      }
    }
  })
});
