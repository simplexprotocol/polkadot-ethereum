require("dotenv").config();

var HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "344"
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        "https://ropsten.infura.io/v3/".concat(process.env.INFURA_PROJECT_ID)
      ),
      network_id: 3,
      gas: 6000000
    }
  },
  mocha: {
    useColors: true
  },
  compilers: {
    solc: {
      version: "0.6.2",
    }
  }
};
