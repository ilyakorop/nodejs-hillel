const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const chalk = require('chalk');
const color = argv.COLOR || process.env.COLOR;

const checkColor = () => {
  if (typeof chalk[color] !== 'function') {
    console.error(chalk.red(`color ${color} isn't valid!`));
    process.exit(1);
  }
  return true;
}

module.exports = checkColor;