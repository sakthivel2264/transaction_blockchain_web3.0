// https://eth-sepolia.g.alchemy.com/v2/C4TMa-c5X4SRDwVp_lMRa-nXpbn8xvR5

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/C4TMa-c5X4SRDwVp_lMRa-nXpbn8xvR5',
      accounts: ['5e04c50182140cae76bae0419c75cec352006221d1ce1df4d708096673661739']
    }
  }
}
