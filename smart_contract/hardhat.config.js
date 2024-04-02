// https://eth-sepolia.g.alchemy.com/v2/C4TMa-c5X4SRDwVp_lMRa-nXpbn8xvR5

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/C4TMa-c5X4SRDwVp_lMRa-nXpbn8xvR5',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
}
