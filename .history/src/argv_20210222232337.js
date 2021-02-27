const os = require('os');
console.log();

const cpu = () => os.cpus()[0].model;