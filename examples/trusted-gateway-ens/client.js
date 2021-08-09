const jayson = require('jayson');
const ethers = require('ethers');
require('dotenv').config()
const{
  TOKEN_ADDRESS,
  USER_ADDRESS
} = process.env

const client = new jayson.client.http({
  port: 8080
});
const abi = [
  "function balanceOf(address addr) view returns (uint256)",
  "function balanceOfWithProof(address addr, uint256 balance, bytes proof) view returns (uint256)"
];

const interface = new ethers.utils.Interface(abi)
const data = interface.encodeFunctionData("balanceOf(address addr)", [USER_ADDRESS])
client.request('durin_call', {to:TOKEN_ADDRESS, data}, function(err, response) {
  if(err) throw err;
  const {addr, balance, proof} = interface.decodeFunctionData("balanceOfWithProof(address addr, uint256 balance, bytes proof)", response.result)
  console.log('response', {addr, balance, proof});
});
