## Durin test

This repo demonstrates a basic way to 

### Install

```
git clone https://github.com/makoto/durintest.git
cd durintest
yarn
```

#### Setup

Copy .env.org to .env and fill in the followings

- PROVIDER_URL = eg: infura url endpoint
- PRIVATE_KEY = PK of the address you are going to sign 
- TOKEN_ADDRESS = a token address. You can get some test tokens [here](https://ethereum.stackexchange.com/questions/38743/where-can-i-find-erc20-token-faucets-for-testing
)
- USER_ADDRESS = the user address which checks the balance against


#### Test

- Run `yarn start` on one terminal
- Run `node client.js` on another terminal

If successful, it should show the following output

```
$node client.js 
response {
  addr: '0xfFD1Ac3e8818AdCbe5C597ea076E8D3210B45df5',
  balance: BigNumber { _hex: '0x3635c9adc5dea00000', _isBigNumber: true },
  proof: '0xea8f1d9bb0760287c544d379ace85ac9a8764d4773f56938fb45ec855012de123781a4895c4cab1b73bdab13334f934a4572a53e26ddd6eaea3930bcdaf1af5b1c'
}
```

