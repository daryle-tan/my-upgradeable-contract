const { ethers, upgrades } = require("hardhat")

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1")
  const proxy = await upgrades.deployProxy(VendingMachineV1, [1000])
  await proxy.deployed()

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address,
  )

  console.log("Proxy contract address: " + proxy.address)

  console.log("Implementation contract address: " + implementationAddress)
}

main()

// Proxy contract address: 0xCE7724474A0832410Ba9FA86A7578f97Ade50020
// Implementation contract address: 0x0993153Ef725A0D7a0d9C19833bCe8F62147f556
