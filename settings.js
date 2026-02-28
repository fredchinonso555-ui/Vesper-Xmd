// settings.js
// credit by Kevin tech 

const config = require('./start/Core/developer');


const settings = {
  SESSION_ID: config.SESSION_ID || "XMDIAAAAAAAAA61Va4+iSBT9L/VVMxQvEZNOFnmorfgC2sbNfqiGAgoQsChUnPjfN2j3zCQ72+lNlk9FPW6dc+65t76DoiQ1nuMWjL6DipITYrgbsrbCYATGTRRhCvogRAyBEWhtYi578XTnVmmhb3FVWlF6bNaCf+G2/NLrqc/D0MQN3GVP4NYHVfOWk+CTgNYp0k2dLkg4fT6bk6hQN5XUthePzorrVahOOelZB243ngyfwK2LiAglRWxWCT5givI5bteI0K/B163G7UULLcsMpSgV+ZmKliOeB+eMphyMpVCfK05vr/He5mvwxwvzOJ7MrOt1sD72Kn7WzMzU0/zty2C2nJ6axnlttg1KpLH5gF+TuMDhLMQFI6z9su7DJdyLaX6SxxMH+t4hK8+oCiJ3rGuHta1pG7zaNLAnc1b8NeCDcnfa1cZ4SJ7jhtDSXQYvAdlzS4uxnjZBvj9XEj5/C+PsV+Br+uGV7L/obluHTS2ojlYdhwFMBlSw8HyXpupRXL4ua7/dOfqLbG928Iu6V81uQOlemhTysh3n5Upu9sIyW+orM1d8fnjynKUk7lWJ137CR6yhn6GUj24AIYG6v7Dp1bXlec4vVpxcpZUxn6abjKscyY1Oh22QJ3kmxsd9qlQR9M+bkGxLYy33pDzFUTFZVOrWmWzGNRyfn+6MMtzOQjDib31AcUxqRhEjZdHNKYM+QOHJwQHF7K4uSNLaWHHQzdJ4n77MG79A1tVJ95TjDJykdWxfMsMVh9Y4eAJ9UNEywHWNwympWUlbG9c1inENRn/eE9VxpvhQMvxMQjACgigpUOGhKKu8/Ef97ZwgVqOq+lZgBvogouXBxmDEaIP74H5C00XRNFWJV6CgmYLFK0NZ0ixd1AVLNEW5o3h43OqSA64ZOlRgxCuKIAxUVeVv/f8NyFAc6rxomIY5gJYmq5Zk8ENdVyxlbA6UT4AoEELp9lcfFPjCHkbu5BfFPogIrZlXNFVeovDD5R+LKAjKpmBOWwR6N8AUjODPacwYKeK6o9YUiAYJOWG94wFGEcpr/CPjmOLwg8t7F9PLsDOi9Oq6u6m5Bh32LtA/xRkNfqNPft/HQ1kVeUVQFFFQedjt7BZuPyB2EUPMEMnrrgfa1BbzYMOt5vPrxve1VtPmmtb56IPSR608zEjOqb+92K6zNXEoDmzin9fGgm+xlWxW2sxdQGUlO+K8fIW/CwJGYNJW9nWtD6XZZecV88K5uIVZv9nzV01u36wzTbiWt6dwlcXW1IiQ0zjKvqdsIph4UF1NBK+cSPXics2kaW/Hs0hYeffC6oMQn0iAf70M6md0PHsRn67rt0kTJkYx5vxgkrSMe9E5yK2LNYzVly3ysBUKqWgEJS7OOZstQ4fOTsP05cxeS5QKkyg1gu1S97jx5lHF9y6Sv3dv8l5g5P4bEXxvhgXqUviF5D2QdyaDt/4vQd776789OH49E8zANWG2nRZhL50dbOPcqkGR+J4R62arrq6Nx9qjpYJb5/YqRywq6QGMACpCWpIQ9AEtm861syIqP3sutWymxbHVUc9RzbSflfCbKpeVx641LaspqpNOhYmkHZrO1q1WVQ5D7KOwgNZ9xs4Ct78BJ/RlUYQIAAA=", // enter session id
  ownername: config.ownername || "apostlepraize", // Owner name
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
