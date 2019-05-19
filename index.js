const EzwcCore = require('ezwc-cli/lib/ezwc');
const fs = require('fs');
const path = require('path');

module.exports = function() {
  const ezwcTempDir = path.resolve(this.rootContext, '.ezwc-tmp');
  if (!fs.existsSync(ezwcTempDir)) {
    fs.mkdirSync(ezwcTempDir)
  }
  const ezwcTempFile = path.resolve(ezwcTempDir, `${(new Date()).getTime()}.js`);
  EzwcCore.process(this.resourcePath, ezwcTempFile, false, true);
  const transpiledEzwcFile = fs.readFileSync(ezwcTempFile, 'utf8');
  fs.unlink(ezwcTempFile, (err) => { if (err) { console.error(err); } });

  return transpiledEzwcFile;
}