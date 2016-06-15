define([
    "jquery", "underscore", "backbone", "bootstrap", "shCore", "shJs", "shXml"
    , "controls/toolbox", "controls/eform/eform", "controls/eform/eform-model"
    , "controls/formcontrols"
    , "codegen/modelbuilder"
    , "templates/codegen/codedialog"
], function (
    $, _, Backbone, bootstrap, shCore, shJs, shXml
    , ToolBox, EForm, EFormModel
    , FormControls
    , modelgen
    , codedialog
) {
        return {
            initialize: function () {
                new ToolBox();
                var formmodel = new EFormModel();
                formmodel.set('ctrls', new FormControls());
                var form = new EForm({model: formmodel});

                $('.btn-build').click(function() {
                    var brush = new SyntaxHighlighter.brushes.Xml();
                    brush.init({ toolbar: false, 'quick-code': true });

                    var code = modelgen.build(form);
                    var codediv = brush.getDiv(code);

                    var allhtml = codedialog({});
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
