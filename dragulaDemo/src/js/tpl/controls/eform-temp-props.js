/*TMODJS:{"version":3,"md5":"1928164b85faf76961db382e1687297f"}*/
define(["../template",""],function(a){return a("controls/eform-temp-props",function(a){"use strict";var b=this,c=(b.$helpers,b.$escape),d=a.id,e=a.title,f=a.entityname,g="";return g+='<tr>\r\n    <td class="info col-sm-4">\r\n        id\r\n    </td>\r\n    <td class="col-sm-8 propctrl">\r\n        <input type="text" class="form-control input-sm prop-id" value="',g+=c(d),g+='" />\r\n    </td>\r\n</tr>\r\n<tr>\r\n    <td class="info col-sm-4">\r\n        title\r\n    </td>\r\n    <td class="col-sm-8 propctrl">\r\n        <input type="text" class="form-control input-sm prop-title" value="',g+=c(e),g+='" />\r\n    </td>\r\n</tr>\r\n<tr>\r\n    <td class="info col-sm-4">\r\n        entityname\r\n    </td>\r\n    <td class="col-sm-8 propctrl">\r\n        <input type="text" class="form-control input-sm prop-entityname" value="',g+=c(f),g+='" />\r\n    </td>\r\n</tr>',new String(g)})});