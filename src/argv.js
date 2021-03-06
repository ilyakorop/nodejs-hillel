const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const os = require('os');
const chalk = require('chalk');

const cpu = () => console.log('CPU: ' + os.cpus()[0].model, 'Cores:' + os.cpus().length);

const ipLan = () => {
  const osNetwork = os.networkInterfaces().en0;
  console.log('IPV4 address: ' + chalk.red(Object.values(osNetwork).find(item => item.family === 'IPv4').address));
};

const totalRam = () => {
  const totalMemoryMB = Number(os.totalmem() / (1024*1024)).toFixed(2);
  console.log(chalk.green('RAM: ' + totalMemoryMB + ' MB'));
}

const releaseName = () => {
  console.log(chalk.red('Release name: ' + os.release()));
}

const fullInfo = () => {
  cpu();
  ipLan();
  totalRam();
  releaseName();
}

exports.useArgs = () => {
  const existArg = Object.keys(argv);
  if (existArg.includes('full-info')) {
    fullInfo();
    return;
  }
  existArg.forEach(item => {
    switch(item) {
      case('cpu'): return cpu();
      case('lan'): return ipLan();
      case('ram'): return totalRam();
      case('release'): return releaseName();
    }
  })
}