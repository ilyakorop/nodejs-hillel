const checkColor = require('./src/env');
checkColor();
require ('./src/patch');
console.log(process.env.COLOR)
console.log('test');
console.log(process.env.COLOR)