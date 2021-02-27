const chalk = require('chalk');
const color = process.env.COLOR;

const checkColor = () => {
  if (typeof chalk[color] !== 'function') {
    console.error(chalk.red(`color ${color} isn't valid!`));
    process.exit(1);
  }
  return true;
}

module.exports = checkColor;