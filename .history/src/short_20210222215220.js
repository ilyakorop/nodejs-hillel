const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const COLOR = argv.COLOR || process.env.COLOR || "red";

exports.short = (...args) => {
  console.log(...args);
}