define([
       "jquery", "underscore", "backbone"
      , "controls/temp-toolitem"
      , "help/pubsub"
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
        if (($(renderedSnippet).position().top + $(renderedSnippet).height()) > eventY ) {
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
      $(".target-first").removeClass("target-first");
      if(mouseEvent.pageX >= this.$build.position().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
          mouseEvent.pageY >= this.$build.position().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.position().top)){
            var t = $(this.getBottomAbove(mouseEvent.pageY));
            var index = t.index();
            if(index == 1){
              var firstCtrl = $(this.$el.find(".ctrl")[0]);
              if(mouseEvent.pageY < firstCtrl.position().top){
                t.addClass("target-first");
              } else {
                t.addClass("target");
              }
            }else{
              t.addClass("target");
            }
      } else {
        $(".target").removeClass("target");
      }
    }

    , handleTempDrop: function(mouseEvent, control, index){
      if(mouseEvent.pageX >= this.$build.position().left &&
         mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
         mouseEvent.pageY >= this.$build.position().top &&
         mouseEvent.pageY < (this.$build.height() + this.$build.position().top)) {
           if($(".target-first").length == 1){
              $(".target-first").removeClass("target-first");
              this.collection.add(control.model,{at: 0});
           } else{
              var index = $(".target").index();
              $(".target").removeClass("target");
              this.collection.add(control.model,{at: index});
           }
      } else {
        $(".target").removeClass("target");
        $(".target-first").removeClass("target-first");
        this.collection.add(control.model);
      }
    }
  })
});
