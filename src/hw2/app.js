const FindLib = require("./lib/FindLib");
const {
  EVENT_INIT,
  EVENT_FIND,
  EVENT_COMPLETE,
  EVENT_PROGRESS,
  EVENT_ERROR,
} = require("./constants");
const deepSearch = 1;
const regExp = new RegExp(".*?.json$");
const searchDir = __dirname;
const MyEE = new FindLib(searchDir, deepSearch, regExp);

MyEE.on(EVENT_INIT, () => {
  console.log("search started");
  MyEE.parse();
});

MyEE.on(EVENT_FIND, (path) => {
  console.log("find", path);
});

MyEE.once(EVENT_COMPLETE, (found) => {
  console.log("complete", found);
});

MyEE.on(EVENT_PROGRESS, (handle) => {
  console.log("progress", handle);
});

MyEE.once(EVENT_ERROR, (e) => {
  console.error(e);
  process.exit(1);
});
