const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const COLOR = argv.COLOR || process.env.COLOR || "red";

global.console.short = (...args) => {
  // console.log(args[0] + ' ... ' + args[args.length-1]);
  console.log(args)
  args.
  console.log(args);
}