const path = require('path');
const appRootDir = require('app-root-dir');

exports.index = (req, res) => {
  res.sendFile(path.resolve(appRootDir.get(), './views/home.html'));
};
