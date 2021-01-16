const { spawnSync } = require('child_process');
const process = require('process');
const path = require('path');

function run_release() {
  let app_path = path.resolve('output', 'release', 'source', 'little-world');
  spawnSync(app_path, [], {
    stdio: 'inherit',
  });
  process.exit(0);
}

function run_debug() {
  let app_path = path.resolve('output', 'debug', 'source', 'little-world');
  spawnSync(app_path, [], {
    stdio: 'inherit',
  });
  process.exit(0);
}

if (process.argv.length < 3) {
  run_release();
}
if (process.argv[2] == 'release') {
  run_release();
}
run_debug();
