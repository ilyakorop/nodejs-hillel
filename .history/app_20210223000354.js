const checkColor = require('./src/env');
checkColor();
require ('./src/patch');
require ('./src/argv')
console.log('test color');
console.short('Hello', 42, 'World');
console.short('Hello', 'World');