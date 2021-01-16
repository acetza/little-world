if (process.argv.length < 3) {
  console.log('usage: node module {name}');
  process.exit(1);
}

let mod = process.argv[2];

function build_header_string(mod) {
  let macro = `${mod.toUpperCase()}_H`;
  return `#ifndef ${macro}\n#define ${macro}\n#endif`;
}

function build_source_string(header_filename) {
  return `#include "${header_filename}"`;
}

const path = require('path');

let header_filename = `${mod}.h`;
let source_filename = `${mod}.c`;
let header_path = path.resolve('src', header_filename);
let soruce_path = path.resolve('src', source_filename);

const fs = require('fs');

if (fs.existsSync(header_path)) {
  console.log('problem: the header file already exists.');
} else {
  fs.writeFileSync(header_path, build_header_string(mod));
}
if (fs.existsSync(soruce_path)) {
  console.log('problem: the source file already exists.');
} else {
  fs.writeFileSync(soruce_path, build_source_string(header_filename));
}
