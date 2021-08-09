const fs = require('fs')
const envfile = require('envfile')
const { network, run } = require("hardhat")
const parsedFile = envfile.parse(fs.readFileSync('./.env'))

const {
  ENS_REGISTRY_ADDRESS
} = parsedFile

console.log({
  ENS_REGISTRY_ADDRESS
})
const GATEWAY = "http://localhost:8080";

async function main() {
  // We get the contract to deploy
  const Resolver = await ethers.getContractFactory("AttestationResolver");
  const resolver = await Resolver.deploy(ENS_REGISTRY_ADDRESS, GATEWAY);
  console.log("Resolver deployed to:", resolver.address);
  parsedFile.ENS_RESOLVER_ADDRESS = resolver.address
  fs.writeFileSync('./.env', envfile.stringify(parsedFile))
}
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
