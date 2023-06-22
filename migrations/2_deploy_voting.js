const TestVote = artifacts.require("TestVote");

module.exports = function (deployer) {
  deployer.deploy(TestVote);
};
