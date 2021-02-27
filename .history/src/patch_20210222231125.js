const chalk = require('chalk');
const log = console.log;

global.console.log = (...args) => {
  log(chalk[process.env.COLOR](...args))
}
debugger;
global.console.short = (...args) => {
  if (args.length <= 2) {
    log(...args);
    return;
  }
    log(args[0] + ' ... ' + args[args.length-1]);
}