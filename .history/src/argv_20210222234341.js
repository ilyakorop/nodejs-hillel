const os = require('os');
const chalk = require('chalk');
console.log();

const cpu = () => console.log('CPU: ' + chalk.yellow(os.cpus()[0].model));

const lan = () => {
  const osNetwork = os.networkInterfaces().en0;
  console.log('IPV4 address: ' + chalk.red(Object.values(osNetwork).find(item => item.family === 'IPv4').address));
};

const ram = () => {
  const totalMemoryMB = Number(os.totalmem() / (1024*1024)).toFixed(2);
  console.log(chalk.green('RAM: ' + totalMemoryMB + ' MB'));
}
cpu()
lan();
ram();