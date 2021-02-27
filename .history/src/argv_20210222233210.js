const os = require('os');
console.log();

const cpu = () => console.log(os.cpus()[0].model);

const lan = () => {
  const osNetwork = os.networkInterfaces().en0;
  console.log(Object.values(osNetwork));
};
lan()