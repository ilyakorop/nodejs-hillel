const os = require('os');
console.log();

const cpu = () => console.log(os.cpus()[0].model);

const lan = () => console.log(os.networkInterfaces().en0);
lan()