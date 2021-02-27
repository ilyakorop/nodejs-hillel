const os = require('os');
console.log();

const cpu = () => console.log(os.cpus()[0].model);

const lan = () => {
  const osNetwork = os.networkInterfaces().en0;
  console.log(Object.values(osNetwork).find(item => item.family === 'IPv4').address);
};

const ram = () => {
  const totalMemory = Number(os.totalmem());
  console.log(totalMemory / 10000);
}
lan();
ram();