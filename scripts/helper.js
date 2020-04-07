hexo.extend.helper.register('jsHex', (...args) => require('./lib/js_hex.js').call(hexo, ...args));

hexo.extend.helper.register('jsLsload', (...args) => require('./lib/js_lsload.js').call(hexo, ...args));

hexo.extend.helper.register('cssLsload', (...args) => require('./lib/css_lsload.js').call(hexo, ...args));
