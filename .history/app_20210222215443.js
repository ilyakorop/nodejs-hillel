const { patch } = require ("./src/patch");
const { short }= require("./src/short");
require ("./src/test3");
patch();
short('Hello', 42 ,'World');
test3();