require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember color harvest clinic orient squeeze'; 
let testAccounts = [
"0x6bd5afd4b1cf9ac0f4727a2cbc2aec757df25c3fc76ae7e619bc3dc4dddd1829",
"0xce59974cd924b0e4f233ae686c28a5a75704466079494f7186d9562c1b2d76ab",
"0x41057b3421ca14c6ceb654b6965a9ee1ca7fd66c20e584d7533ddd960230bb84",
"0x2b1fa7b4c74701d6baaaabb6d0edde6314b027bdd5e5b527f1c27e7c34cbf938",
"0x964ffbb8847682fd5212fbc389370d5a2d5906222108f06ca4662aa0306dc8cb",
"0x2768811024f875bcc9a256605d842266a928fec72ca49f0668216fe463385f34",
"0xc97b22d2dbf1d19d2cd9ac42c28086164f0625b47dd2a4f611079792d139328d",
"0x56f4827b60cad30ce3d1449e2cfc41615e5e5655ce4dde35d57fe6c3d564dee6",
"0x43ddaa68f140037af3d91171a7cdc5ceeb22c507002c63c06a3f0b67dd4ccc74",
"0x732003cae981b726a64d7ec3e2d48a88ece34d9db0b4fa84bcd96ed2f4b0a6d6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


