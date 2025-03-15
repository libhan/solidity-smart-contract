require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/4Wsuxpa9ge4wx2hbaOWt0uabQ7LcrK4F", 
      accounts: [process.env.PRIVATE_KEY] 
    }
  }
};









