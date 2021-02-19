'use strict';

function done(args, workDir) {
  workDir = workDir || process.cwd();

  console.log('');
  console.log('**************************************************************');
  console.log('> Will build project: production');
  console.log('**************************************************************');
  console.log('');

  require('../_scripts/build-prd').run(workDir);
}


module.exports = {
  done: done,
};