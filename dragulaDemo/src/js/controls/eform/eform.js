define([
  "jquery", "underscore", "backbone"
  , "controls/temp-toolitem"
  , "help/pubsub"
  , "templates/controls/eform-temp", "templates/controls/eform-temp-props"
  , "controls/eform/eform-model-viewer"
], function (
  $, _, Backbone
  , TempToolItem
  , PubSub
  , _template, _template_props
  , EFormModelViewer
) {
    return Backbone.View.extend({
      tagName: "form"
      , className: "form-horizontal"
      , initialize: function () {
        //this.template = _.template(_template);
        //this.template_props = _.template(_template_props);
        PubSub.on("ControlDrag", this.handleControlDrag, this);
        PubSub.on("ToolboxItemMove", this.handleToolboxItemMove, this);
        PubSub.on("ToolboxItemDrop", this.handleToolboxItemDrop, this);
        PubSub.on("ControlSelected", this.handleControlSelected, this);

        this.collection = this.model.get('ctrls');
        this.model.on('change', this.handlerModelChange, this);
        this.collection.on("add", this.render, this);
        this.collection.on("remove", this.render, this);
        this.collection.on("change", this.render, this);

        this.$build = $("#mainform");

        this.render();
        this.showPropEdit();

        this.viewer = new EFormModelViewer({ model: this.model });
      }
      , events: {
        "click .formtitle": "showPropEdit"
      }
      , render: function () {
        var that = this;
        this.$el.empty();

        that.$el.append(_template(that.model.attributes));

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

        this.clearAllSelected();
        this.$el.addClass("ctrl-selected");

        var propbox = $('#propTable');
        propbox.empty().off();
        propbox.html(_template_props(that.model.attributes));

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
        var myFormBits = $(this.$el.find(".ctrl"));
        var topelement = _.find(myFormBits, function (renderedSnippet) {
          var top = $(renderedSnippet).offset().top;
          var h = $(renderedSnippet).height();
          if (top > eventY || (top < eventY && top + h > eventY)) {
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
          return myFormBits[myFormBits.length - 1];
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
        if (mouseEvent.pageX >= this.$build.offset().left &&
          mouseEvent.pageX < (this.$build.width() + this.$build.offset().left) &&
          mouseEvent.pageY >= this.$build.offset().top &&
          mouseEvent.pageY < (this.$build.height() + this.$build.offset().top)) {
          var t = $(this.getBottomAbove(mouseEvent.pageY));
          var index = t.index();
          if (index == 1) {
            var firstCtrl = $(this.$el.find(".ctrl")[0]);
            if (mouseEvent.pageY < firstCtrl.offset().top) {
              t.addClass("target-first");
            } else {
              t.addClass("target");
            }
          } else {
            t.addClass("target");
          }
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
          if ($(".target").length == 1) {
            $(".target").removeClass("target");
            $(".target-first").removeClass("target-first");
            this.collection.add(control.model);
          }
        }
      }
      , handleControlSelected: function (control) {
        this.clearAllSelected();
        control.model.selected = true;
        control.$el.addClass("ctrl-selected");
      }
      , clearAllSelected: function () {
        $(".ctrl-selected").removeClass("ctrl-selected");
        this.collection.each(function (o, i, list) {
          o.selected = false;
        });
      }

    })
  });
