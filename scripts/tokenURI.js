const hre = require("hardhat");

const contractAddress = process.env.CONTRACT_ADDRESS;

async function main() {
  const contract = await hre.ethers.getContractAt("ETHDubaiNFTs", contractAddress);
  console.log("tokenURI: ", await contract.tokenURI(1));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
