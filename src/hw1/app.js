const checkColor = require('./src/hw1/env');
const { useArgs } = require('./src/hw1/argv');
checkColor();
require ('./src/hw1/patch');
useArgs();
console.log('test color');
console.short('Hello', 42, 'World');
console.short('Hello', 'World');