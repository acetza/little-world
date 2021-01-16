const { spawnSync } = require('child_process');
const path = require('path');

spawnSync('node', [path.resolve('tasks', 'build.js')], {
  stdio: 'inherit',
});

spawnSync('node', [path.resolve('tasks', 'run.js')], {
  stdio: 'inherit',
});
