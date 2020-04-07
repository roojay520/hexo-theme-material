
const { url_for } = require('hexo-util');
const path_for = require('./path_for');
const get_file_hex = require('./get_file_hex');

function jsHelper(...args) {
  let result = '';
  let path = '';

  for (let i = 0, len = args.length; i < len; i++) {
    path = args[i];

    if (i) result += '\n';

    if (Array.isArray(path)) {
      result += jsHelper.apply(this, path);
    } else {
      if (path.indexOf('?') < 0 && path.substring(path.length - 3, path.length) !== '.js') path += '.js';
      result += `<script src="${url_for.call(this, path)}?${get_file_hex(path_for.call(this, path))}"></script>`;
    }
  }

  return result;
}

module.exports = jsHelper;
