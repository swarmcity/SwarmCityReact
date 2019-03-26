import { kovSwtToken, simpleDeal } from "contracts/contractsData";

/**
 * Fetches the total reputation of a hashtag from its underlying ERC20 Reputation token
 *
 * @param {String} hashtagAddress
 * @param {Object} dependencies
 */
export default async function getHashtagTotalReputation(
  hashtagAddress,
  { web3 }
) {
  try {
    const hashtagContract = new web3.eth.Contract(
      simpleDeal.abi,
      hashtagAddress
    );
    const repAddress = await hashtagContract.methods.SeekerRep().call();
    const repContract = new web3.eth.Contract(kovSwtToken.abi, repAddress);
    return await repContract.methods.totalSupply().call();
  } catch (e) {
    console.error(
      `Error fetching total reputation supply from hashtag ${hashtagAddress}`,
      e
    );
  }
}
