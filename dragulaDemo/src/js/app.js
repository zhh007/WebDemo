define([
    "jquery", "underscore", "backbone", "bootstrap", "shCore", "shJs", "shXml"
    , "app/toolbox", "app/myform"
    , "controls/formcontrols"
    , "codegen/modelbuilder"
    , "text!templates/codedialog.html"
], function (
    $, _, Backbone, bootstrap, shCore, shJs, shXml
    , ToolBox, MyForm
    , FormControls
    , modelgen
    , codedialog
) {
        return {
            initialize: function () {
                new ToolBox();//{el: $("#toolbox")}
                var form = new MyForm({collection: new FormControls()});
                //debugger;
                var codetemp = _.template(codedialog);
                $('.btn-build').click(function() {
                    var brush = new SyntaxHighlighter.brushes.Xml();
                    brush.init({ toolbar: false, 'quick-code': true });

                    var code = modelgen.build(form);
                    var codediv = brush.getDiv(code);

                    var allhtml = codetemp({});
                    var dlg = $(allhtml);
                    $(document.body).append(dlg);
                    $('#divModel').append(codediv);

                    dlg.modal();
                    dlg.on('hidden.bs.modal', function () {
                        $(this).data('bs.modal', null);
                        $(this).removeData('bs.modal');
                        $(this).remove();
                    });
                });
            }
        }
});
