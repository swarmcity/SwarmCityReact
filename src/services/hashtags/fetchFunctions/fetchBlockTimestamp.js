export default async function fetchBlockTimestamp({ blockNumber, web3 }) {
  const block = await web3.eth.getBlock(blockNumber);
  return (block || {}).timestamp ? parseInt(block.timestamp) : "error";
}
