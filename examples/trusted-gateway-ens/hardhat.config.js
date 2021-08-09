require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require('hardhat-deploy');

module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.6",
      }
    ]
  },
};
