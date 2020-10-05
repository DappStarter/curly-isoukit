require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture story rifle saddle pulp harvest pave army genre'; 
let testAccounts = [
"0x3950995ddc3a52176c768c85c1b8df58fe943999c060c041836f1022e07d1415",
"0x2caf02929bb5fc593740b3cf1edc0915f5f490e6ec9dbb1f6181a20b52dc69e1",
"0xdbead9e244aadd13ed7fb4d301e147492b0f6b49333153001806cb13f0770142",
"0x753165a4bef46a6ff713bc9d20ea68147539df9af1e31f2e28e1dcd6128d4300",
"0x15f90ba462e13a6f0d1dcc2cbb0b394a8cb66b8765268c2e8cf2f5cd1bd1b088",
"0xc7eee734d814a1f75d695fb2a4b016d56142f1a5f3c895d7423e99a26ec8d794",
"0x536e7bc06312df5eb1fb417f367850f293e5c26fc0791e2632362d508e879302",
"0x85a6f772b49dfc31af0a6d8571783fa5bbf3deeac4b13f9015f8a6cb1a51cad4",
"0x6584aed35aacf92bd3c2bc221aaea6db3d294a4d8f6623ad750a47643da1afd5",
"0x30990c33a208b4dad24d4904525e46aad98e39373072622eb84608b37f5aaf8c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
