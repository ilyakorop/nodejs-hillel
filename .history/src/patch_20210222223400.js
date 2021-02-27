const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

global.console.short = (...args) => {
  console.log(args[0] + ' ... ' + args[args.length-1]);
}