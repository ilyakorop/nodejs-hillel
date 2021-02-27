const chalk = require('chalk');

// global.console.log = (...args) => {
//   console.log(chalk[process.env.COLOR](...args))
// }

global.console.short = (...args) => {
  console.log(args[0] + ' ... ' + args[args.length-1]);
}