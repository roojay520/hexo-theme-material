const fs = require('fs');
const crypto = require('crypto');


function getFileHexSync(filepath) {
  const buffer = fs.readFileSync(filepath);
  const fsHash = crypto.createHash('md5');

  fsHash.update(buffer);
  const sha384 = fsHash.digest('base64');
  return sha384;
}

module.exports = getFileHexSync;
