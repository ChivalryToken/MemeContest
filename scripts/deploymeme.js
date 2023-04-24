const { ethers } = require("hardhat");

async function main() {
  const MemeContest = await ethers.getContractFactory("MemeContest");

  // Set the reward and contest duration here
  const rewardAmount = "77000000000000000000000000"; // 77 million CHIVA tokens
  const contestDuration = 60 * 60 * 24 * 7; // 7 days

  // Replace this address with the address of the CHIVA token on Arbitrum One
  const chivaTokenAddress = "0xC7f396aE8466D2a4e551aCEC7003b7d3316A5507";

  const memeContest = await MemeContest.deploy(
    rewardAmount,
    contestDuration,
    chivaTokenAddress
  );

  await memeContest.deployed();

  console.log("MemeContest deployed to:", memeContest.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
