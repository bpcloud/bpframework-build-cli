'use strict';

function done(args, options, workDir) {
  workDir = workDir || process.cwd();

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project: development');
  console.log('**************************************************************');
  console.log('');

  var bundleAll = options.indexOf('--bundleAll') >= 0;
  require('../_scripts/build-dev').run(workDir, bundleAll);
}


module.exports = {
  done: done,
};