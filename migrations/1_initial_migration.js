const workchop = artifacts.require('workchop');
// Deploys the smart contract "Decentraskill"
module.exports = function (deployer) {
  deployer.deploy(workchop);
};