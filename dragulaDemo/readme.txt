
在文件
\bower_components\SyntaxHighlighter\scripts\shBrushJScript.js
\bower_components\SyntaxHighlighter\scripts\shBrushXml.js
将下面这句
typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;
修改为
SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

