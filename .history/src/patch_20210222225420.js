const chalk = require('chalk');
const log = console.log;
// console.log(process.env.COLOR)

global.console.log = (...args) => {
  log(chalk[process.env.COLOR](...args))
}

global.console.short = (...args) => {
  log(args[0] + ' ... ' + args[args.length-1]);
}