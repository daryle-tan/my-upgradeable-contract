const { ethers, upgrades } = require("hardhat")

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xCE7724474A0832410Ba9FA86A7578f97Ade50020"

async function main() {
  const VendingMachine = await ethers.getContractFactory("VendingMachineV2")
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachine)
  await upgraded.deployed()

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress,
  )

  console.log("The current contract owner is: " + (await upgraded.owner()))
  console.log("Implementation contract address: " + implementationAddress)
}

main()

// The current contract owner is: 0x3ad65239A011766a4F6466252151B4a196Ef5CBF
// Implementation contract address: 0xD42517bD1dD366502810F7aDA5Bb483434dB4245
