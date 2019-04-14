import hashtagListAbi from "contracts/hashtagListAbi.json";
import hashtagSimpleDealAbi from "contracts/hashtagSimpleDealAbi.json";
/**
 * Gets hashtag list from the blockchain
 */

// const hashtagStatuses = ["NonExistent", "Enabled", "Disabled"];

export default async function getHashtagList({ address, web3 }) {
  const hashtagDirContract = new web3.eth.Contract(hashtagListAbi, address);
  const hashtagAddresses = await hashtagDirContract.methods
    .getHashtags()
    .call();

  const hashtags = await Promise.all(
    hashtagAddresses.map(async hashtagAddress => {
      const status = await hashtagDirContract.methods
        .hashtagsStatus(hashtagAddress)
        .call();

      if (status === 0 || status === 2) return null;

      // Fetch hashtag info
      const hashtag = new web3.eth.Contract(
        hashtagSimpleDealAbi,
        hashtagAddress
      );
      const name = await hashtag.methods.hashtagName().call();
      const itemCount = await hashtag.methods.getItemCount().call();

      return {
        name,
        address: hashtagAddress,
        hashtagShown: true,
        hashtagReputation: parseInt(itemCount) * 5
      };
    })
  );
  return hashtags.filter(x => x);
}
