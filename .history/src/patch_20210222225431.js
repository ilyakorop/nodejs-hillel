const chalk = require('chalk');
const log = console.log;

global.console.log = (...args) => {
  log(chalk[process.env.COLOR](...args))
}

global.console.short = (...args) => {
  log(args[0] + ' ... ' + args[args.length-1]);
}