const checkColor = require('./src/env');
checkColor();
require ('./src/patch');
console.log('test');

console.short('Hello', 42, 'World');
console.short('Hello', 'World');