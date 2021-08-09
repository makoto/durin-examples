const fs = require('fs')
const n = require('eth-ens-namehash')
const envfile = require('envfile')
const parsedFile = envfile.parse(fs.readFileSync('./.env'))
const durin = require('makotodurin');
const artifact = JSON.parse(fs.readFileSync('artifacts/ens-contracts-attestation-resolver/contracts/resolvers/durin/l1/AttestationResolver.sol/AttestationResolver.json'))
console.log(1, artifact.abi)
const {
  PROVIDER_URL,
  PRIVATE_KEY,
  ENS_RESOLVER_ADDRESS
} = parsedFile
console.log(2, {
  PROVIDER_URL,
  PRIVATE_KEY,
  ENS_RESOLVER_ADDRESS
})
console.log({ENS_RESOLVER_ADDRESS})
async function main() {
  console.log(1)
  const server = new durin.Server();
  console.log(2)
  const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
  console.log(3)
  let signer = new ethers.Wallet(PRIVATE_KEY);
  console.log(4)
  server.add(artifact.abi, [
    {
      calltype: 'addr',
      returntype: 'addrWithProof',
      func: async (contractAddress, [addr]) => {
        // const erc20 = new ethers.Contract(contractAddress, abi, provider);
        // const address = await erc20.addr(addr);      
        // let messageHash = ethers.utils.solidityKeccak256(
        //   ['address', 'uint256'],[addr, balance]
        // );
        // let messageHashBinary = ethers.utils.arrayify(messageHash);
        // const sig = await signer.signMessage(messageHashBinary)
        // return [addr, balance, sig];
        return []
      }
    }
  ], ENS_RESOLVER_ADDRESS);
  const app = server.makeApp();
  app.listen(8080);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });