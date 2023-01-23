module.exports = {
  // React only allows importing the built smart contract code (abis) from the src directory
 
  networks: {
    development: {
      host: '127.0.0.1', // localhost
      port: 8545, // default port for ganache dev server
      network_id: '*', // matches any network id
    },
  },
contracts_directory: './contracts/',
contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: '0.8.1', // solidity version
    },
  },
};