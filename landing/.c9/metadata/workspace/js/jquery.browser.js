{"filter":false,"title":"jquery.browser.js","tooltip":"/js/jquery.browser.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":38,"column":13},"action":"insert","lines":["(function( jQuery ) {","\tvar matched,","\t\tuserAgent = navigator.userAgent || \"\";","","\t// Use of jQuery.browser is frowned upon.","\t// More details: http://api.jquery.com/jQuery.browser","\t// jQuery.uaMatch maintained for back-compat","\tjQuery.uaMatch = function( ua ) {","\t\tua = ua.toLowerCase();","","\t\tvar match = /(chrome)[ \\/]([\\w.]+)/.exec( ua ) ||","\t\t\t/(webkit)[ \\/]([\\w.]+)/.exec( ua ) ||","\t\t\t/(opera)(?:.*version)?[ \\/]([\\w.]+)/.exec( ua ) ||","\t\t\t/(msie) ([\\w.]+)/.exec( ua ) ||","\t\t\tua.indexOf(\"compatible\") < 0 && /(mozilla)(?:.*? rv:([\\w.]+))?/.exec( ua ) ||","\t\t\t[];","","\t\treturn {","\t\t\tbrowser: match[ 1 ] || \"\",","\t\t\tversion: match[ 2 ] || \"0\"","\t\t};","\t};","","\tmatched = jQuery.uaMatch( userAgent );","","\tjQuery.browser = {};","","\tif ( matched.browser ) {","\t\tjQuery.browser[ matched.browser ] = true;","\t\tjQuery.browser.version = matched.version;","\t}","","\t// Deprecated, use jQuery.browser.webkit instead","\t// Maintained for back-compat only","\tif ( jQuery.browser.webkit ) {","\t\tjQuery.browser.safari = true;","\t}","","}( jQuery ));"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":38,"column":13},"end":{"row":38,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1491237004258,"hash":"45707347def1e0555d0a0bdefc511a6190051671"}