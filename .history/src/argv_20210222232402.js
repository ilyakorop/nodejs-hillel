const os = require('os');
console.log();

const cpu = () => console.log(os.cpus()[0].model);