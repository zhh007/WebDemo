define([
  "jquery", "underscore", "backbone"
  , "controls/temp-toolitem"
  , "help/pubsub"
  , "text!app/myform-temp.html", "text!app/myform-temp-props.html"
], function (
  $, _, Backbone
  , TempToolItem
  , PubSub
  , _template, _template_props 
) {
    return Backbone.View.extend({
      tagName: "form"
      , className: "form-horizontal"
      , initialize: function () {
        this.template = _.template(_template);
        this.template_props = _.template(_template_props);
        this.collection.on("add", this.render, this);
        this.collection.on("remove", this.render, this);
        this.collection.on("change", this.render, this);
        PubSub.on("ControlDrag", this.handleControlDrag, this);
        PubSub.on("ToolboxItemMove", this.handleToolboxItemMove, this);
        PubSub.on("ToolboxItemDrop", this.handleToolboxItemDrop, this);

        if (this.model) {
          this.model.on('change', this.handlerModelChange, this);
          //console.log(this.model);
        }

        this.$build = $("#mainform");
        //this.renderForm = _.template(_renderForm);
        this.render();
        this.showPropEdit();
      }
      , events: {
        "click .formtitle": "showPropEdit"
      }
      , render: function () {
        var that = this;
        this.$el.empty();
        
        that.$el.append(that.template(that.model.attributes));

        _.each(this.collection.renderAll(), function (snippet) {
          that.$el.append(snippet.render());
        });
        //   $("#render").val(that.renderForm({
        //     multipart: this.collection.containsFileType(),
        //     text: _.map(this.collection.renderAllClean(), function(e){return e.html()}).join("\n")
        //   }));
        this.$el.appendTo("#mainform");
        this.delegateEvents();
      }

      , handlerModelChange: function () {
        this.$el.find(".formtitle").text(this.model.get('title'));
      }

      , showPropEdit: function () {
        var that = this;
        var propbox = $('#propTable');
        propbox.empty().off();
        propbox.html(that.template_props(that.model.attributes));

        propbox.on("keyup", ".prop-id", function (e) {
          that.model.set({ 'id': $(e.target).val() });
        });

        propbox.on("keyup", ".prop-title", function (e) {
          that.model.set({ 'title': $(e.target).val() });
        });

        propbox.on("keyup", ".prop-entityname", function (e) {
          that.model.set({ 'entityname': $(e.target).val() });
        });

      }

      , getBottomAbove: function (eventY) {
        //console.log('getBottomAbove');
        var myFormBits = $(this.$el.find(".ctrl"));
        var topelement = _.find(myFormBits, function (renderedSnippet) {
          if (($(renderedSnippet).position().top + $(renderedSnippet).height()) > eventY) {
            return true;
          }
          else {
            return false;
          }
        });
        //console.log(myFormBits);
        //console.log(topelement);
        if (topelement) {
          //console.log("topelement is true");
          return topelement;
        } else {
          if (myFormBits.length == 0) {
            return this.$build;
          }
          return myFormBits[0];
        }
      }

      , handleControlDrag: function (mouseEvent, ctrl) {//debugger;
        //创建移动中的临时控件
        $("body").append(new TempToolItem({ control: ctrl }).render());
        this.collection.remove(ctrl.model);
        PubSub.trigger("NewTempControlMove", mouseEvent);
      }

      , handleToolboxItemMove: function (mouseEvent) {
        $(".target").removeClass("target");
        $(".target-first").removeClass("target-first");
        if (mouseEvent.pageX >= this.$build.position().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
          mouseEvent.pageY >= this.$build.position().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.position().top)) {
          var t = $(this.getBottomAbove(mouseEvent.pageY));
          var index = t.index();
          if (index == 1) {
            var firstCtrl = $(this.$el.find(".ctrl")[0]);
            if (mouseEvent.pageY < firstCtrl.position().top) {
              t.addClass("target-first");
            } else {
              t.addClass("target");
            }
          } else {
            t.addClass("target");
          }
        } else {
          $(".target").removeClass("target");
        }
      }

      , handleToolboxItemDrop: function (mouseEvent, control, index) {
        if (mouseEvent.pageX >= this.$build.position().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.position().left) &&
          mouseEvent.pageY >= this.$build.position().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.position().top)) {
          if ($(".target-first").length == 1) {
            $(".target-first").removeClass("target-first");
            this.collection.add(control.model, { at: 0 });
          } else {
            var index = $(".target").index();
            $(".target").removeClass("target");
            this.collection.add(control.model, { at: index });
          }
        } else {
          $(".target").removeClass("target");
          $(".target-first").removeClass("target-first");
          this.collection.add(control.model);
        }
      }
    })
  });
