const { spawnSync } = require("child_process");
const process = require("process");
const path = require("path");

function build_release() {
  console.log("release");
  let release_path = path.resolve("output", "release");
  spawnSync("cmake", ["--build", release_path, "--config", "Release"], {
    stdio: "inherit",
  });
  process.exit(0);
}
function build_debug() {
  console.log("debug");
  let debug_path = path.resolve("output", "debug");
  spawnSync("cmake", ["--build", debug_path, "--config", "Debug"], {
    stdio: "inherit",
  });
  process.exit(0);
}
if (process.argv.length < 3) {
  build_release();
}
if (process.argv[2] == "release") {
  build_release();
}
build_debug();
