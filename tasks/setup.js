const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");
var rimraf = require("rimraf");
function ensure_directory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
let output_path = path.resolve("output");
rimraf.sync(output_path);
ensure_directory(output_path);

let release_path = path.resolve(output_path, "release");
ensure_directory(release_path);

let debug_path = path.resolve(output_path, "debug");
ensure_directory(debug_path);

let root_path = path.resolve(".");
let source_path = path.resolve("source");

const process = require("process");

process.chdir(release_path);
console.log(`release_path ${process.cwd()}`);
spawnSync("cmake", ["-DCMAKE_BUILD_TYPE=Release", root_path], {
  stdio: "inherit",
});

process.chdir(debug_path);
console.log(`debug_path ${process.cwd()}`);
spawnSync("cmake", ["-DCMAKE_BUILD_TYPE=Debug", root_path], {
  stdio: "inherit",
});
