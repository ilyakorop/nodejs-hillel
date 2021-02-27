const { patch } = require ("./src/patch");
const { short }= require("./src/short");
require ("./src/test3");
patch();
short('test1', '234', 'test3');
test3();