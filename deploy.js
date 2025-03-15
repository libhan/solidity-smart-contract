const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");

  const unlockTime = Math.floor(Date.now() / 1000) + 3600; 

  
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.1") });

  await lock.waitForDeployment();
  console.log("Contract deployed to:", await lock.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
