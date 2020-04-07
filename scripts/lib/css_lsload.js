
const fs = require('fs');
const { url_for } = require('hexo-util');
const path_for = require('./path_for');
const get_file_hex = require('./get_file_hex');

function cssHelper(...args) {
  let result = '';
  let path = '';
  let key = '';

  for (let i = 0, len = args.length; i < len; i++) {
    if (typeof args[i] === 'string') {
      path = args[i];
      key = path;
    } else {
      path = args[i].path;
      key = args[i].key;
    }

    if (i) result += '\n';

    if (Array.isArray(path)) {
      result += jsHelper.apply(this, path);
    } else {
      if (path.indexOf('?') < 0 && path.substring(path.length - 4, path.length) !== '.css') path += '.css';
      const localpath = path_for.call(this, path);
      result += `<style id="${key}"></style><script>if(typeof window.lsLoadCSSMaxNums === "undefined")window.lsLoadCSSMaxNums = 0;`
        + 'window.lsLoadCSSMaxNums++;'
        + `lsloader.load("${key}","${url_for.call(this, path)
        }${fs.existsSync(localpath) ? `?${get_file_hex(localpath)}` : ''}",function(){if(typeof window.lsLoadCSSNums === "undefined")window.lsLoadCSSNums = 0;`
        + 'window.lsLoadCSSNums++;'
        + 'if(window.lsLoadCSSNums == window.lsLoadCSSMaxNums)document.documentElement.style.display="";'
        + '}, false)</script>';
    }
  }
  return result;
}

module.exports = cssHelper;
