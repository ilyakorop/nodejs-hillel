const checkColor = require('./src/env');
const { useArgs } = require('./src/argv');
checkColor();
require ('./src/patch');
// useArgs();
console.log('test color');
console.short('Hello', 42, 'World');
console.short('Hello', 'World');