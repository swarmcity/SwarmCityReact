import { hashtagDir } from "contracts/contractsData";
import getHashtagTotalReputation from "./getHashtagTotalReputation";
/**
 * Gets hashtag list from the blockchain
 */

export default async function getHashtagList({ web3 }) {
  const hashtagDirContract = new web3.eth.Contract(
    hashtagDir.abi,
    hashtagDir.address
  );
  const numberOfHashtags = await hashtagDirContract.methods
    .numberOfHashtags()
    .call()
    .then(res => parseInt(res));
  // Note that: [...Array(5).keys()] = [1,2,3,4,5]
  return await Promise.all(
    [...Array(numberOfHashtags).keys()].map(async i => {
      const hashtag = await hashtagDirContract.methods.readHashtag(i).call();

      return {
        name: decodeURI(hashtag.hashtagName), // string :  Settler
        hashtagMetaIPFS: hashtag.hashtagMetaIPFS, // string :  zb2rhbixVsHPSfBCUowDPDpkQ4QZR84rRpBSDym44i57NWmtE
        address: hashtag.hashtagAddress, // address :  0x3a1a67501b75fbc2d0784e91ea6cafef6455a066
        hashtagShown: hashtag.hashtagShown, // bool :  false
        hashtagReputation: await getHashtagTotalReputation(
          hashtag.hashtagAddress,
          { web3 }
        )
      };
    })
  );
}
