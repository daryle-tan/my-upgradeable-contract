require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("@openzeppelin/hardhat-upgrades")
require("dotenv").config()

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
    enabled: {
      sepolia: true,
    },
  },
}
