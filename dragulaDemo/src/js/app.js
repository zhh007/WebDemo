define([
    "jquery", "underscore", "backbone", "bootstrap"
    , "app/toolbox", "app/myform"
    , "app/formcontrols"
    , "codegen/modelbuilder"
    , "text!templates/codedialog.html"
], function (
    $, _, Backbone, bootstrap
    , ToolBox, MyForm
    , FormControls
    , modelgen
    , codedialog
) {
        return {
            initialize: function () {
                new ToolBox();//{el: $("#toolbox")}
                var form = new MyForm({collection: new FormControls()});
                
                var codetemp = _.template(codedialog);
                $('.btn-build').click(function() {
                    var html = modelgen.build(form);
                    var all = codetemp({code: "<code>" + html + "</code>"});
                    var dlg = $(all);
                    $(document.body).append(dlg);
                    dlg.modal();
                });
            }
        }
});
