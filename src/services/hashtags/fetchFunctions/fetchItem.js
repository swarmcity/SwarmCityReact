import fetchBlockTimestamp from "./fetchBlockTimestamp";
import parseItemStatus from "../parsers/parseItemStatus";
import toLowercase from "./toLowercase";

// /// @notice Get the items count
// /// @return Items array length
// function getItemCount() public view returns(uint) {
//     return items.length;
// }

// /// @notice Query a single item
// /// @param _itemId Uint identifying the item.
// /// @return item struct as a tuple
// function getItem(uint _itemId) public view returns(
//     uint64 _status,
//     uint64 _replyCount,
//     uint128 _creationBlock,
//     uint128 _hashtagFee,
//     uint128 _itemValue,
//     address _seekerAddress,
//     address _providerAddress,
//     bytes32 _itemMetadataHash
// ) {
//     itemStruct storage item = items[_itemId];
//     return (item.status, item.replyCount, item.creationBlock, item.hashtagFee, item.itemValue, item.seekerAddress, item.providerAddress, item.itemMetadataHash);
// }

export default async function fetchItem({
  itemId,
  hashtagContract,
  ipfs,
  web3
}) {
  const item = await hashtagContract.methods.getItem(itemId).call();

  const [metadata, timestamp] = await Promise.all([
    ipfs.catJSON(ipfs.bytes32ToHash(item._itemMetadataHash)),
    fetchBlockTimestamp({ blockNumber: item._creationBlock, web3 })
  ]);

  return {
    // From the smart contract
    status: parseItemStatus(item._status),
    replyCount: item._replyCount,
    creationBlock: item._creationBlock,
    hashtagFee: item._hashtagFee,
    itemValue: item._itemValue,
    seekerAddress: toLowercase(item._seekerAddress),
    providerAddress: toLowercase(item._providerAddress),
    itemMetadataHash: item._itemMetadataHash,
    // From IPFS
    description: metadata.description,
    location: metadata.location,
    seekerAvatarHash: metadata.avatar || metadata.avatarHash,
    seekerPublicKey: metadata.seekerPublicKey,
    seekerUsername: metadata.username,
    // From block timestamp
    timestamp,
    // Append for internal ID
    itemId
  };
}
