'use strict';

function done(args, workDir) {
  workDir = workDir || process.cwd();

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project: development');
  console.log('**************************************************************');
  console.log('');

  require('../_scripts/build-dev').run(workDir);
}


module.exports = {
  done: done,
};