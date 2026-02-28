// settings.js
// credit by Kevin tech 

const config = require('./start/Core/developer');


const settings = {
  SESSION_ID: config.SESSION_ID || "", // enter session id
  ownername: config.ownername || "Apostle praize", // Owner name
  botname: config.botname || "Vesper-Xmd", // custom bot name
  prefa: config.prefa || ['.', '!'], // Command prefixes
  owner: config.owner || ["2347071035915"] // Owner phone numbers
};

// Export settings for use in other modules
module.exports = settings;

// Watch for changes to this file and reload if updated
const fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
